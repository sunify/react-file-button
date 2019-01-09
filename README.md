# React File Button

Simple and customizable react file input with a11y in mind.

## Install

`yarn add react-file-button`/`npm install react-file-button --save`


## Use

```es6
import FileButton from 'react-file-button';

const customButtonStyle = {
  background: '#0fc',
  fontSize: 18,
  border: 0,
  padding: '20px 40px',
  borderRadius: 4,
  color: '#000',
  display: 'inline-block'
};

<FileButton
  multiple
  renderButton={(value, files) => (
    <div style={customButtonStyle}>{files.length ? `Files chosen: ${files.length}` : 'Chose files'}</div>
  )}
/>
```

## Props

All input props available plus `renderButton: (value: string, files: FileList | [])` that renders a custom button. Takes two arguments: `value` and `files` and should return react node. `className` and `style` properties will apply on component root (label).
