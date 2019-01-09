import React from 'react';
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

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleInputRef = this.handleInputRef.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
    this.setState({
      value: e.target.value,
      files: e.target.files,
    });
  }

  handleKey(e) {
    if(e.which === 32 || e.which === 13){
      e.preventDefault();
      if (this.inputRef) {
        this.inputRef.click();
      }
    }
  }

  handleInputRef(ref) {
    this.inputRef = ref;
  }

  render() {
    const { value, files } = this.state;
    const {
      renderButton,
      style,
      className,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        style={Object.assign({
          position: 'relative',
          overflow: 'hidden',
        }, style)}
        className={className}
        tabIndex={0}
        onKeyPress={this.handleKey}
        onKeyUp={this.handleKey}
      >
        <input
          {...props}
          ref={this.handleInputRef}
          style={renderButton ? hiddenInputStyle : {}}
          type="file"
          onChange={this.handleChange}
          readOnly
          tabIndex={-1}
        />
        {renderButton && renderButton(value, files)}
      </label>
    );
  }
}

FileInput.propTypes = {
  value: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  renderButton: PropTypes.func,
  onChange: PropTypes.func,
};

export default FileInput;
