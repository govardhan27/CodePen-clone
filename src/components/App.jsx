import React, { useState, useEffect } from 'react';

import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('');
  const [js, setJs] = useState('');
  const [css, setCss] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html lang='en'>
	   		<body>${html}</body>
	   		<style>${css}</style>
	   		<script>${js}</script>
		</html>`,
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

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
          srcDoc={srcDoc}
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
