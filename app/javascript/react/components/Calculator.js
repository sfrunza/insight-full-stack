import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import GoogleMap from 'google-distance-matrix';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import API_KEY from './config_keys'

class Calculator extends Component {
  constructor(props) {

    super(props);
        this.state = {
          distance: [],
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
          apiKey: API_KEY,
          distanceText:'testing the distance text'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderMap = this.renderMap.bind(this)
  }

  handleChange(event){
    event.preventDefault();
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(formPayload) {
    if (this.state.origin) {

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
    }

    if (this.state.destination) {
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
    event.preventDefault();
    this.setState({ submitted: true })
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
  // GoogleMap.matrix([this.state.submittedOrigin], [this.state.submittedDestination], function (err, distances) {
  //     if (err) {
  //         return console.log(err);
  //     }
  //     if(!distances) {
  //         return console.log('no distances');
  //     }
  //     if (distances.status == 'OK') {
  //         if(distances.rows[0].elements[0])  {
  //             var distance = distances.rows[0].elements[0].duration['text'];
  //             this.setState({
  //                 foundDistance: true,
  //                 distanceText: distance
  //
  //             });
  //         }
  //     }
  // });

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
        <strong>onChange:</strong>
          <pre>{this.state.origin}</pre>
          <pre>{this.state.destination}</pre>
        <strong>onSubmit:</strong>
          <pre>{origin_name}</pre>
          <pre>{destination_name}</pre>
          <pre>{distance_mile}</pre>
          {this.state.submitted && this.renderMap()}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:(API_KEY)
})(Calculator)
