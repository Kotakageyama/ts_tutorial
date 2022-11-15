import React, { useRef } from 'react'
import { OnMount } from '@monaco-editor/react'
import CodeEditor from '../components/CodeEditor'

const EditorPage = () => {
  const editorRef = useRef<any>()

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    if (editor && editor.getModel()) {
      const editorModel = editor.getModel()
      if (editorModel) {
        editorModel.setValue('// console.log\n' + editor.getValue())
      }
    }
    editor.focus()
    console.log('hhh', editor, monaco)
    if (editor !== undefined && editor) {
      editorRef.current = editor
    }
  }
  return (
    <CodeEditor
      height="60vh"
      theme="vs-dark"
      defaultLanguage="typescript"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
    />
  )
}

export default EditorPage