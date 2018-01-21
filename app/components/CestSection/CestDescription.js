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
  font-weight: 'bold';
  font-variant: normal;
  font-style: normal;
  font-family: 'Rubik', sans-serif;
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
font-weight: 'bold';
font-variant: normal;
font-style: normal;
font-family: 'Rubik', sans-serif;
`;

// toTextarea = () => {

// }

export default (props) => (
<CestTextField text = {props.text} />
);


var CestTextField = React.createClass({
  getInitialState: function() {
    return {
      editing: false,
      // ** Initialize "text" property with empty string here
      text: 'test1234'
    }
  },
  edit: function() {
    this.setState({
      editing: true
    })
  },
  save: function() {
    var val = this.refs.newText.value;
    alert(val)
    this.setState({
      // ** Update "text" property with new value (this fires render() again)
      text: val,
      editing: false
    })
  },
  renderNormal: function() {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return (
      <CestTextDiv onClick={this.edit}>
        {this.state.text}
    </CestTextDiv>
    )
  },
  renderForm: function() {
    return (
      <CestTextarea onBlur={this.save} text={this.state.text} />
    )
  },
  render: function() {
    if (this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  }
})