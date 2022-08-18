import Link from 'next/link';
import { ButtonInterface } from './button.interface';
import styles from './Button.module.scss';
import { FC } from 'react';

interface props {
    children: any;
    data: ButtonInterface;
}

const Button: FC<props> = (props) => {
    const { destiny, status, text } = props.data;
    return (
        <Link href={destiny}>
            <p className={styles.button}>
                <span>
                    <i className={status}>
                        {props.children}
                    </i>
                </span>
                <span>{text}</span>
            </p>
        </Link>
    );
}

export default Button