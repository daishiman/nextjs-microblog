import Head from "next/head";
import styles from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";

const name = "manju code";
export const siteTitle = "manju blog";

function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<img src="/images/profile.png" className={utilStyle.borderCircle} />
				<h1 className={utilStyle.heading2Xl}>{name}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
