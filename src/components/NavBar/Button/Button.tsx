import Link from 'next/link';
import styles from './Button.module.scss';
import { FC } from 'react';
import { ButtonInterface } from './Button.interface';

interface props {
    children?: any;
    data: ButtonInterface;
}

const Button: FC<props> = (props) => {
    let { destiny, status, text } = props.data;
    return (
        <Link href={destiny}>
            <p className={`${styles.button} ${`${styles[status]}`}`}>
                {props.children}
                <span>{text}</span>
            </p>
        </Link>
    );
}

export default Button