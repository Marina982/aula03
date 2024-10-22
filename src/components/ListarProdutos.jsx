export default function ListarProdutos({ listaProdutos }) {
    return (
        <ul>
            {listaProdutos.map(produto => (
                <li key={produto.id}>
                    <img src={produto.image} alt={produto.title} />
                    <p>{produto.title}</p>
                    <p>Valor: {produto.price}</p>
                </li>
            ))}
        </ul>
    );
}
