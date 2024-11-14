import { createContext, useContext, useState } from "react";
import useFetch from "../features/useFetch";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );
  const handleAddCart = (product) => {
    const newCart = [...cart];
    const checkIndex = cart.findIndex((item) => item.id === product.id);
    if (checkIndex >= 0) {
      newCart[checkIndex].quantity++;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  // const handleBuy=(product)=>{
    
  // }
  //tang giam so luong trong gio hang
  const handleQuantity = (type, index) => {
    console.log(type);

    const newCart = [...cart];
    if (type === "plus") {
      cart[index].quantity++;
    } else if (type === "minus") {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      }
      // }else{
      //   newCart.splice(index,1);
      // }
    }
    
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  //hàm xoá sản phẩm đã mua khỏi local storage
  const handleDelPay=()=>{
    const localSelected = JSON.parse(localStorage.getItem("SELECTED_CART"));
    console.log(localSelected);
    //lọc những sản phẩm đã có trong SELECTED_CART ra thì còn lại là sản phẩm có trong giỏ hàng
    //khi đã oder
    const newCart = cart.filter((item)=>!localSelected.includes(item.id));
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));//số lượng hàng còn lại sau khi đã mua thành công
    localStorage.removeItem("SELECTED_CART");//xoá những mã hàng đã được mua thành công  
  }
  return (
    <CartContext.Provider
      value={{cart, handleAddCart, handleQuantity, handleDelete,handleDelPay }}
    >
      {children}
    </CartContext.Provider>
  );
};

const UseCart = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCart };
