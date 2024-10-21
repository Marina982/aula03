export default function ListarProdutos({listaProdutos}){
return(

    <ul>
{
listaProdutos.map(produto => (
    <li key={produto.id}>
<p>{produto.title}</p>
<p>{produto.price}</p>
    </li>
))
}

</ul>
    )
}