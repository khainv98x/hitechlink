import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Global/Header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Page/Home/Home';
import Products from './component/Page/Products/Products.js';
import DetailProduct from './component/Page/DetailProduct/DetailProduct.js';
import ListProduct from './component/Page/ListProduct/ListProduct.js';
import CartProduct from './component/Page/CartProduct/CartProduct.js';
import Order from './component/Page/Order/Order.js';
import Footer from './component/Global/Footer/Footer.js';
import News from './component/Page/News/News.js';
import Services from './component/Page/Services/Services.js';
import ServiceDetail from './component/Page/ServiceDetail/ServiceDetail.js';
import Finish from './component/Page/Order/Finish/Finish.js';
import AboutUs from './component/Page/AboutUs/AboutUs.js';
import ContactUs from './component/Page/ContactUs/ContactUs.js';


function App() {
  return (
    <div className="App">
        <Header></Header>
        
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/products" element={<Products></Products>} ></Route>
          <Route path="/search/:slug" element={<ListProduct></ListProduct>} ></Route>
          <Route path="/detail/:slug" element={<DetailProduct></DetailProduct>} ></Route>
          <Route path="/cart" element={<CartProduct></CartProduct>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/servicedetail" element={<ServiceDetail></ServiceDetail>}></Route>
          <Route path="/finish" element={<Finish></Finish>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>

        </Routes>
        <Footer></Footer>                 
    </div>
  );
}

export default App;
