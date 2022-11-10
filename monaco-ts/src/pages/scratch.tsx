import { Container, Title, Button } from "@mantine/core";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const NaviLink = dynamic(() => import("../components/NaviLink"), {
	ssr: false,
});

const ScratchPage: NextPage = () => {
	return (
		<Container>
			<main className={styles.main}>
				<Title order={1}>ここはドラックアンドドロップです。</Title>
				<NaviLink />
			</main>
		</Container>
	);
};

export default ScratchPage;
