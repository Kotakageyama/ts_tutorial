import { useRef, useEffect } from 'react'
import Editor, { EditorProps, useMonaco, Monaco } from '@monaco-editor/react'

type EditorPageProps = {
  onClickSave: () => void
  onClickRun: () => void
  resultValue: string
} & EditorProps

const CodeEditor: React.FC<EditorPageProps> = (props: EditorPageProps) => {
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
          {props.resultValue.split('\n').map((value) => {
            return (
              <pre>
                <code>{value}</code>
              </pre>
            )
          })}
        </div>
        <button
          className="col-start-5 btn btn-primary"
          onClick={props.onClickSave}
        >
          保存する
        </button>
        <button className="btn" onClick={props.onClickRun}>
          実行する
        </button>
      </div>
    </div>
  )
}

export default CodeEditor
