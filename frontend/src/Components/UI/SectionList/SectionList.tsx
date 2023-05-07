import { FC, ReactNode } from "react"
import styles from "./style.module.scss"

interface ISectionListProp
{
    children: ReactNode
    name: string
}

const SectionList:FC<ISectionListProp>= ({children, name}) => {
    return (
			<>
				<div className={styles.section}>
					<div className={styles.sectionName}>{name}</div>
					<div className={styles.sectionList}>{children}</div>
				</div>
			</>
		); 
}

export default SectionList;