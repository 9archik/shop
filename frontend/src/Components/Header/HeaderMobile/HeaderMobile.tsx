import { FC, useState } from 'react';
import styles from './style.module.scss';
import SvgLinkBtn from '../../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import OrderSVG from '../../UI/Svg/OrderSVG';

const HeaderMobile: FC = () => {
	const [burgerActive, setBurgerActive] = useState<boolean>(false);
	
    return (
			<header className={`container`}>
				<div className={styles.container}>
					<div className={styles.logo}>QPICK</div>

					<div className={styles.buttons}>
						<SvgLinkBtn
						    className={styles.orderBtn}
							value={10}
							onClick={() => {
								('');
							}}>
							<OrderSVG />
						</SvgLinkBtn>

						<button onClick={() => setBurgerActive(!burgerActive)} className={`${styles.burgerBtn} ${burgerActive && styles.active}`}>
						    <span></span>
						</button>
					</div>
				</div>
			</header>
		);
}

export default HeaderMobile;