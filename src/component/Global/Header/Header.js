import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { UseCart } from "../../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = UseCart();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${e.target.querySelector("input").value}`);
  };
  return (
    <Navbar expand="lg" className="header bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{ color: "blue" }}>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/hitechlink.png`} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/aboutus" className="menu">
              GIỚI THIỆU
            </NavLink>
            <NavLink to="/products" className="menu">
              SẢN PHẨM
            </NavLink>
            <NavLink to="/services" className="menu">
              DỊCH VỤ
            </NavLink>
            <NavLink to="/news" className="menu">
              TIN TỨC
            </NavLink>
            <NavLink to="/contactus" className="menu">
              LIÊN HỆ
            </NavLink>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="tìm kiếm"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/aboutus" className="menu">
              GIỚI THIỆU
            </NavLink>
            <NavLink to="/products" className="menu">
              SẢN PHẨM
            </NavLink>
            <NavLink to="/services" className="menu">
              DỊCH VỤ
            </NavLink>
            <NavLink to="/news" className="menu">
              TIN TỨC
            </NavLink>
            <NavLink to="/contactus" className="menu">
              LIÊN HỆ
            </NavLink>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="tìm kiếm"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <Link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>{cart.length}</span>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
