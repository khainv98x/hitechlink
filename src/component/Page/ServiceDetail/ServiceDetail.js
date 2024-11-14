import React from "react";
import "./ServiceDetail.css";
import IT_consultant from "../../../../src/assets/Service/IT_consultant.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ServiceDetail = () => {
  return (
    <div className="servicedetail">
      <div className="banner">
        <img className="image-effect" src={IT_consultant} alt="" />
        <div className="servicetitle">
          <img src={`${process.env.PUBLIC_URL}/hitechlink.png`} alt="" />
          <h1>DỊCH VỤ QUẢN TRỊ MẠNG</h1>
        </div>
      </div>
      <Container className="servicedetail-body">
        <Row>
          <Col md={9}>
            <h1>DỊCH VỤ QUẢN TRỊ MẠNG</h1>
            <p>
              Bạn mong đợi rằng những người bạn hợp tác phải là những người
              không chỉ là chuyên gia. Bạn yêu cầu họ phải là những chuyên gia
              có trách nhiệm và phản hồi cao. Điều này đặc biệt đúng khi thuê
              ngoài các hệ thống quan trọng của doanh nghiệp bạn. Bạn không thể
              để chúng hoạt động kém hoặc ngừng hoạt động trong bất kỳ khoảng
              thời gian nào. Đó là lý do tại sao bạn cần hợp tác với Hitechlink
              Hitechlink cung cấp Dịch vụ được quản lý bằng cách sử dụng tiêu
              chuẩn tốt nhất của ngành để giữ cho cơ sở hạ tầng và hệ thống mạng
              quan trọng của bạn hoạt động an toàn, đồng thời duy trì tính khả
              dụng và hiệu suất cao. Khi bạn tập trung vào hoạt động kinh doanh
              cốt lõi của mình, Hitechlink có thể cung cấp chuyên môn CNTT cấp
              doanh nghiệp với chi phí chỉ bằng một phần nhỏ chi phí thuê một
              nhân viên CNTT nội bộ.
            </p>
            <table>
              <tr>
                <td>Bảo trì chủ động</td>
                <td>Hỗ trợ & quản trị từ xa không giới hạn</td>
              </tr>
              <tr>
                <td>Hỗ trợ & quản trị tại chỗ không giới hạn</td>
                <td>Hổ trợ người dùng không giới hạn</td>
              </tr>
              <tr>
                <td>Quản lý bản vá quan trọng</td>
                <td>Phản hồi ưu tiên</td>
              </tr>
              <tr>
                <td>Hỗ trợ khẩn cấp sau giờ làm việc</td>
                <td>Giám sát thời gian thực 24×7</td>
              </tr>
              <tr>
                <td>Giám sát hiệu suất</td>
                <td>Giám sát và cảnh báo sự kiện Windows</td>
              </tr>
              <tr>
                <td>Giám sát kết nối mạng liền mạch</td>
                <td>Phòng CNTT ảo</td>
              </tr>
              <tr>
                <td>Đánh giá công nghệ</td>
                <td>Thực thi chính sách mạng</td>
              </tr>
              <tr>
                <td>Quản lý vận hành thiết bị</td>
                <td>Tường lửa được quản lý</td>
              </tr>
              <tr>
                <td>Phần mềm chống vi-rút được quản lý</td>
                <td>Cổng thông tin khách hàng trực tuyến</td>
              </tr>
              <tr>
                <td>Báo cáo tích hợp</td>
                <td>Tư vấn mua hàng</td>
              </tr>
            </table>
            <p>
              Hitechlink cung cấp các Thỏa thuận dịch vụ hỗ trợ CNTT để đảm bảo
              khoản đầu tư của bạn được bảo trì và bảo vệ tốt. Hợp đồng của
              chúng tôi dựa trên phí cố định để đảm bảo bạn không phải chịu bất
              kỳ chi phí bất ngờ nào liên quan đến việc quản lý và bảo trì Hệ
              thống CNTT của mình. Dịch vụ hỗ trợ được quản lý của chúng tôi
              mang lại lợi ích cho các tổ chức bằng cách giảm thời gian ngừng
              hoạt động và cải thiện tính bảo mật cũng như tính khả dụng của Hệ
              thống CNTT của họ. Với Thỏa thuận dịch vụ hỗ trợ được quản lý của
              chúng tôi, chúng tôi đảm bảo phản hồi ưu tiên với hỗ trợ kỹ thuật
              từ xa và tại chỗ không giới hạn cho các thiết bị được bảo trì. Mục
              tiêu của chúng tôi là giảm đáng kể tổng chi phí sở hữu và bảo trì
              công nghệ của bạn trong khi vẫn đạt được thời gian hoạt động tối
              đa.
            </p>
          </Col>
          <Col md={3}>
            <div className="menu-title">
              <h3>DANH MỤC DỊCH VỤ</h3>
            </div>
            <Link to="/servicedetail"><h5><i class="fa-brands fa-servicestack"></i>DỊCH VỤ QUẢN TRỊ MẠNG</h5></Link>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
