import React from "react";
import "./ContactUs.css";
import { Col, Container, Row } from "react-bootstrap";
import Map from "../../Global/Map/Map.js";
const ContactUs = () => {
  return (
    <div className="contactus">
      <Container>
        <Row>
          <Col md={3} className="phone"></Col>
          <Col md={3}>
            <div className="p-title">
              <h3>Thông tin liên hệ</h3>
            </div>
            <h4>Kinh doanh:</h4>
            <h5>
              <i class="fa-solid fa-phone"></i>
              <>Tel 1 : 0915.559.439</>{" "}
            </h5>
            <h5>
              <i class="fa-solid fa-phone"></i>
              <>Tel 2 : 0707.678.345</>{" "}
            </h5>
            <h4>Kỹ thuật:</h4>
            <h5>
              <i class="fa-solid fa-phone"></i>
              <>Tel 1 : 0915.559.439</>{" "}
            </h5>
            <h5>
              <i class="fa-solid fa-phone"></i>
              <>Tel 2 : 0707.678.345</>{" "}
            </h5>
            <h4>Đường dây nóng:</h4>
            <h5>
              <i class="fa-solid fa-phone"></i>
              <>Tel 1 : 0915.559.439</>{" "}
            </h5>
            <div></div>
          </Col>
          <Col md={6}>
            <Map></Map>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
