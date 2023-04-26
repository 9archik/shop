import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface IBurgerMenu {
	children: ReactNode;
    active: boolean;
}

const BurgerMenu: FC<IBurgerMenu> = ({ children, active }) => {
    
	return (
		<>
			<div className={`${styles.container} ${active && styles.active} `}>{children}</div>
		</>
	);
};

export default BurgerMenu