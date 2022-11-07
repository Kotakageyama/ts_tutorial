import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const LinkTest: NextPage = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				<Link href="/">Go main page!</Link>
			</h1>
		</main>
	);
};

export default LinkTest;
