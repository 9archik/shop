import { FC } from 'react';
import styles from './style.module.scss';
import headphonePNG from '../../Assets/Images/Headphone.png';
import DeleteSVG from '../UI/Svg/DeleteSVG';

const Bucket: FC = () => {
	return (
		<div className={`container ${styles.container}`}>
			<div className={styles.header}>Корзина</div>
			<div className={styles.main}>
				<div className={styles.content}>
					<ul className={styles.productList}>
						<li>
							<div className={styles.btnCont}>
								<button>
									<DeleteSVG />
								</button>
							</div>
							<div className={styles.productInfo}>
								<div className={styles.img}>
									<img src={headphonePNG} alt="" />
								</div>
								<div className={styles.description}>
									<div className={styles.name}>Apple BYZ S852I</div>
									<div className={styles.price}>2937 руб</div>
								</div>
							</div>
							<div className={styles.calcPrice}>
								<div className={styles.counter}>
									<button>
										<svg
											width="18"
											height="2"
											viewBox="0 0 18 2"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M0.789062 0H17.2002V2H0.789062V0Z" fill="white" />
										</svg>
									</button>
									<div className={styles.count}>1</div>
									<button>
										<svg
											width="17"
											height="14"
											viewBox="0 0 17 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7.08412 6V0H9.42856V6H16.4619V8H9.42856V14H7.08412V8H0.0507812V6H7.08412Z"
												fill="white"
											/>
										</svg>
									</button>
								</div>

								<div className={styles.commonPrice}>2937 руб</div>
							</div>
						</li>
					</ul>
				</div>
				<div className={styles.side}>
					<div className={styles.regOrder}>
						<div>
							<div className={styles.totalPriceCont}>
				  				<span>Итого</span>
								<div className={styles.value}>2937 руб</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bucket;
