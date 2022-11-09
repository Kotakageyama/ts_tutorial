import type { NextPage } from "next";
import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import Editor, { Monaco, OnMount } from "@monaco-editor/react";
import { Container, Button } from "@mantine/core";
import Link from "next/link";
import { MonacoServices } from "monaco-languageclient";
import { useMonaco } from "@monaco-editor/react";

// @ts-ignore
self.MonacoEnvironment = {
	getWorkerUrl: function (_moduleId: any, label: string) {
		if (label === "json") {
			return "./json.worker.bundle.js";
		}
		if (label === "css" || label === "scss" || label === "less") {
			return "./css.worker.bundle.js";
		}
		if (label === "html" || label === "handlebars" || label === "razor") {
			return "./html.worker.bundle.js";
		}
		if (label === "typescript" || label === "javascript") {
			return "./ts.worker.bundle.js";
		}
		return "./editor.worker.bundle.js";
	},
};

const EditorPage: NextPage = () => {
	const editorRef = useRef<any>();

	const handleEditorDidMount: OnMount = (editor, monaco) => {
		// here is the editor instance
		// you can store it in `useRef` for further usage
		MonacoServices.install();
		if (editor && editor.getModel()) {
			const editorModel = editor.getModel();
			if (editorModel) {
				editorModel.setValue('{\n    "sayHello": "hello"\n}');
			}
		}
		editor.focus();
		console.log("hhh", editor, monaco);
		if (editor !== undefined && editor) {
			editorRef.current = editor;
		}
	};
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
