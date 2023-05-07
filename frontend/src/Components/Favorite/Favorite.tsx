import { FC, useState } from 'react';
import styles from './style.module.scss';
import headphonePNG from '../../Assets/Images/Headphone.png';
import LikeSVG from '../UI/Svg/LikeSVG';
import ActiveLikeSVG from '../UI/Svg/ActiveLikeSVG';
import RatingStar from '../UI/Svg/RatingStar';
import ProductCard from '../UI/ProductCard/ProductCard';
import SectionList from '../UI/SectionList/SectionList';

const Favorite: FC = () => {
	const [like, setLike] = useState<boolean>(false);
	return (
		<>
			<div className={`${styles.container} container`}>
				<h2 className={styles.header}>Избранное</h2>

				{/* <SectionList name="Наушники">
					<ProductCard
						title={`Apple BYZ`}
						image={headphonePNG}
						price={2930}
						section="Наушники"
						isLike={false}
					/>
					<ProductCard
						title={`Apple BYZ`}
						image={headphonePNG}
						price={2930}
						section="Наушники"
						isLike={false}
					/>
					<ProductCard
						title={`Apple BYZ`}
						image={headphonePNG}
						price={2930}
						section="Наушники"
						isLike={false}
					/>
					<ProductCard
						title={`Apple BYZ`}
						image={headphonePNG}
						price={2930}
						section="Наушники"
						isLike={true}
					/>
					<ProductCard
						title={`Apple BYZ`}
						image={headphonePNG}
						price={2930}
						section="Наушники"
						isLike={false}
					/>
					<ProductCard
						title={`Apple BYZ`}
						image={headphonePNG}
						price={2930}
						section="Наушники"
						isLike={false}
					/>
				</SectionList> */}
			</div>
		</>
	);
};

export default Favorite;
