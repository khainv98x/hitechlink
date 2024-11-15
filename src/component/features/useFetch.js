import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [product, setProduct] = useState([]);
    const getProduct = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data.results?data.results:data);
        } catch (err) {
            alert(err);
        }
    };
    useEffect(() => {
        getProduct();
    },[url]);// moi lan url thay doi thi no load lai
    return product;

};

export default useFetch;