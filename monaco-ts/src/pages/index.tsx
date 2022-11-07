import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Container, Title, Grid, Anchor } from "@mantine/core";
import React, { useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

const Home: NextPage = () => {
	const editorRef = useRef(null);

	function handleEditorDidMount(editor: any, monaco: Monaco) {
		// here is the editor instance
		// you can store it in `useRef` for further usage
		console.log("hhh", editor, monaco);
		editorRef.current = editor;
	}
	return (
		<Container>
			<main className={styles.main}>
				<Editor
					height="60vh"
					defaultLanguage="typescript"
					defaultValue="// some comment"
					onMount={handleEditorDidMount}
				/>
				<Title order={1}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</Title>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.tsx</code>
				</p>

				<Grid>
					<Grid.Col span={4}>
						<Anchor href="https://nextjs.org/docs">
							<h2>Documentation &rarr;</h2>
							<p>
								Find in-depth information about Next.js features
								and API.
							</p>
						</Anchor>
					</Grid.Col>

					<Grid.Col span={4}>
						<Anchor href="https://nextjs.org/learn">
							<h2>Learn &rarr;</h2>
							<p>
								Learn about Next.js in an interactive course
								with quizzes!
							</p>
						</Anchor>
					</Grid.Col>
					<Grid.Col span={4}>
						<Anchor href="https://github.com/vercel/next.js/tree/canary/examples">
							<h2>Examples &rarr;</h2>
							<p>
								Discover and deploy boilerplate example Next.js
								projects.
							</p>
						</Anchor>
					</Grid.Col>
					<Grid.Col span={4}>
						<Anchor href="https://github.com/vercel/next.js/tree/canary/examples">
							<h2>Examples &rarr;</h2>
							<p>
								Discover and deploy boilerplate example Next.js
								projects.
							</p>
						</Anchor>
					</Grid.Col>
				</Grid>
			</main>
		</Container>
	);
};

export default Home;
