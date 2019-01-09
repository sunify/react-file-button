import React from 'react';
import { render } from 'react-dom';

import ReactFB from '../src/index';

render(<div style={{ fontFamily: 'Helvetica, sans-serif'}}>
  <h2>Default</h2>
  <ReactFB />
  <h2>Custom</h2>
  <ReactFB renderButton={(value) => <div style={{
    background: value ? '#0fc' : '#0cf',
    fontSize: 18,
    border: 0,
    padding: '20px 40px',
    borderRadius: 4,
    color: value ? '#000' : '#FFF',
    display: 'inline-block'
  }}>{value || 'Chose file'}</div>} />
</div>, document.getElementById('app'));
