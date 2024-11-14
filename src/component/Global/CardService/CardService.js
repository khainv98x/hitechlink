import React from "react";
import "./CardService.css";
import { Link } from 'react-router-dom';
import IT_consultant from "../../../assets/Service/IT_consultant.png";
const CardService = () => {
  return (
    <div className="cardservice">
      
      <div class="thumb">
        
        <div class="thumb-wrapper">
            <img src={IT_consultant} alt="" />
        </div>
    </div>
    <div class="detail">
        <h2>DỊCH VỤ QUẢN TRỊ MẠNG</h2>
        <h4>Doanh nghiệp sẽ được hưởng nhiều lợi ích từ dịch vụ quản trị hệ thống mạng ...</h4>
        <Link to="/servicedetail">Xem thêm</Link>
    </div>
          
    </div>
  );
};

export default CardService;
