import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import Link from '../presentational/Link'

export default function FilterLink(props){
  const visibilityFilter = useSelector( store => store.visibilityFilter );
  const dispatch = useDispatch();
  return (
   <Link  active={ visibilityFilter === props.filter } 
          onClick={ () => dispatch(setVisibilityFilter(props.filter))}> 
    {props.children}  
  </Link> 
  )
}
