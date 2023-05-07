import { FC } from 'react';
import styles from './style.module.scss';
import SvgLinkBtn from '../../../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import OrderSVG from '../../../UI/Svg/OrderSVG';
import FavoriteSVG from '../../../UI/Svg/FavoriteSVG';
import { Link } from 'react-router-dom';
import { toggleModalNav } from '../../../../store/store';

interface IBurgerChildrenProp {
	height: number;
	setSectionModal: React.Dispatch<React.SetStateAction<string | null>>;
}

const BurgerChildren: FC<IBurgerChildrenProp> = ({ height, setSectionModal }) => {
	const modalActive = toggleModalNav((state) => state.setState);

	const handleAuthButton = (value: string) => {
		modalActive();
		setSectionModal(value);
	};
	return (
		<>
			<div style={{ marginTop: height + 10 }} className={`${styles.container} container`}>
				<div className={styles.menu}>
					<Link to="/bucket">
						{' '}
						<OrderSVG />
						Корзина
					</Link>

					<Link to="/favorite">
						{' '}
						<FavoriteSVG />
						Избранное
					</Link>

					<div>
						<button onClick={() => handleAuthButton('auth')} className={styles.authBtn}>
							Войти
						</button>
					</div>

					<div>
						<button onClick={() => handleAuthButton('reg')} className={styles.regBtn}>
							Регистрация
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default BurgerChildren;
