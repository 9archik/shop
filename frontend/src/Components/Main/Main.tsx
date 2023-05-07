import { FC, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useQuery } from 'react-query';
import { DjangoQuery } from '../../services/query.service';
import SectionList from '../UI/SectionList/SectionList';
import ProductCard from '../UI/ProductCard/ProductCard';

interface IProduct {
	title: string;
	product_id: number | string;
	price: number | string;
	image: string;
}

export interface ICatalogQueryData {
	product_list: IProduct[];
	section: string;
}

const Main: FC = () => {
	const queryInfo = useQuery({
		queryFn: () => DjangoQuery.getCatalog(),
		queryKey: ['32'],
	});

	const [catalogInfo, setCatalogInfo] = useState<ICatalogQueryData[] | null | undefined>(null);

	useEffect(() => {
		if (queryInfo.data) {
			setCatalogInfo(queryInfo.data);
		}
	}, [queryInfo]);

	console.log(catalogInfo && catalogInfo);
	return (
		<div className={`${styles.container} container`}>
			{catalogInfo ? (
				catalogInfo.map((el) => {
					return (
						<SectionList name={el.section}>
							{
								<>
									{el &&
										el.product_list &&
										el.product_list.map((prod) => {
											return (
												<ProductCard
													id={prod.product_id}
													price={prod.price}
													title={prod.title}
													image={prod.image}
												/>
											);
										})}
								</>
							}
						</SectionList>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
};

export default Main;
