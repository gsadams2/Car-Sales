import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteFeatureAction} from '../actions'

const AddedFeature = props => {
  const dispatch = useDispatch()

  const removeFeature = e => {
    // dispatch an action here to remove an item
    dispatch(deleteFeatureAction(props))
    e.preventDefault()
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(props) => removeFeature(props)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
