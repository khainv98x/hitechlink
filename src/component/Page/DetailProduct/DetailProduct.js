import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./DetailProduct.css";
import { useParams } from "react-router-dom";
import useFetch from "../../features/useFetch";
import { UseCart } from "../../context/CartContext";
import CardProduct from "../../Global/CardProduct/CardProduct";
import ReactImageMagnify from "react-image-magnify";
const DetailProduct = () => {
  const { slug: id } = useParams();
  const detailProduct = useFetch(`https://6725c4e6c39fedae05b5c316.mockapi.io/products/${id}`);
  const { handleAddCart } = UseCart();
  const [quantity, setQuantity] = useState(1);
  //luu danh sach sanr pham da coi vao 1 mang, luu mang vao localstorage
  const [productViewed, setProductViewed] = useState(
    //khởi tạo productViewed trong localstorage
    localStorage.getItem("viewedProducts")
      ? JSON.parse(localStorage.getItem("viewedProducts"))
      : []
  );
  
  useEffect(() => {
    console.log(Object.values(detailProduct));

    if (detailProduct) {
      //kiểm tra xem đã có sản phẩm xem đã vào trong list chưa
      const isViewed = productViewed.some(
        (product) => product.id === detailProduct.id
      );
      console.log(isViewed);

      //Nếu sản phâm đang xem chưa có thì thêm vào
      if (!isViewed && Object.values(detailProduct).length > 0) {
        const newProductView = [...productViewed];
        newProductView.push(detailProduct);
        setProductViewed(newProductView);

        //cập nhật lại locastorage với danh sách sản phẩm mới
        localStorage.setItem("viewedProducts", JSON.stringify(newProductView));
      }
    }
  }, [id, detailProduct]);

  //cần đảm bảo newimage không bị undefine, nên tạo "" sau đó dùng useEffect để cập nhật 
  //giá trị cho nó khi detailproduct thay đổi.

  const [newimage,setNewImage]=useState("");
  useEffect(()=>{
    if (detailProduct && detailProduct.image) {
      setNewImage(detailProduct.image);
    }
  }, [detailProduct]);
  console.log(newimage);
  
  const handleChangeImg=(item)=>{
    setNewImage(item);
  }
  return (
    <div className="detail-product">
      <Container>
        <Row className="first-row">
          <Col className="image">
            <div className="thumb">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: newimage,
                  },
                  largeImage: {
                    src: newimage,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
            <div className="list-image">
              <img
                src={detailProduct.image} 
                onClick={()=>handleChangeImg(detailProduct.image)} 
              />
              <img
                src={detailProduct.image1}
                onClick={()=>handleChangeImg(detailProduct.image1)}
              />
              <img
                src={detailProduct.image2}
                onClick={()=>handleChangeImg(detailProduct.image2)}
              />
            </div>
          </Col>
          <Col className="detail">
            <h2>{detailProduct.title}</h2>
            <h4>{detailProduct.category}</h4>
            <p>
              <span>Giá tiền:</span>
              {Number(detailProduct.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </p>
            <p>{detailProduct.description}</p>
            <div>
              <span className="span-number">Số lượng:</span>
              <i
                onClick={() => quantity >= 1 && setQuantity(quantity - 1)}
                className="fa-solid fa-square-caret-down"
              ></i>
              <span className="quantity">{quantity}</span>
              <i
                onClick={() => setQuantity(quantity + 1)}
                className="fa-solid fa-square-caret-up"
              ></i>
            </div>
            <div className="buy">
              <button>Order now</button>
              <button onClick={() => handleAddCart(detailProduct)}>
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="contact">
              <button>Liên hệ tư vấn</button>
            </div>
            {/* <div className="alert">
              <p>
                Please click "order now" because at this step you do not have to
                pay yet.
              </p>
            </div> */}
          </Col>
        </Row>
        <Row className="second-row">
          <div className="title">
            <h3>Sản Phẩm Đã Xem</h3>
          </div>
          <div className="list-product-viewed">
            <Container>
              <Row className=" g-5 row-list-product-viewed">
                {productViewed.map((item) => (
                  <CardProduct
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    // price={item.price ? item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : 'N/A'}
                    price={item.price}
                    description={item.description}
                  ></CardProduct>
                ))}
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DetailProduct;
