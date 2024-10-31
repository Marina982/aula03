import { useEffect, useState } from "react";
import ListarProdutos from "../components/ListarProdutos";
import styles from '../styles/ListarProdutos.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    const [listar, setListar] = useState([]);

    useEffect(() => {
        const lista = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setListar(dados);
            } catch (error) {
                console.log("A API não carregou");
            }
        };
        lista();
    }, []);

    return (
        <div>
             <Header/>
            <ListarProdutos listaProdutos={listar} />
            <Footer/>
        </div>
    );
}
