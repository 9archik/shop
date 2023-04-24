import { FC } from 'react';
import styles from './style.module.scss';
import FavoriteSVG from '../UI/Svg/FavoriteSVG';
import OrderSVG from '../UI/Svg/OrderSVG';
import SvgLinkBtn from '../UI/Svg/SvgLinkBtn/SvgLinkBtn';
import { useWindowDimensions } from '../Hooks/UseWindowDimensions';
import HeaderPC from './HeaderPC/HeaderPC';
import HeaderMobile from './HeaderMobile/HeaderMobile';

const Header: FC = () => {
    const {width} = useWindowDimensions();

    if(width>767)
    return <HeaderPC/>

    return <HeaderMobile/>
};

export default Header;
