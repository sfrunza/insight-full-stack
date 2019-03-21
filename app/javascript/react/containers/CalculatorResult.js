import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";

class CalculatorResult extends Component {
  constructor(props) {
    super(props);
        this.state = {
          origin: this.props.origin,
          origin_lat:'',
          origin_lng: '',
          destination_lat:'',
          destination_lng: '',
          destination: this.props.destination,
          submittedOrigin: '',
          submittedDestination: '',
          apiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ",
          distanceText:'testing the distance text'
        }
        this.renderMap = this.renderMap.bind(this)
        this.findDsitance = this.findDsitance.bind(this)
        this.handleResult = this.handleResult.bind(this)


  }
  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.origin}&result_type=postal_code&sensor=true&key=${this.state.apiKey}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let city_origin = body.results[0].formatted_address
        let lat = body.results[0].geometry.location.lat
        let lng = body.results[0].geometry.location.lng
        this.setState({ submittedOrigin: city_origin, origin_lat: lat, origin_lng: lng })
      })

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.destination}&result_type=postal_code&sensor=true&key=${this.state.apiKey}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let city_destination = body.results[0].formatted_address
        let lat = body.results[0].geometry.location.lat
        let lng = body.results[0].geometry.location.lng
        this.setState({ submittedDestination: city_destination, destination_lat: lat, destination_lng: lng })
      })
  }


   findDsitance() {
      let bounds = new google.maps.LatLngBounds;
      let markersArray = [];
      let origin1 = {lat: parseFloat(this.state.origin_lat), lng: parseFloat(this.state.origin_lng)};
      let destinationB = {lat: parseFloat(this.state.destination_lat), lng: parseFloat(this.state.destination_lng)};
      let geocoder = new google.maps.Geocoder;
      let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [origin1],
        destinations: [destinationB],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, function(response, status) {

        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          let originList = response.originAddresses;
          let destinationList = response.destinationAddresses;
          let outputDiv = document.getElementById('output');

            let results = response.rows[0].elements;
              if(response.rows[0].elements[0].status !== "ZERO_RESULTS"){
                  outputDiv.innerHTML =` distance: ${results[0].distance.text}`
                }
        }
      });
    }
    renderMap(){
        let origin = this.state.origin
        let destination = this.state.destination
        const MapWithADirectionsRenderer = compose(
          withProps({
            googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&v=3.exp&libraries=geometry,drawing,places`,
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `300px`, width: `50%`, marginLeft: `25%` }} />,
            mapElement: <div style={{ height: `100%` }} />,
          }),
          withScriptjs,
          withGoogleMap,

          lifecycle({
            componentDidMount() {
              const DirectionsService = new google.maps.DirectionsService();
              let origin_point = origin
              let destination_poin = destination
              DirectionsService.route({
                origin: origin_point,
                destination: destination_poin,
                travelMode: google.maps.TravelMode.DRIVING,
              }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  this.setState({
                    directions: result,
                  });
                }
              });
            }
          })
        )(props =>
          <GoogleMap
            defaultZoom={7}
            defaultCenter={new google.maps.LatLng(42.5659907, -72.2317007)}
          >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
          </GoogleMap>
        );
        return(
          <MapWithADirectionsRenderer />
        )
    }
    handleResult(){
      if(this.props.movingSize === "Studio apartment"){
        return(
          <div>
          <label className="description crew"><b>2</b>  Movers Crew</label>
                   <span className="pricing-rate">
                       <span className="pricing-currency highlight animate-hover">$</span>
                       <span className="pricing-amount highlight animate-hover">80</span>
                       <span className="pricing-term">/ hour</span>
                   </span>
                   <label className="description">Estimated job time</label>
                    <span className="estimated-time">
                        <span className="estimated-amount orange-text">2 - 4</span>
                        <span className="pricing-term"> hours*</span>
                    </span>
          </div>
        )
    } else if(this.props.movingSize === "Room or less (partial move)"){
      return(
        <div>
        <label className="description crew"><b>2</b>  Movers Crew</label>
                   <span className="pricing-rate">
                       <span className="pricing-currency highlight animate-hover">$</span>
                       <span className="pricing-amount highlight animate-hover">80</span>
                       <span className="pricing-term">/ hour</span>
                   </span>
                   <label className="description">Estimated job time</label>
                    <span className="estimated-time">
                        <span className="estimated-amount orange-text">2 - 4</span>
                        <span className="pricing-term"> hours*</span>
                    </span>
        </div>
      )
  }
  else if(this.props.movingSize === "1 Bedroom apartment"){
    return(
      <div>
      <label className="description crew"><b>2</b>  Movers Crew</label>
                   <span className="pricing-rate">
                       <span className="pricing-currency highlight animate-hover">$</span>
                       <span className="pricing-amount highlight animate-hover">80</span>
                       <span className="pricing-term">/ hour</span>
                   </span>
                   <label className="description">Estimated job time</label>
                    <span className="estimated-time">
                        <span className="estimated-amount orange-text">3 - 5</span>
                        <span className="pricing-term"> hours*</span>
                    </span>
      </div>
    )
}
else if(this.props.movingSize === "2 Bedroom apartment" || this.props.movingSize === "2 Bedroom House/Townhouse" ){
  return(
    <div>
    <label className="description crew"><b>3</b>  Movers Crew</label>
                   <span className="pricing-rate">
                       <span className="pricing-currency highlight animate-hover">$</span>
                       <span className="pricing-amount highlight animate-hover">120</span>
                       <span className="pricing-term">/ hour</span>
                   </span>
                   <label className="description">Estimated job time</label>
                    <span className="estimated-time">
                        <span className="estimated-amount orange-text">4 - 6</span>
                        <span className="pricing-term"> hours*</span>
                    </span>
    </div>
  )
}
else if(this.props.movingSize === "3+ Bedroom apartment" || this.props.movingSize === "3 Bedroom House/Townhouse" || this.props.movingSize === "4+ Bedroom House/Townhouse" || this.props.movingSize === "Office / Commercial space"){
  return(
    <div>
    <label className="description crew"><b>4</b>  Movers Crew</label>
                   <span className="pricing-rate">
                       <span className="pricing-currency highlight animate-hover">$</span>
                       <span className="pricing-amount highlight animate-hover">160</span>
                       <span className="pricing-term">/ hour</span>
                   </span>
                   <label className="description">Estimated job time</label>
                    <span className="estimated-time">
                        <span className="estimated-amount orange-text">6 - 8</span>
                        <span className="pricing-term"> hours*</span>
                    </span>
    </div>
  )
}
  }

  render() {
    let origin_name = this.state.submittedOrigin
    let destination_name = this.state.submittedDestination
    let distance_mile = this.state.distanceText
    return (
      <div>
          <h2>Moving calculator result.</h2>
          <div>Moving a {this.props.movingSize} from {this.props.typeFrom} to {this.props.typeTo},<div id="output">{this.props.submitted && this.findDsitance()},</div> should take approximately:</div>
          <div>{origin_name}<i className="fas fa-arrow-right" style={{margin: "0 30px"}}></i>{destination_name}</div>

          <div id="output">{this.props.submitted && this.findDsitance()}</div>
          <div>{this.props.submitted && this.handleResult()}</div>
          <div>{this.props.submitted && this.renderMap()}</div>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:("AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ")
})(CalculatorResult)
