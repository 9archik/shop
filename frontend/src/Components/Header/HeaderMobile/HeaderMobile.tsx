import { FC, useRef, useState } from 'react';
import styles from './style.module.scss';
import SvgLinkBtn from '../../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import OrderSVG from '../../UI/Svg/OrderSVG';
import FavoriteSVG from '../../UI/Svg/FavoriteSVG';
import { toggleBurgerMenu } from '../../../store/store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerChildren from './BurgerChildren/BurgerChildren';

interface IHeaderProp {
	setSectionModal: React.Dispatch<React.SetStateAction<string | null>>;
}

const HeaderMobile: FC<IHeaderProp> = ({ setSectionModal }) => {
	const [burgerActive, setBurgerActive] = useState<boolean>(false);

	const containerRef = useRef<HTMLDivElement>(null);

	console.log(containerRef && containerRef.current?.clientHeight);

	return (
		<>
			<header ref={containerRef} className={`container`}>
				<div className={styles.container}>
					<div className={styles.logo}>QPICK</div>

					<div className={styles.buttons}>
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

			<BurgerMenu active={burgerActive}>
				<BurgerChildren
					setSectionModal={setSectionModal}
					height={
						containerRef && containerRef.current?.clientHeight
							? containerRef.current?.clientHeight
							: 0
					}
				/>
			</BurgerMenu>
		</>
	);
};

export default HeaderMobile;
