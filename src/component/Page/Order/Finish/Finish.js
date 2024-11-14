import "./Finish.css"
import React from 'react';
import shopping from "../../../../assets/Background/Shopping.png"
import Confetti from 'react-confetti';
const Finish = () => {
     // Tạo trạng thái để kiểm soát thời gian hiển thị pháo hoa
     const [showConfetti, setShowConfetti] = React.useState(true);

     // Tự động tắt hiệu ứng pháo hoa sau vài giây
     React.useEffect(() => {
         const timer = setTimeout(() => setShowConfetti(false), 10000); // 10 giây
         return () => clearTimeout(timer);
     }, []);
 
     return (
         <div className="finish">
             {showConfetti && <Confetti />}
             <img src={shopping} alt="Shopping" />
             <h1>Chúc mừng bạn đã hoàn thành đơn hàng, chúng tôi sẽ liên hệ lại bạn trong thời gian sớm nhất</h1>
         </div>
     );
 };

export default Finish;