import React, { useState } from 'react';

import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('');
  const [js, setJs] = useState('');
  const [css, setCss] = useState('');

  return (
    <>
      <div className='pane top-pane'>
        <Editor
          displayName='HTML'
          language='xml'
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName='CSS'
          language='css'
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName='JS'
          language='javascript'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default App;
