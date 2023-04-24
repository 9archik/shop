import { FC, ReactNode } from 'react';
import styles from './styles.module.scss'

interface ISvgLinkBtnProp {
	value: string | number;
	children: ReactNode;
	onClick: () => void;
	className?: string;
}

const SvgLinkBtn: FC<ISvgLinkBtnProp> = ({value, children, onClick, className}) => {
	return (
		<button onClick={() => onClick()} className={`${styles.svgBtn} ${className}` }>
			{children}
			<div className={styles.count}>19</div>
		</button>
	);
};

export default SvgLinkBtn;
