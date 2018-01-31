import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";

const CestTextarea = styled.textarea`
  width: 100%;
  margin: 5px 10px;
  height: 6em;
  border-radius: 0.25em;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  -webkit-box-shadow: inset 0 0 2pt -1pt ${globalColors._shadow};
  -moz-box-shadow: inset 0 0 2pt 1pt ${globalColors._shadow};
  box-shadow: inset 0 0 2pt -1pt ${globalColors._shadow};
  color: ${globalColors._text};
  background: ${globalColors._cestsecond};
  filter: brightness(105%);
  word-wrap: break-word;
  resize: none;
  font-size: 16px;
  line-height: 20px;
  font-family: ${props => props.fontStyle};
  :focus {
    outline: none !important;
  }
`;

const CestTextDiv = styled.div`
width: 100%;
  height: 6em;
  margin: 5px 10px;
  color: ${globalColors._text};
  background: ${globalColors._cestsecond};
  border-radius: 0.25em;
  word-wrap: break-word;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  font-family: ${props => props.fontStyle};
`;

export default props => (
  <CestTextField text={props.cestText} fontStyle={props.fontStyle} />
);

class CestTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.text
        .replace(/\n/g, " ")
        .replace(/ +/g, " ")
        .substring(0, 160),
      fontStyle: props.fontStyle
    };
  }

  edit = () => {
    this.setState({
      editing: true
    });
  };

  save = event => {
    this.setState({
      text: event.target.value,
      editing: false
    });
  };

  updateText = event => {
    if (event.target.value.length <= 160) {
      this.setState({
        text: event.target.value
          .replace(/\n/g, " ")
          .replace(/ +/g, " ")
          .replace(/\.+/g, ".")
      });
    }
  };

  renderNormal = () => {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return (
      <CestTextDiv onClick={this.edit} fontStyle={this.state.fontStyle}>
        {this.state.text}
      </CestTextDiv>
    );
  };
  renderForm = () => {
    return (
      <CestTextarea
        onBlur={this.save}
        onDragEnterCapture={this.save}
        value={this.state.text}
        onChange={this.updateText}
        autoFocus={true}
        fontStyle={this.state.fontStyle}
      />
    );
  };

  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}
