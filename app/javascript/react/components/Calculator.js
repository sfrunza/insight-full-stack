import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import GoogleMap from 'google-distance-matrix';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


class Calculator extends Component {
  constructor(props) {
    super(props);
        this.state = {
          distance_mi: '',
          time: '',
          city: 0,
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
        this.renderMap = this.renderMap.bind(this)
        this.findDsitance = this.findDsitance.bind(this)
  }

  handleChange(event){
    event.preventDefault();
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(formPayload) {
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


    event.preventDefault();
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
          outputDiv.innerHTML = '';

          var showGeocodedAddressOnMap = function(asDestination) {

              return function(results, status) {
                if (status === 'OK') {
                  map.fitBounds(bounds.extend(results[0].geometry.location));
                  markersArray.push(new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,

                  }));
                } else {
                  alert('Geocode was not successful due to: ' + status);
                }
              };
            };


          for (let i = 0; i < originList.length; i++) {
            let results = response.rows[i].elements;
            for (let j = 0; j < results.length; j++) {
              outputDiv.innerHTML += results[j].distance.text + ' in ' +
                  results[j].duration.text + '<br>';
            }
          }
        }
      });
    }


  renderMap(){
    let o_lat = parseFloat(this.state.origin_lat)
    let o_lng = parseFloat(this.state.origin_lng)
    let d_lat = parseFloat(this.state.destination_lat)
    let d_lng = parseFloat(this.state.destination_lng)
    return(
      <Map google={this.props.google}
          style={{width: '100%', height: '50%', position: 'relative'}}
          className={'map'}
          zoom={10}
          center={{
            lat: o_lat,
            lng: o_lng
          }}>
        <Marker
          name={this.state.submittedOrigin}
          position={{lat: o_lat, lng: o_lng}} />
        <Marker
          name={this.state.submittedDestination}
          position={{lat: d_lat, lng: d_lng}} />
      </Map>
    )
  }


  render() {
    let handleSubmit = (formPayload) => this.handleSubmit(formPayload)
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
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
          <pre>{origin_name}</pre>
          <pre>{destination_name}</pre>
          <div id="output">{this.state.submitted && this.findDsitance()}</div>

          {this.state.submitted && this.renderMap()}

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:("AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ")
})(Calculator)
