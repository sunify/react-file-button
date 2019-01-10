import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const hiddenInputStyle = {
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

function FileButton({ renderButton, style, className, onChange, ...props }) {
  const [value, setValue] = useState('');
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleChange = e => {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.value);
    setFiles(e.target.files);
  };

  const handleKey = e => {
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.click();
      }
    }
  };

  return (
    <label
      style={Object.assign(
        {
          position: 'relative',
          overflow: 'hidden',
        },
        style
      )}
      className={className}
      tabIndex={0}
      onKeyPress={handleKey}
      onKeyUp={handleKey}
    >
      <input
        {...props}
        ref={inputRef}
        style={renderButton ? hiddenInputStyle : {}}
        type="file"
        onChange={handleChange}
        readOnly
        tabIndex={-1}
      />
      {renderButton && renderButton(value, files)}
    </label>
  );
}

FileButton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  renderButton: PropTypes.func,
  onChange: PropTypes.func,
};

export default FileButton;
