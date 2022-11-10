import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import Editor, { EditorProps } from "@monaco-editor/react";

// // @ts-ignore
// self.MonacoEnvironment = {
// 	getWorkerUrl: function (_moduleId: any, label: string) {
// 		if (label === "json") {
// 			return "./json.worker.bundle.js";
// 		}
// 		if (label === "css" || label === "scss" || label === "less") {
// 			return "./css.worker.bundle.js";
// 		}
// 		if (label === "html" || label === "handlebars" || label === "razor") {
// 			return "./html.worker.bundle.js";
// 		}
// 		if (label === "typescript" || label === "javascript") {
// 			return "./ts.worker.bundle.js";
// 		}
// 		if (label === "go") {
// 			return "./go.worker.bundle.js";
// 		}
// 		return "./editor.worker.bundle.js";
// 	},
// };

const CodeEditor = (props: EditorProps) => {
	return (
		<Editor
			height={props.height}
			theme={props.theme}
			defaultLanguage={props.defaultLanguage}
			defaultValue={props.defaultValue}
			onMount={props.onMount}
		/>
	);
};

export default CodeEditor;
