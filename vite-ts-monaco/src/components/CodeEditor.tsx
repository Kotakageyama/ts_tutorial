import React, { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import Editor, { EditorProps } from '@monaco-editor/react'

const CodeEditor = (props: EditorProps) => {
  return (
    <Editor
      height={props.height}
      theme={props.theme}
      defaultLanguage={props.defaultLanguage}
      defaultValue={props.defaultValue}
      onMount={props.onMount}
    />
  )
}

export default CodeEditor
