import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import { connect} from 'react-redux';
import VehicleSearchForm from '../components/VehicleSearchForm';
class FoundVehicleContainer extends Component {


	render(){
		


		// console.log("props",this.props)
       const{foundCars} = this.props
       let foundIt;
   if (foundCars && foundCars.length > 0){
   	foundIt = 	<div>
     <h2 class="cars-found'"><span id="car-header1">{foundCars.length}</span> {foundCars[0].make}(s) Found!!!</h2>
   	 
   	{foundCars.map((v,index) => (
   			<div key={v.id} class='column'>
   			<div class='row'>
   			
   			<Link id={v.id}to={`/vehicles/${v.id}`} onClick={()=> this.props.vehicleDetail(v.id)}><div class ='card'>

   	<p>#{index + 1}</p>
	{v.year}--{v.make}
					</div>
					</Link>
					</div>
					</div>
					))}</div>

   }else{
foundIt = <p>Type name of a car maker in the form to find what you have been looking for.</p>
   }

		return(



			<div>
			<table class="finders">
			<td>
			<div class="vehicle-create-form">
			<h1 class="vehicle-finder-header">Vehicle Finder</h1>
			 <VehicleSearchForm />
			{foundIt}
			</div>
			</td>
			</table>

			
			</div>
			)}
}	



const mapStateToProps = (state) =>{ 
	return{
		foundCars: state.foundVehicles

	 }
	}
	const mapDispatchToProps = dispatch => ({

  vehicleDetail: vehicleId => dispatch({type: "VEHICLE_DETAIL",vehicleId})
  
})

export default connect(mapStateToProps, mapDispatchToProps)(FoundVehicleContainer);