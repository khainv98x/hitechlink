// import React, { useState, useEffect, useRef } from "react";
// import Accordion from "react-bootstrap/Accordion";
// import { Col, Container, Form, Row } from "react-bootstrap";
// import { UseCart } from "../../context/CartContext";
// import "./Order.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// const Order = () => {
//   const { cart,handleDelPay } = UseCart();
//   const [selectCart, setSelectCart] = useState([]);
//   const navigate=useNavigate()
//   useEffect(() => {
//     const localSelected = JSON.parse(localStorage.getItem("SELECTED_CART"));
//     console.log(localSelected);

//     const arr = cart.filter((item) => {
//       if (localSelected.includes(item.id)) {
//         return item;
//       }
//     });
//     setSelectCart(arr);
//   }, []);
//   console.log(selectCart);
//   const [selectedRadio, setSelectedRadio] = useState(null);
//   const handleRadioChange = (value) => {
//     setSelectedRadio(value);
//   };
//   //new
//   const form = useRef();
//   const formik = useFormik({
//     initialValues: {
//       customer_name: "",
//       customer_email: "",
//       customer_address: "",
//       customer_phone: "",
//     },
//     validationSchema: Yup.object({
//       customer_name: Yup.string().required("Required"),
//       customer_email: Yup.string()
//         .email("Invalid email address")
//         .required("Required"),
//       customer_address: Yup.string().required("Required"),
//       customer_phone: Yup.string().required("Required"),
//     }),
//     onSubmit: async (values) => {
//       console.log(values);
//       // emailjs
//       //   .sendForm("service_yofwzpa", "template_55z68f8", form.current, {
//       //     publicKey: "m3GtRXZJBw3T5MTR0",
//       //   })
//       //   .then(
//       //     () => {
//       //       console.log("SUCCESS!");
//       //     },
//       //     (error) => {
//       //       console.log("FAILED...", error.text);
//       //     }
//       //   );
//     },
//   });
//   const handleAddCart = async (e) => {
//     e.preventDefault();
//     try {
//         const res = await axios.post(`https://6725c4e6c39fedae05b5c316.mockapi.io/cart`, values);
//         alert("ADD DONE !");
//         navigate("/");
//     } catch (err) {
//         alert(err);
//     }
// };
//   const handleremove=()=>{
//     //viết hàm để thêm sản phẩm mua vào API
//     handleAddCart();
//     handleDelPay();//gọi hàm xoá sản phảm trong localstorage
//     navigate("/finish")
//   }
//   return (
//     <div>
//       <div className="order">
//         <Container>
//           <Row>
//             <Col>
//               {/* <form action="">
//                 <Accordion defaultActiveKey={["0"]} alwaysOpen>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header>
//                       Thông tin người mua hàng
//                     </Accordion.Header>
//                     <Accordion.Body>
//                       <div className="name flex-input">
//                         <h4>Người mua hàng</h4>
//                         <input
//                           type="text"
//                           name="fullname"
//                           placeholder="Họ & Tên"
//                         />
//                       </div>
//                       <div className="address flex-input">
//                         <h4>Địa chỉ</h4>
//                         <input
//                           type="text"
//                           name="address"
//                           placeholder="Địa chỉ"
//                         />
//                       </div>
//                       <div className="phone flex-input">
//                         <h4>Số điện thoại</h4>
//                         <input
//                           type="text"
//                           name="phone"
//                           placeholder="Số điện thoại"
//                         />
//                       </div>
//                       <div className="email flex-input">
//                         <h4>Email</h4>
//                         <input type="text" name="email" placeholder="Email" />
//                       </div>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="1">
//                     <Accordion.Header>Thông tin xuất hoá đơn</Accordion.Header>
//                     <Accordion.Body>
//                       <div className="companyname flex-input">
//                         <h4>Tên Công Ty</h4>
//                         <input
//                           type="text"
//                           name="companyname"
//                           placeholder="Tên công ty"
//                         />
//                       </div>
//                       <div className="companyaddress flex-input">
//                         <h4>Địa chỉ</h4>
//                         <input
//                           type="text"
//                           name="companyaddress"
//                           placeholder="Địa chỉ"
//                         />
//                       </div>
//                       <div className="taxcode">
//                         <h4>Số điện thoại</h4>
//                         <input
//                           type="text"
//                           name="taxcode"
//                           placeholder="Mã số thuế"
//                         />
//                       </div>
//                       <div className="companyemail">
//                         <h4>Email</h4>
//                         <input
//                           type="text"
//                           name="companyemail"
//                           placeholder="Email"
//                         />
//                       </div>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="2">
//                     <Accordion.Header>Phương thức thanh toán</Accordion.Header>
//                     <Accordion.Body>
//                       <Form.Check
//                         type="radio"
//                         label="Thanh toán tiền mặt khi nhận hàng"
//                         name="options"
//                         value="1"
//                         checked={selectedRadio === "1"}
//                         onChange={() => handleRadioChange("1")}
//                       />
//                       <Form.Check
//                         type="radio"
//                         label="Thanh toán bằng mã QR Code"
//                         name="options"
//                         value="2"
//                         checked={selectedRadio === "2"}
//                         onChange={() => handleRadioChange("2")}
//                       />
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <button>Hoàn thành</button>
//               </form> */}
//               <form ref={form} id="form-order" onSubmit={formik.handleSubmit}>
//                 <Accordion defaultActiveKey={["0"]} alwaysOpen>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header>
//                       Thông tin người mua hàng
//                     </Accordion.Header>
//                     <Accordion.Body>
//                       <div className="name flex-input">
//                         <h4>Người mua hàng</h4>                       
//                         <input
//                           type="text"
//                           onChange={formik.handleChange}
//                           name="customer_name"
//                           placeholder="Họ và tên"
//                         />
//                         {formik.touched.customer_name &&
//                         formik.errors.customer_name ? (
//                           <div className="error">
//                             {formik.errors.customer_name}
//                           </div>
//                         ) : null}
//                       </div>
//                       <div className="address flex-input">
//                         <h4>Địa chỉ</h4>                       
//                         <input
//                           type="text"
//                           onChange={formik.handleChange}
//                           name="customer_address"
//                           placeholder="Địa chỉ"
//                         />
//                         {formik.touched.customer_address &&
//                         formik.errors.customer_address ? (
//                           <div className="error">
//                             {formik.errors.customer_address}
//                           </div>
//                         ) : null}
//                       </div>
//                       <div className="phone flex-input">
//                         <h4>Số điện thoại</h4>
//                         <input
//                           type="text"
//                           onChange={formik.handleChange}
//                           name="customer_phone"
//                           placeholder="Số điện thoại"
//                         />
//                         {formik.touched.customer_phone &&
//                         formik.errors.customer_phone ? (
//                           <div className="error">
//                             {formik.errors.customer_phone}
//                           </div>
//                         ) : null}
//                       </div>
//                       <div className="email flex-input">
//                         <h4>Email</h4>                       
//                         <input
//                           type="email"
//                           onChange={formik.handleChange}
//                           name="customer_email"
//                           placeholder="Email"
//                         />
//                         {formik.touched.customer_email &&
//                         formik.errors.customer_email ? (
//                           <div className="error">
//                             {formik.errors.customer_email}
//                           </div>
//                         ) : null}
//                       </div>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="1">
//                     <Accordion.Header>Thông tin xuất hoá đơn</Accordion.Header>
//                     <Accordion.Body>
//                       <div className="companyname flex-input">
//                         <h4>Tên Công Ty</h4>
//                         <input
//                           type="text"
//                           name="companyname"
//                           placeholder="Tên công ty"
//                         />
//                       </div>
//                       <div className="companyaddress flex-input">
//                         <h4>Địa chỉ</h4>
//                         <input
//                           type="text"
//                           name="companyaddress"
//                           placeholder="Địa chỉ"
//                         />
//                       </div>
//                       <div className="taxcode">
//                         <h4>Số điện thoại</h4>
//                         <input
//                           type="text"
//                           name="taxcode"
//                           placeholder="Mã số thuế"
//                         />
//                       </div>
//                       <div className="companyemail">
//                         <h4>Email</h4>
//                         <input
//                           type="text"
//                           name="companyemail"
//                           placeholder="Email"
//                         />
//                       </div>
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="2">
//                     <Accordion.Header>Phương thức thanh toán</Accordion.Header>
//                     <Accordion.Body>
//                       <Form.Check
//                         type="radio"
//                         label="Thanh toán tiền mặt khi nhận hàng"
//                         name="options"
//                         value="1"
//                         checked={selectedRadio === "1"}
//                         onChange={() => handleRadioChange("1")}
//                       />
//                       <Form.Check
//                         type="radio"
//                         label="Thanh toán bằng mã QR Code"
//                         name="options"
//                         value="2"
//                         checked={selectedRadio === "2"}
//                         onChange={() => handleRadioChange("2")}
//                       />
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>
//                 <button type="submit" onClick={handleremove}>Send</button>
//               </form>
           
