import { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface IModal {
	active: boolean;
	setActive: (bool: boolean) => void;
	children: ReactNode;
}

export const Modal: FC<IModal> = ({ active, setActive, children }) => {
	return (
		<div
			className={`${styles.modal} ${active ? styles.active : ''}`}
			onClick={() => setActive(false)}>
			<div
				className={`${styles.content} ${active ? styles.activeContent : ''}`}
				onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
