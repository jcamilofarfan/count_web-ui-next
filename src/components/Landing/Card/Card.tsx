import { CardInterface } from '../../../interface/Card.interface';
import styles from './Card.module.scss';

const Card= (props: CardInterface) => {
    const { title, description, link, id } = props;
    return (
        <a href={link} className={styles.card}>
            <h2>{title} &rarr;</h2>
            <p>{description}</p>
        </a>
    );
}

export default Card;