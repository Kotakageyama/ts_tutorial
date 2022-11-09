import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Container, Title, Grid, Button } from "@mantine/core";
import React, { useRef } from "react";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<Container>
			<main className={styles.main}>
				<Title order={1}>Welcome to Monaco ts editor!</Title>

				<Grid grow>
					<Grid.Col span={4}>
						<Link href="editor" passHref>
							<Button size="lg">エディターに行く</Button>
						</Link>
					</Grid.Col>

					<Grid.Col span={4}>
						<Link href="scratch" passHref>
							<Button size="lg">スクラッチに行く</Button>
						</Link>
					</Grid.Col>
				</Grid>
			</main>
		</Container>
	);
};

export default Home;
