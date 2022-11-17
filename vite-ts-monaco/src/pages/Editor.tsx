import React, { useRef, useEffect, useState } from 'react'
import { OnMount } from '@monaco-editor/react'
import CodeEditor from '../components/CodeEditor'
import Editor, { useMonaco } from '@monaco-editor/react'
import NaviBar from '../components/NaviBar'
import { loader } from '@monaco-editor/react'

import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  },
}

loader.config({ monaco })

loader.init().then(/* ... */)

const EditorPage = () => {
  const [resultValue, setResultValue] = useState<string>('without prefix')
  const monaco = useMonaco()
  useEffect(() => {
    if (monaco) {
      console.log('here is the monaco instance:', monaco)
    }
  }, [monaco])

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | undefined>()

  const onClickSave = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getValue())
    }
  }
  const onClickRun = () => {
    if (editorRef.current) {
      setResultValue(editorRef.current.getValue())
    }
  }
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
    <div className="mx-auto w-full">
      <NaviBar />

      <CodeEditor
        height="400px"
        theme="vs-dark"
        defaultLanguage="typescript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        onClickSave={onClickSave}
        onClickRun={onClickRun}
        resultValue={resultValue}
      />
    </div>
  )
}

export default EditorPage
