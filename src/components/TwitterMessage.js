import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  handleOnChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value,
    })
  }
  render() {
    let maxCharacters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={this.handleOnChange}
          />
          {maxCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
