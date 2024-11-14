import React, { useEffect, useState } from "react";
import "./CartProduct.css";
import { UseCart } from "../../context/CartContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CartProduct = () => {
  const { cart, handleQuantity, handleDelete } = UseCart();
  const [selectedProducts, setSelectedProducts] = useState(localStorage.getItem("SELECTED_CART") ? JSON.parse(localStorage.getItem("SELECTED_CART")) : []);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // Xử lý khi thay đổi trạng thái của checkbox "chọn tất cả"

  const handleSelectAllChange = () => {
    if (isSelectAllChecked) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(cart.map((product) => product.id));
    }
    setIsSelectAllChecked(!isSelectAllChecked);
  };

  // Xử lý khi thay đổi trạng thái của từng checkbox sản phẩm
  const handleProductChange = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(
        selectedProducts.filter((productId) => productId !== id)
      );
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
    setTotalPrice(calculateTotalPrice(cart, selectedProducts));
   
  };
  
  // const handleBuy = (id) => {
  //   const newCart = [...cart];
  //   if (selectedProducts.includes(id)) {
  //     cart[id].buy="true";
      
  //   //   setSelectedProducts(
  //   //     selectedProducts.filter((productId) => productId !== id)
  //   //   );
  //   // } else {
  //   //   setSelectedProducts([...selectedProducts, id]);
  //   // }
  //   //local storage

  // };


  // Cập nhật trạng thái của checkbox "Select All" dựa trên danh sách sản phẩm được chọn
  React.useEffect(() => {
    setIsSelectAllChecked(selectedProducts.length === cart.length);
    localStorage.setItem("SELECTED_CART", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  // Tính tổng tiền của các sản phẩm được chọn
  const calculateTotalPrice = (cart, selectedProducts) => {
    return cart
      .filter((item) => selectedProducts.includes(item.id))
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  // Cập nhật tổng tiền khi selectedProducts hoặc cart thay đổi
  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart, selectedProducts));
  }, [selectedProducts, cart]);

  
  return (
    <div>
      <Container>
        <Row className="cart-row">
          <Col md={7}>
            <Row className="g-2 cart-sum">
              <div className="select-all">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={isSelectAllChecked}
                  onChange={handleSelectAllChange}
                />
                <label htmlFor="selectAll">
                  Chọn tất cả (<span>{selectedProducts.length}</span>)
                </label>
              </div>
            </Row>

            {cart.map((item, index) => (
              <Row className="g-2 contain-cart">
                <Col className="cart-left" key={item.id}>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(item.id)}
                    onChange={() => handleProductChange(item.id)}
                  />
                  <label>{item.name}</label>
                  <div className="list-cart">
                    <div className="cart-item">
                      <div className="item-image">
                        <img src={item.image} alt="" />
                      </div>

                      <div className="item-title">
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="cart-right">
                  <div className="number">
                    <p>Số lượng:</p>
                    <p>
                      <i
                        class="fa-solid fa-square-caret-down"
                        onClick={() => handleQuantity("minus", index)}
                      ></i>
                      <span> {item.quantity} </span>
                      <i
                        class="fa-solid fa-square-caret-up"
                        onClick={() => handleQuantity("plus", index)}
                      ></i>
                    </p>
                  </div>

                  <div className="price">
                    <p>Giá tiền:</p>
                    <p>
                      {Number(item.quantity * item.price).toLocaleString(
                        "vi-VN",
                        { style: "currency", currency: "VND" }
                      )}
                    </p>
                  </div>

                  <div className="trash">
                    <p>
                      <a
                        href="javascript:;"
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
          <Col md={5} className="g-2 payment">
            <div className="sum">
              
                <p>Thông tin đơn hàng</p>
                <div className="s_total">
                  <div>Tổng tiền:</div>
                  <div className="total">
                    <span>
                      $
                      {Number(totalPrice).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </div>
                </div>
                <p>Quà tặng:</p>
                <ul>
                  <li>Mã giảm giá</li>
                  <li>Vận chuyển</li>
                </ul>
                <p>Thưởng điểm:</p>
                <Link to="/order" className="s_button"  >
                  <p>Thanh Toán</p>
                </Link>
                <div className="alert">
                  <p>
                    Bạn hãy an tâm chọn " thanh toán " vì bạn chưa phải thanh toán
                    ở bước này .
                  </p>
                </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartProduct;
