import type { NextPage } from "next";
import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import Editor, { Monaco, OnMount } from "@monaco-editor/react";
import { Container, Button } from "@mantine/core";
import Link from "next/link";

const EditorPage: NextPage = () => {
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
					theme="vs-dark"
					defaultLanguage="typescript"
					defaultValue="// some comment"
					onMount={handleEditorDidMount}
				/>
				<Link href="/" passHref>
					<Button size="lg">Homeに行く</Button>
				</Link>
			</main>
		</Container>
	);
};

export default EditorPage;
