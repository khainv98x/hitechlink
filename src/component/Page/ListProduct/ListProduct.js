import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import CardProduct from "../../Global/CardProduct/CardProduct";
import useFetch from "../../features/useFetch";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ListProduct = () => {
  const { slug: keysearch } = useParams();
  const [key, setKey] = useState("all");
  // console.log(keysearch);

  const dataProduct = useFetch(
    "https://6725c4e6c39fedae05b5c316.mockapi.io/products"
  );
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    if (dataProduct.length > 0) {
      // Điều kiện đảm bảo đã load dataProduct
      if (keysearch) {
        const findProduct = dataProduct.filter((item) =>
          item.title.toLowerCase().includes(keysearch.toLowerCase())
        );
        setFilterProduct(findProduct);
      } else {
        setFilterProduct(dataProduct);
      }
    }
  }, [dataProduct, keysearch]);
  useEffect(() => {
    switch (key) {
      case "0-100000":
        handleFilter(0, 100000);
        break;
      case "101000-200000":
        handleFilter(101000, 200000);
        break;
      case "201000-500000":
        handleFilter(201000, 500000);
        break;
      case "501000-1000000":
        handleFilter(501000, 1000000);
        break;
      default:
        handleFilter(); // Hiển thị tất cả sản phẩm
        break;
    }
  }, [key, dataProduct]); // Chạy lại khi key và dataProduct thay đổi
  const handleFilter = (min, max) => {
    if (!min && !max) {
      setFilterProduct(dataProduct);
    } else {
      const filterData = dataProduct.filter(
        (item) => item.price >= min && item.price <= max
      );
      setFilterProduct(filterData);
    }
  };
  console.log(filterProduct);

  return (
    <div>
      <div className="list-filter">
        <Tabs activeKey={key} onSelect={(event) => setKey(event)}>
          <Tab
            eventKey="all"
            title="Tất cả"
            onClick={() => handleFilter()}
          ></Tab>
          <Tab
            eventKey="0-100000"
            title="Từ 0đ - 100.000đ"
            onClick={() => handleFilter(0, 100000)}
          ></Tab>
          <Tab
            eventKey="101000-200000"
            title="Từ 101.000đ - 200.000đ"
            onClick={() => handleFilter(101000, 200000)}
          ></Tab>
          <Tab
            eventKey="201000-500000"
            title="201.000đ - 500.000đ"
            onClick={() => handleFilter(201000, 500000)}
          ></Tab>
          <Tab
            eventKey="501000-1000000"
            title="Từ 501.000đ - 1.000.000đ"
            onClick={() => handleFilter(501000, 1000000)}
          ></Tab>
        </Tabs>
      </div>
      <Container>
        <Row className="list-product">
          {filterProduct.map((item) => (
            
              <CardProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
              ></CardProduct>
           
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListProduct;
