import React, { useState } from "react";
import "./Sale.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardProduct from "../../../../Global/CardProduct/CardProduct";
import useFetch from "../../../../features/useFetch";
const Sale = ({ type }) => {
  //   const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  //   const movie = useFetch(
  //     `https://api.themoviedb.org/3/movie/${props.data}?api_key=${API_KEY}&page=1`
  //   );
  const products = useFetch(
    "https://6725c4e6c39fedae05b5c316.mockapi.io/products"
  );

  if (!products || products.length === 0) {
    return <div>Loading...</div>; // Hiển thị khi chưa có dữ liệu
  }
  //   const saleProducts = products.filter(product => product.hasOwnProperty("sale"));
  const saleProducts = products.filter((product) => product.type === type);
  if (!saleProducts || saleProducts.length === 0) {
    return <div>Không có sản phẩm</div>; // Nếu không có sản phẩm khuyến mãi
  }

  const settings = {
    infinite: true, 
    speed: 500, // Thời gian chuyển slide (500ms)
    slidesToShow: saleProducts.length < 3 ? saleProducts.length : 3, // Hiển thị tối đa 3 slide
    slidesToScroll: 1, // Mỗi lần cuộn sẽ chuyển một slide
    autoplay: true, // Bật chế độ tự động chuyển slide
    autoplaySpeed: 2000, // Thời gian giữa mỗi lần chuyển slide (2000ms = 2 giây)
    // nextArrow: <div style={{ fontSize: "30px" }}>Next</div>, // Tùy chỉnh nút next
    // prevArrow: <div style={{ fontSize: "30px" }}>Previous</div>, // Tùy chỉnh nút previous
  };

  return (
    <div>
      <Slider {...settings}>
        {saleProducts.map((item) => (
          <CardProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            description={item.description}
          ></CardProduct>
        ))}
      </Slider>
    </div>
  );
};

export default Sale;
