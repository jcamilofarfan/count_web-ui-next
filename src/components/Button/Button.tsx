import Link from 'next/link';
import { ButtonInterface } from './button.interface';
import styles from './Button.module.scss';

const Button= (props: ButtonInterface) => {
    const { destiny, status, text, icon } = props;
    return (
        <Link href={destiny}>
            <p className={styles.button}>
                <span>
                    <i className={`${styles.icon} ${icon}`}></i>
                </span>
                <span>{text}</span>

            </p>
        </Link>
    );
}

export default Button