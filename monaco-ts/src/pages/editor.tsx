import type { NextPage } from "next";
import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import { OnMount } from "@monaco-editor/react";
import dynamic from "next/dynamic";
const CodeEditor = dynamic(() => import("../components/Editor"), {
	ssr: false,
});
const NaviLink = dynamic(() => import("../components/NaviLink"), {
	ssr: false,
});
import { Container, Button } from "@mantine/core";
import Link from "next/link";
import { MonacoServices } from "monaco-languageclient";
import { useMonaco } from "@monaco-editor/react";

const EditorPage: NextPage = () => {
	const editorRef = useRef<any>();

	const handleEditorDidMount: OnMount = (editor, monaco) => {
		// here is the editor instance
		// you can store it in `useRef` for further usage
		if (editor && editor.getModel()) {
			const editorModel = editor.getModel();
			if (editorModel) {
				editorModel.setValue("// console.log\n" + editor.getValue());
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
				<CodeEditor
					height="60vh"
					theme="vs-dark"
					defaultLanguage="typescript"
					defaultValue="// some comment"
					onMount={handleEditorDidMount}
				/>
				<NaviLink />
			</main>
		</Container>
	);
};

export default EditorPage;
