import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default class InnerHtml extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: {
        __html: '',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    if(e) {
      e.preventDefault();
    }
    this.setState({
      html: {
        __html: e.target.value,
      },
    });
  }

  render() {
    return(
      <div>
        <h1>内嵌HTML</h1>
        <div>
          <TextArea onChange={this.handleInputChange}/>
        </div>
        <div dangerouslySetInnerHTML={this.state.html}/>
      </div>
    );
  }
}