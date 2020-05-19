import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class Posts extends React.Component {
  componentDidMount() { this.props.getData(); }
  render() {
    return (
      <ul>
        {this.props.articles.map( elem => ( <li key={elem.id}> {elem.title} </li> ))}
      </ul> );
  }
}

const mapStateToProps = state => ({ articles: state.remoteArticles.slice(0, 10) });
const mapDispatchToProps = dispatch => ({ getData: () => dispatch(getData()) });
export default connect( mapStateToProps, mapDispatchToProps)(Posts);
// export default connect( mapStateToProps, \{ getData \})(Post);