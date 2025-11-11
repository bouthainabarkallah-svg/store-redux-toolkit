
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { store } from './store';
import Card from "./Card";
import Nav from "./Nav";
import Categorie from "./FilterCategory";
import NotFound from "./NotFound";
import Login from "./Login.jsx";
import Detail from "./Detail.jsx";
import Cart from "./Cart";

export default function App() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(res => setData(res.data))
            .catch(error => console.log(error));
    }, []);

    const filteredData = data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav setSearchTerm={setSearchTerm} />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Card products={filteredData} />} />
                    <Route path="/Categorie" element={<Categorie prodact={data} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<Detail products={data} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}