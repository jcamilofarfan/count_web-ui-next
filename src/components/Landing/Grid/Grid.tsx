import styles from './Grid.module.scss';
import { FC } from "react";

interface props {
    children: any;
}

const Grid: FC<props> = ({ children }) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    );
}

export default Grid;