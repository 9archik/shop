import { FC } from 'react';
import styles from '../style.module.scss';

const Registration: FC = () => {
	return (
		<>
			<div className={`${styles.container} container`}>
                <div className={styles.header}>Регистрация</div>
				<form className={styles.form}>
					<div className={styles.formItem}>
						<div className={styles.formItemHeader}>Email</div>
						<input type="email" placeholder="email" className={styles.input} />
					</div>
					<div className={styles.formItem}>
						<div className={styles.formItemHeader}>Логин</div>
						<input type="text" placeholder="Логин" className={styles.input} />
					</div>
					<div className={styles.formItem}>
						<div className={styles.formItemHeader}>Пароль</div>
						<input type="password" placeholder="Пароль" className={styles.input} />
					</div>

					<button className={styles.submitBtn} type="submit">Зарегистрироваться</button>
				</form>
			</div>
		</>
	);
};

export default Registration
