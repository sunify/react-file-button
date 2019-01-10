import React from 'react';
import { render } from 'react-dom';

import ReactFB from 'react-file-button';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>
          <a href="https://github.com/sunify/react-file-button">
            React File Button
          </a>{' '}
          demo
        </h1>
        <div className="demos">
          <div className="demo">
            <h2>Default</h2>
            <div className="demoButton">
              <ReactFB />
            </div>
            <div className="codeWrapper">
              <code>{`<ReactFB />`}</code>
            </div>
          </div>
          <div className="demo">
            <h2>Custom</h2>
            <div className="demoButton">
              <ReactFB
                renderButton={value => (
                  <div className="fileButton">{value || 'Chose file'}</div>
                )}
              />
            </div>
            <div className="codeWrapper">
              <code>
                {`
<ReactFB
  renderButton={value => (
    <div className="fileButton">{value || 'Chose file'}</div>
  )}
/>
            `.trim()}
              </code>
            </div>
          </div>
          <div className="demo">
            <h2>Multiple files</h2>
            <div className="demoButton">
              <ReactFB
                multiple
                renderButton={(_, files) => (
                  <div className="fileButton">
                    {files.length
                      ? `Files chosen: ${files.length}`
                      : 'Chose files'}
                  </div>
                )}
              />
            </div>
            <div className="codeWrapper">
              <code>
                {`
<ReactFB
  multiple
  renderButton={(_, files) => (
    <div className="fileButton">
      {files.length
        ? \`Files chosen: \${files.length}\`
        : 'Chose files'}
    </div>
  )}
/>
            `.trim()}
              </code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
