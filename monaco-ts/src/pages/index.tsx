import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Container, Title, Grid, Button } from "@mantine/core";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
const NaviLink = dynamic(() => import("../components/NaviLink"), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<Container>
			<main className={styles.main}>
				<Title order={1}>Welcome to Monaco ts editor!</Title>
				<NaviLink />
			</main>
		</Container>
	);
};

export default Home;
