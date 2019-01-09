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
    this.state = {};
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
    const { value } = this.state;
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
        {renderButton && renderButton(props.value || value)}
      </label>
    );
  }
}

FileInput.propTypes = {
  value: PropTypes.any,
  renderButton: PropTypes.func,
};

export default FileInput;
