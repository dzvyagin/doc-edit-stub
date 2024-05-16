import React from 'react';
import './App.css';
import { HtmlEditor } from './html-editor/html-editor';

function App() {
  const editorRef = React.useRef<any>(null);

  const [initial, setInitial] = React.useState();
  const [result, setResult] = React.useState();

  const handleChangeInitial = (e: any) => {
    setInitial(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <textarea style={ { width: '100%', height: '400px' } } onChange={ handleChangeInitial } />

        <HtmlEditor
          onInit={(_evt, editor) => editorRef.current = editor}
          initialValue={ initial }
          init={ {
            editable_class: "editable",
            editable_root: false,
          } }
          onChange={(e: any) => setResult(e.target.value)}
        />

        <button onClick={ () => setResult(editorRef.current?.getContent()) }>
          Get content
        </button>

        <textarea style={ { width: '100%', height: '400px' } } value={ result }  />
      </div>
    </div>
  );
}

export default App;
