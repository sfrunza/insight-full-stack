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

class Calculator extends Component {
  constructor(props) {
    super(props);
        this.state = {
          origin: '',
          origin_lat:'',
          origin_lng: '',
          destination_lat:'',
          destination_lng: '',
          destination: '',
          submittedOrigin: '',
          submittedDestination: '',
          submitted: false,
          apiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ",
          distanceText:'testing the distance text'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.findDsitance = this.findDsitance.bind(this)
        this.renderMap = this.renderMap.bind(this)
  }

  handleChange(event){
    event.preventDefault();
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit() {
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
        this.setState({ submittedDestination: city_destination, destination_lat: lat, destination_lng: lng }, () => { this.findDsitance() })
      })
    this.setState({ submitted: true });

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
                  outputDiv.innerHTML = results[0].distance.text + ' in ' +
                                        results[0].duration.text + '<br>';
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
            containerElement: <div style={{ height: `400px` }} />,
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

  render() {
    let origin_name = this.state.submittedOrigin
    let destination_name = this.state.submittedDestination
    let distance_mile = this.state.distanceText
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='ZipCode'
              name='origin'
              type='number'
              value={this.state.origin}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='ZipCode'
              name='destination'
              type='number'
              value={this.state.destination}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit'/>
          </Form.Group>
        </Form>
          <pre>{origin_name}</pre>
          <pre>{destination_name}</pre>
          <div id="output">{this.state.submitted && this.findDsitance()}</div>
          <div>{this.state.submitted && this.renderMap()}</div>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:("AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ")
})(Calculator)
