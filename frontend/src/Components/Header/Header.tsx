import { FC, useState } from 'react';
import styles from './style.module.scss';
import FavoriteSVG from '../UI/Svg/FavoriteSVG';
import OrderSVG from '../UI/Svg/OrderSVG';
import SvgLinkBtn from '../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import { useWindowDimensions } from '../../Hooks/UseWindowDimensions';
import HeaderPC from './HeaderPC/HeaderPC';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import { toggleModalNav } from '../../store/store';
import { Modal } from '../UI/Modal/Modal';
import Registration from './AuthReg/Registration/Registration';
import Authorization from './AuthReg/Authorization/Authorization';

const Header: FC = () => {
	const { width } = useWindowDimensions();

	const { active, setState } = toggleModalNav();

	const [activeModalSection, setActiveSectionModal] = useState<string | null>(null);

	return (
		<>
			<Modal active={active} setActive={setState}>
				{
					<>
						{activeModalSection === 'reg' && <Registration />}
						{activeModalSection === 'auth' && <Authorization />}
					</>
				}
			</Modal>
			{width > 767 ? (
				<HeaderPC setSectionModal={setActiveSectionModal} />
			) : (
				<HeaderMobile setSectionModal={setActiveSectionModal} />
			)}
		</>
	);
};

export default Header;
