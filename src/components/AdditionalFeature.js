import React from 'react';
import {useDispatch} from 'react-redux'
import {buyItemAction} from '../actions'


const AdditionalFeature = props => {

  const dispatch = useDispatch()


 const buyItem = e => {
    // dipsatch an action here to add an item
    dispatch(buyItemAction(props))
    e.preventDefault()
    console.log("YOOOOOO props.feature: ",props.feature)
    console.log("YOOOOOO just props: ",props)

  };
  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(props) => buyItem(props)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
