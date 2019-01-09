import React from 'react';
import { render } from 'react-dom';

import ReactFB from 'react-file-button';

const customButtonStyle = {
  background: '#0fc',
  fontSize: 18,
  border: 0,
  padding: '20px 40px',
  borderRadius: 4,
  color: '#000',
  display: 'inline-block'
};

class App extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: 'Helvetica, sans-serif'}}>
      <h2>Default</h2>
      <ReactFB />
      <h2>Custom</h2>
      <ReactFB renderButton={(value) => (
        <div style={customButtonStyle}>{value || 'Chose file'}</div>
      )} />
      <h2>Custom (multiple)</h2>
      <ReactFB
        multiple
        renderButton={(_, files) => (
          <div style={customButtonStyle}>{files.length ? `Files chosen: ${files.length}` : 'Chose files'}</div>
        )}
      />
    </div>
    );
  }
}

render(<App />, document.getElementById('app'));
