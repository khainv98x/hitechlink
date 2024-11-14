import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Về Chúng Tôi</h5>
              <p>
              Hitechlink chuyên cung cấp thiết bị và giải pháp mạng tốc độ cao, 
              đáp ứng nhu cầu kết nối mạnh mẽ cho doanh nghiệp, 
              với công nghệ tiên tiến và hiệu suất vượt trội.
              </p>
            </Col>
            <Col md={4}>
              <h5>Liên kết nhanh</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" className="text-light">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-light">
                    Lợi ích
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-light">
                   Tin tức
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Liên hệ</h5>
              <address>
                86/59 Phổ Quang <br />
                Phường 02, Quận Tân Bình, HCM <br />
                <a href="mailto:info@hitechlink.net" className="text-light">
                info@hitechlink.net
                </a>
              </address>
                  <div className="followus">
                    <a href="https://facebook.com" className="text-light mx-2">
                      <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" className="text-light mx-2">
                      <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" className="text-light mx-2">
                      <FaInstagram size={24} />
                    </a>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <p>
                &copy; {new Date().getFullYear()} Bản quyền thuôc Hitechlink
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
