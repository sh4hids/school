import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/PostActions';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.addPost(post);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (<div>
      <h1>Add Post</h1>
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="">Title</label><br/>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
        </div>
        <div>
          <label htmlFor="">Body</label><br/>
          <textarea name="body" onChange={this.onChange} cols="30" rows="10" value={this.state.body}></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>);
  }
}

export default connect(null, { addPost })(PostForm);
