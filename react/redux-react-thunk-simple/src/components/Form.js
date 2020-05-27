import React from "react";
import { connect } from "react-redux";
import { v1 as uuidv1 } from 'uuid';
import { addArticle } from "../redux/actions";

class ToBeConnectedForm extends React.Component {
  constructor(props) { super(props); this.state = { title: "" }; }

  handleChange = event => { 
        this.setState({ title: event.target.value }); // Local state
    };
  handleSubmit = event => {
        event.preventDefault();
        this.props.addArticle({ title: this.state.title, id: uuidv1() }); // Store state
        this.setState({ title: "" }); 
    };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        <button type="submit"> SAVE </button>
      </form>
    ); 
  }
}

function mapDispatchToProps(dispatch) { 
  return { addArticle: article => dispatch(addArticle(article)) }; 
}
export default connect(null, mapDispatchToProps)(ToBeConnectedForm);