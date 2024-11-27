import { useEffect, useState } from "react";
import ListarProdutos from "../components/ListarProdutos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Header.module.css';

export default function Home() {
    const [produtos, setProdutos] = useState([]); 
    const [listar, setListar] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        const lista = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setProdutos(dados); 
                setListar(dados);
            } catch (error) {
                console.log("A API não carregou");
            }
        };
        lista();
    }, []);

    const orderAZ = () => {
        const listaOrdenada = [...listar].sort((a, b) => a.title.localeCompare(b.title));
        setListar(listaOrdenada);
    }

    const orderZA = () => {
        const listaOrdenada = [...listar].sort((a, b) => b.title.localeCompare(a.title));
        setListar(listaOrdenada);
    }

    const PrecoMaior = () => {
        const listaOrdenada = [...listar].sort((a, b) => b.price - a.price);
        setListar(listaOrdenada);
    }

    const PrecoMenor = () => {
        const listaOrdenada = [...listar].sort((a, b) => a.price - b.price);
        setListar(listaOrdenada);
    }

    const buscarProdutos = (dados) => {
        setPesquisa(dados);
        const produtosFiltrados = produtos.filter(produto => 
            produto.title.toLowerCase().includes(dados.toLowerCase())
        );
        setListar(produtosFiltrados);
    }

    return (
        <div>
            <Header/>
            <input 
                placeholder="Pesquisar..." 
                onChange={(event) => buscarProdutos(event.target.value)}
                className={styles.BarradeNavegacaos}
            />
            <button onClick={() => orderAZ()} className={styles.botoes}>Filtro a AZ</button>
            <button onClick={() => orderZA()} className={styles.botoes}>Filtro a ZA</button>
            <button onClick={() => PrecoMaior()} className={styles.botoes}>Filtro Preço Maior</button>
            <button onClick={() => PrecoMenor()} className={styles.botoes}>Filtro Preço Menor</button>
            <ListarProdutos listaProdutos={listar} />
            <Footer/>
        </div>
    );
}
