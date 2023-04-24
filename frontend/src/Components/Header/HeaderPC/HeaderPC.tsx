import { FC } from 'react';
import styles from './style.module.scss';
import FavoriteSVG from '../../UI/Svg/FavoriteSVG';
import OrderSVG from '../..//UI/Svg/OrderSVG';
import SvgLinkBtn from '../../UI/Svg/SvgLinkBtn/SvgLinkBtn';

const HeaderPC: FC = () => {
	return (
		<header className={`container`}>
			<div className={styles.container}>
				<div className={styles.logo}>QPICK</div>

				<div className={styles.buttons}>
					<button className={styles.authBtn}>Войти</button>
					<button className={styles.authBtn}>Регистрация</button>
					<SvgLinkBtn
						value={10}
						onClick={() => {
							('');
						}}>
						<FavoriteSVG />
					</SvgLinkBtn>
					<SvgLinkBtn
						value={10}
						onClick={() => {
							('');
						}}>
						<OrderSVG />
					</SvgLinkBtn>
				</div>
			</div>
		</header>
	);
};

export default HeaderPC;
