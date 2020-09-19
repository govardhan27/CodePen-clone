import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor(props) {
  const { displayName, onChange, language, value } = props;

  function handleChange(editor, data, val) {
    onChange(val);
  }

  return (
    <div className='editor-container'>
      <div className='editor-title'>
        {displayName}
        <button type='button'>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lineNumbers: true,
          lint: true,
          theme: 'material',
          mode: language,
        }}
      />
    </div>
  );
}

export default Editor;
