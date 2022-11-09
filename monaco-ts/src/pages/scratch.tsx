import { Container, Title, Button } from "@mantine/core";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const ScratchPage: NextPage = () => {
	return (
		<Container>
			<main className={styles.main}>
				<Title order={1}>ここはドラックアンドドロップです。</Title>
				<Link href="/" passHref>
					<Button size="lg">Homeに行く</Button>
				</Link>
			</main>
		</Container>
	);
};

export default ScratchPage;
