import React, { useEffect, useState } from "react";
import ListProduct from "../../ListProduct/ListProduct";
import Sale from "./Sale/Sale";
import { Tab, Tabs } from "react-bootstrap";
const HomeProduct = () => {
  const [key, setKey] = useState("specialoffer");

  return (
    <div>
      <div className="sale-filter">
        <Tabs activeKey={key} onSelect={(event) => setKey(event)}>
          <Tab
            eventKey="new"
            title="Sản phẩm mới"
            
          ></Tab>
          <Tab
            eventKey="specialoffer"
            title="Khuyến mãi"
            
          ></Tab>
          <Tab
            eventKey="bestseller"
            title="Bán chạy"
            
          ></Tab>
        </Tabs>
        {/* Hiển thị component dựa trên giá trị của `key` */}
        {key === "specialoffer" && <Sale type="sale"/>}
        {key === "new" && <Sale type="new"/>}
        {key === "bestseller" && <Sale type="bestseller"/>}
      </div>
    </div>
  );
};

export default HomeProduct;
