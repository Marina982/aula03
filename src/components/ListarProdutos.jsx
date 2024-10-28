import styles from '../styles/ListarProdutos.module.css'

export default function ListarProdutos({ listaProdutos }) {
    return (
        <ul className={styles.blocoLista}>
            {listaProdutos.map(produto => (
                <li key={produto.id} className={styles.card}>
                    <img src={produto.image}  />
                    <p>{produto.title}</p>
                    <p>Valor: {produto.price}</p>
                </li>
            ))}
        </ul>
    );
}
