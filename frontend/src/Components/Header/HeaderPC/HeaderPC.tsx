import { FC } from 'react';
import styles from './style.module.scss';
import FavoriteSVG from '../../UI/Svg/FavoriteSVG';
import OrderSVG from '../..//UI/Svg/OrderSVG';
import SvgLinkBtn from '../../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import { Link } from 'react-router-dom';
import { toggleModalNav } from '../../../store/store';

interface IHeaderProp {
	setSectionModal: React.Dispatch<React.SetStateAction<string | null>>;
}

const HeaderPC: FC<IHeaderProp> = ({setSectionModal}) => {
	const modalActive = toggleModalNav(state=> state.setState)

	const handleAuthButton = (value:string) => {
        modalActive()
		setSectionModal(value)
	} 
	return (
		<header className={`container`}>
			<div className={styles.container}>
				<div className={styles.logo}>QPICK</div>

				<div className={styles.buttons}>
					<button onClick={() => handleAuthButton('auth')} className={styles.authLink}>
						Войти
					</button>
					<button onClick={() => handleAuthButton('reg')} className={styles.authLink}>
						Регистрация
					</button>
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
