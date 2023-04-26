import { FC, useState } from 'react';
import styles from './style.module.scss';
import SvgLinkBtn from '../../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import OrderSVG from '../../UI/Svg/OrderSVG';
import FavoriteSVG from '../../UI/Svg/FavoriteSVG';
import { toggleBurgerMenu } from '../../../store/store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';



const HeaderMobile: FC = () => {
	const [burgerActive, setBurgerActive] = useState<boolean>(false);




	return (
		<>
			<header className={`container`}>
				<div className={styles.container}>
					<div className={styles.logo}>QPICK</div>

					<div className={styles.buttons}>
						<div className={styles.svgButtons}>
							<SvgLinkBtn
								className={styles.orderBtn}
								value={10}
								onClick={() => {
									('');
								}}>
								<OrderSVG />
							</SvgLinkBtn>

							<SvgLinkBtn
								value={10}
								onClick={() => {
									('');
								}}>
								<FavoriteSVG />
							</SvgLinkBtn>
						</div>

						<span style={{ display: 'flex', alignItems: 'center', transform: 'translateY(-2px)' }}>
							<button
								onClick={() => setBurgerActive(!burgerActive)}
								className={`${styles.burgerBtn} ${burgerActive && styles.active}`}>
								<span></span>
							</button>
						</span>
					</div>
				</div>
			</header>
			
			<BurgerMenu active={burgerActive}><></></BurgerMenu>

		</>
	);
};

export default HeaderMobile;
