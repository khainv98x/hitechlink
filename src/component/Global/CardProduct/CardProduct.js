import React from "react";
import "./CardProduct.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { UseCart } from "../../context/CartContext";

const CardProduct = ({ id,image, title, price, description }) => {
  const formattedPrice = Number(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  
  const { handleAddCart } = UseCart();
  return (
    <Card style={{ width: "18rem" }} className="card-product" >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <h4>{title}</h4>
          </Card.Title>
        <Card.Text>
          <span className="price">Giá tiền:</span> {formattedPrice}{" "}
          <i class="fa-solid fa-star"></i>3.9
        </Card.Text>
      </Card.Body>
      <Button variant="primary" onClick={() => handleAddCart({ id,image, title, price, description })}>Thêm vào giỏ hàng</Button>
      <Card className="pop-up">
        <Card.Text className="popup-content">
          <Link to={`/detail/${id}`}>{description}</Link>
          
          </Card.Text>
        <Link to={`/detail/${id}`}className="show-more">xem thêm ...</Link>
      </Card>
    </Card>
  );
};

export default CardProduct;
