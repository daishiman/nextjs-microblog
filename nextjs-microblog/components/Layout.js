import Head from "next/head";

const name = "manju code";
export const sitTitle = "manju blog";

function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<img src="/images/profile.png" />
				<h1>{name}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
