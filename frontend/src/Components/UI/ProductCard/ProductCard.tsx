import { FC } from "react";
import ActiveLikeSVG from "../Svg/ActiveLikeSVG";
import LikeSVG from "../Svg/LikeSVG";
import RatingStar from "../Svg/RatingStar";
import styles from './style.module.scss'
interface IProductCardProp
{
    id: number | string
    price: string | number;
    title: string;
    image: string
    isLike?: boolean;
	onClickLike?: () => void
}
const ProductCard:FC<IProductCardProp> = ({id, price, title, isLike, image}) => {
    return (
			<div className={styles.container}>
				<div>
					<button className={styles.likeBtn}>{isLike ? <ActiveLikeSVG /> : <LikeSVG />}</button>
				</div>

				<div className={styles.info}>
					<img src={image} alt=""  />
					<div className={styles.infoText}>
						<div className={styles.description}>
							<div className={styles.name}>{title}</div>
							<div className={styles.price}>{price} руб</div>
						</div>

						<div className={styles.feedback}>
							<RatingStar /> <span className={styles.value}>4.7</span>
						</div>
					</div>
				</div>
			</div>
		);
}

export default ProductCard;