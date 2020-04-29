import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "./rex/actions/carAction";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log(props);
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapPropsToState = state => {
  return{

additionalCost: state.additionalCost,
car: state.car,
price: state.price,
name: state.name,
image: state.image,
features: state.features,
additionalFeatures: state.additionalFeatures
    };
};
const mapDispatchToProps = dispatch => {
return {
addFeature: () => dispatch(addFeature())};
};

export default connect(mapPropsToState, {})(App);
