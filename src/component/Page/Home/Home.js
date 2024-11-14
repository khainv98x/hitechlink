import React, { useEffect, useState } from "react";
import "./Home.css";
import Slide from "./Slide/Slide";
import HomeProduct from "./HomeProduct/HomeProduct";
import { Col, Container, Row } from "react-bootstrap";
import HomeService from "./HomeService/HomeService";
import HomeNews from "./HomeNews/HomeNews";

const Home = () => {
  return (
    <div className="home">
      <Slide></Slide>
      <Container>
        <Row>
          <Col md={9}>
            <HomeProduct></HomeProduct>
            <HomeService></HomeService>
            <HomeNews></HomeNews>
          </Col>
          <Col md={3}>
            <div className="contact">
              <div className="c-title">
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
              <div>
                Thông tin email đặt lịch //sử dụng validate
                <form action="">
                  <input type="text" placeholder="email" />
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
