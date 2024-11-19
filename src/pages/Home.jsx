import { useEffect, useState } from "react";
import ListarProdutos from "../components/ListarProdutos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    const [listar, setListar] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

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
    

    const buscarProdutos = (termo) => {
        setPesquisa(termo);
        const produtosFiltrados = listar.filter(produto => 
            produto.title.toLowerCase().includes(termo.toLowerCase())
        );
        setListar(produtosFiltrados);
    }



    return (
        <div>
            <Header/>
            <input 
                placeholder="Pesquisar" 
                onChange={(event) => buscarProdutos(event.target.value)}
            />
            <button onClick={() => orderAZ()}>Filtro a AZ</button>
            <button onClick={() => orderZA()}>Filtro a ZA</button>
            <button onClick={() => PrecoMaior()}>Filtro Preço Maior</button>
            <button onClick={() => PrecoMenor()}>Filtro Preço Menor</button>

            <ListarProdutos listaProdutos={listar} />
            <Footer/>
        </div>
    );
}
