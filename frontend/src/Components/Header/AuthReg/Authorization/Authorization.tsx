import { FC } from "react"
import styles from '../style.module.scss'

const Authorization: FC = () => {
    return (
			<>
				<div className={`${styles.container} container`}>
					<div className={styles.header}>Вход</div>
					<form className={styles.form}>
						<div className={styles.formItem}>
							<div className={styles.formItemHeader}>Логин</div>
							<input type="text" placeholder="Логин" className={styles.input} />
						</div>
						<div className={styles.formItem}>
							<div className={styles.formItemHeader}>Пароль</div>
							<input type="password" placeholder="Пароль" className={styles.input} />
						</div>

						<button className={styles.submitBtn} type="submit">
						     Войти
						</button>
					</form>
				</div>
			</>
		);
}

export default Authorization;