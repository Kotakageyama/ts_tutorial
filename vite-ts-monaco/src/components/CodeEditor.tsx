import { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor'
import Editor, { EditorProps } from '@monaco-editor/react'

const CodeEditor: React.FC<EditorProps> = (props: EditorProps) => {
  return (
    <div className="min-h-screen bg-base-200 pt-20">
      <div className="grid grid-cols-7 gap-2 p-2">
        <div className="col-start-2 col-span-3">
          <Editor
            height={props.height}
            theme={props.theme}
            defaultLanguage={props.defaultLanguage}
            defaultValue={props.defaultValue}
            onMount={props.onMount}
          />
        </div>
        <div className="mockup-code col-end-7 col-span-2">
          <pre>
            <code>without prefix</code>
          </pre>
        </div>
        <div className="col-start-5 btn btn-primary">保存する</div>
        <div className="btn">実行する</div>
      </div>
    </div>
  )
}

export default CodeEditor
