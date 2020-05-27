import React from "react";
import { connect } from "react-redux";

const ToBeConnectedList = props => (
  <ul>
    { props.articles.map( element => (<li key={element.id}> {element.title} </li> )) }
  </ul>
);

const mapStateToProps = state => ({ ...state });
const List = connect(mapStateToProps)(ToBeConnectedList);
export default List;