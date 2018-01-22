import React from "react";
import styled from "styled-components";
import { globalColors } from "../../globalColors";

const CestTextarea = styled.textarea`
  width: 95%;
  height: calc(8.2em);
  display: inline-flex;
  padding: 0.35em 0.35em;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  border-radius: 0.25em;
  -webkit-box-shadow: inset 0 0 0.25em -0.05em ${globalColors._shadow};
  -moz-box-shadow: inset 0 0 0.25em -0.05em ${globalColors._shadow};
  box-shadow: inset 0 0 0.25em -0.05em ${globalColors._shadow};

  color: ${globalColors._text};
  background: ${globalColors._cestsecond};
  word-wrap: break-word;
  resize: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: "bold";
  font-variant: normal;
  font-style: normal;
  font-family: "Rubik", sans-serif;
  :focus {
    outline: none !important;
  }
`;

const CestTextDiv = styled.div`
  width: 95%;
  color: ${globalColors._text};
  display: inline-flex;
  padding: 0.35em 0.35em;
  border-radius: 0.25em;
  height: calc(8.2em);
  word-wrap: break-word;

  font-size: 14px;
  line-height: 20px;
  font-weight: "bold";
  font-variant: normal;
  font-style: normal;
  font-family: "Rubik", sans-serif;
`;

// toTextarea = () => {

// }

export default props => <CestTextField text={props.cestText} />;

class CestTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.text
    };
  }

  edit = () => {
    this.setState({
      editing: true
    });
  };

  save = event => {
    var val = event.target.value;
    console.log(val);
    this.setState({
      text: val,
      editing: false
    });
  };

  updateText = event => {
    this.setState({
      text: event.target.value
    })
  }

  renderNormal = () => {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return <CestTextDiv onClick={this.edit}>{this.state.text}</CestTextDiv>;
  };
  renderForm = () => {
    return (
      <CestTextarea
        onBlur={this.save}
        value={this.state.text}
        onChange = {this.updateText}
        autoFocus={true}
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
