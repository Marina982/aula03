import { useEffect, useState } from "react";
import ListarProdutos from "../components/ListarProdutos";



export default function Home() {

    const [listar, setListar] = useState([])

    useEffect(() => {
        const lista = async () => {
        try{
            const resposta  = await fetch('https://fakestoreapi.com/products')
            const dados = await resposta.json()
            setListar(dados)
            }catch (error) {
console.log("A API não carregou")
            }
          lista();
        }
    },[]);
}

return(
<>

<ListarProdutos listaProdutos={produto}></ListarProdutos>

</>
);