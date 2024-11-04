import styles from '../styles/ListarProdutos.module.css';
import Loading from './Loading';

export default function ListarProdutos({ listaProdutos }) {
    if (listaProdutos.length === 0) {
        return <Loading />;
    }

    return (
        <ul className={styles.blocoLista}>
            {listaProdutos.map(produto => (
                <li key={produto.id} className={styles.card}>
                    <img src={produto.image} alt={produto.title} />
                    <p>{produto.title}</p>
                    <p>Valor: {produto.price}</p>
                </li>
            ))}
        </ul>
    );
}