//             </Col>
//             <Col>
//               <h3>Danh sách sản phẩm đặt hàng</h3>
//               <Row>
//                 {selectCart.map((item) => (
//                   <div className="order-cart">
//                     <div className="order-item">
//                       <div className="order-image">
//                         <img src={item.image} alt="" />
//                       </div>

//                       <div className="order-title">
//                         <h5>{item.title}</h5>
//                       </div>
//                     </div>
//                     <div className="order-quantity">
//                       <h5>SL {item.quantity}</h5>
//                     </div>
//                   </div>
//                 ))}
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Order;

import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Form, Row } from "react-bootstrap";
import { UseCart } from "../../context/CartContext";
import "./Order.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Order = () => {
  const { cart, handleDelPay } = UseCart();
  const [selectCart, setSelectCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const localSelected = JSON.parse(localStorage.getItem("SELECTED_CART"));
    const arr = cart.filter((item) => localSelected.includes(item.id));
    setSelectCart(arr);
  }, [cart]);

  const [selectedRadio, setSelectedRadio] = useState(null);
  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  // Khởi tạo formik và gọi handleAddCart khi submit
  const formik = useFormik({
    initialValues: {
      customer_name: "",
      customer_email: "",
      customer_address: "",
      customer_phone: "",
    },
    validationSchema: Yup.object({
      customer_name: Yup.string().required("Required"),
      customer_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      customer_address: Yup.string().required("Required"),
      customer_phone: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleAddCart(values);  // Gọi handleAddCart khi submit form
    },
  });

  // Hàm gửi sản phẩm đã đặt mua lên API
  const handleAddCart = async (customerInfo) => {
    try {
      const promises = selectCart.map((item) =>
        axios.post(`https://6725c4e6c39fedae05b5c316.mockapi.io/cart`, {
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          customer_name: customerInfo.customer_name,
          customer_email: customerInfo.customer_email,
          customer_address: customerInfo.customer_address,
          customer_phone: customerInfo.customer_phone,
          payment_method: selectedRadio,
        })
      );

      await Promise.all(promises);

      alert("Đơn hàng đã được đặt thành công!");
      handleDelPay();  // Xoá sản phẩm khỏi localStorage sau khi đặt hàng
      navigate("/finish"); // Điều hướng về trang xác nhận
    } catch (err) {
      alert("Lỗi khi đặt hàng: " + err.message);
    }
  };

  return (
    <div>
      <div className="order">
        <Container>
          <Row>
            <Col>
              <form id="form-order" onSubmit={formik.handleSubmit}>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Thông tin người mua hàng
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="name flex-input">
                        <h4>Người mua hàng</h4>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          name="customer_name"
                          placeholder="Họ và tên"
                        />
                        {formik.touched.customer_name && formik.errors.customer_name && (
                          <div className="error">{formik.errors.customer_name}</div>
                        )}
                      </div>
                      <div className="address flex-input">
                        <h4>Địa chỉ</h4>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          name="customer_address"
                          placeholder="Địa chỉ"
                        />
                        {formik.touched.customer_address && formik.errors.customer_address && (
                          <div className="error">{formik.errors.customer_address}</div>
                        )}
                      </div>
                      <div className="phone flex-input">
                        <h4>Số điện thoại</h4>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          name="customer_phone"
                          placeholder="Số điện thoại"
                        />
                        {formik.touched.customer_phone && formik.errors.customer_phone && (
                          <div className="error">{formik.errors.customer_phone}</div>
                        )}
                      </div>
                      <div className="email flex-input">
                        <h4>Email</h4>
                        <input
                          type="email"
                          onChange={formik.handleChange}
                          name="customer_email"
                          placeholder="Email"
                        />
                        {formik.touched.customer_email && formik.errors.customer_email && (
                          <div className="error">{formik.errors.customer_email}</div>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Phương thức thanh toán</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check
                        type="radio"
                        label="Thanh toán tiền mặt khi nhận hàng"
                        name="options"
                        value="1"
                        checked={selectedRadio === "1"}
                        onChange={() => handleRadioChange("1")}
                      />
                      <Form.Check
                        type="radio"
                        label="Thanh toán bằng mã QR Code"
                        name="options"
                        value="2"
                        checked={selectedRadio === "2"}
                        onChange={() => handleRadioChange("2")}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <button type="submit">Send</button>
              </form>
            </Col>
            <Col>
              <h3>Danh sách sản phẩm đặt hàng</h3>
              <Row>
                {selectCart.map((item) => (
                  <div key={item.id} className="order-cart">
                    <div className="order-item">
                      <div className="order-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="order-title">
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                    <div className="order-quantity">
                      <h5>SL {item.quantity}</h5>
                    </div>
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Order;
