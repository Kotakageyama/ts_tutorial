import { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor'
import Editor, { EditorProps } from '@monaco-editor/react'

const CodeEditor: React.FC<EditorProps> = (props: EditorProps) => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="pt-65 grid grid-cols-3">
        <Editor
          className="col-span-2 container pt-65"
          height={props.height}
          width={props.width}
          theme={props.theme}
          defaultLanguage={props.defaultLanguage}
          defaultValue={props.defaultValue}
          onMount={props.onMount}
        />
        <div className="mockup-code">
          <pre>
            <code>without prefix</code>
          </pre>
        </div>
        <div className="btn btn-primary">実行する</div>
      </div>
    </div>
  )
}

export default CodeEditor
