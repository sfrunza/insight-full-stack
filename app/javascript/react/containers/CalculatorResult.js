import React, { Component } from 'react'
import { Form, Grid, Header} from 'semantic-ui-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
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
          destination: this.props.destination,
          submittedOrigin: '',
          submittedDestination: '',
          apiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ"
        }
        this.renderMap = this.renderMap.bind(this)
        this.findDsitance = this.findDsitance.bind(this)
        this.handleResult = this.handleResult.bind(this)
        this.findTravelTime = this.findTravelTime.bind(this)
        this.getAddress = this.getAddress.bind(this)


  }


  getAddress(zipcode, id){
    let geocoder = new google.maps.Geocoder()
    geocoder.geocode( { 'address': zipcode}, function(results, status) {
      let outputCytiOrigin = document.getElementById(id);
      let city_name = results[0].formatted_address
      return outputCytiOrigin.innerHTML = `${city_name}`
    });

  }

  findTravelTime(){
    let officeHome = "Boston, MA";
    let service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
      origins: [officeHome],
      destinations: [this.state.origin, this.state.destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        let outputTime = document.getElementById('travelTime');
        let timeTo = ''
        let timeFrom = ''
          let results = response.rows[0].elements;
            if(response.rows[0].elements[0].status !== "ZERO_RESULTS" && response.rows[0].elements[1].status !== "ZERO_RESULTS"){
              if(results[0].distance.value < 38000){
                timeTo = '20 mins'
              }
                else {
                timeTo = results[0].duration.text
              }
              if(results[1].distance.value < 38000 ){
               timeFrom = '20 mins'
             }
                else {
               timeFrom = results[1].duration.text
             }

              return outputTime.innerHTML =`${timeTo} / ${timeFrom}`
              }
      }
    });

  }

   findDsitance() {
      let bounds = new google.maps.LatLngBounds;
      let geocoder = new google.maps.Geocoder;
      let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [this.state.origin],
        destinations: [this.state.destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, function(response, status) {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          let outputDiv = document.getElementById('output');
            let results = response.rows[0].elements;
              if(response.rows[0].elements[0].status !== "ZERO_RESULTS"){
                  outputDiv.innerHTML =` distance: ${results[0].distance.text}les`
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
      let movingSize = this.props.movingSize
      let typeFrom = this.props.typeFrom
      let typeTo = this.props.typeTo
      return(

        <Container className='job-info'>
          <Row>
            <Col></Col>
            <Col><label>2</label> Movers Crew</Col>
            <Col><label>$ 80</label> / hour </Col>
            <Col></Col>
          </Row>
          <Row>
          <Col></Col>
            <Col style={{marginTop: '17px'}}>Estimated job time</Col>
            <Col><label>2 - 4</label> hours</Col>
            <Col></Col>
          </Row>
          <Row>
          <Col></Col>
            <Col>Travel time</Col>
            <Col id="travelTime">{this.findTravelTime()}</Col>
            <Col></Col>
          </Row>
        </Container>

      )
  }

  render() {
    let origin_spot = this.state.origin;
    let destination_spot = this.state.destination
    let distance_mile = this.state.distanceText
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}><h2>Moving calculator result.</h2></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={8}>Moving a {this.props.movingSize} from {this.props.typeFrom} to {this.props.typeTo},<div id="output">{this.props.submitted && this.findDsitance()},</div> should take approximately:</Col>
          <Col></Col>
        </Row>
        <Row className='city-info'>
          <Col></Col>
          <Col id='city-origin-name'>{this.getAddress(this.state.origin, 'city-origin-name')}<i className="fas fa-arrow-right"></i></Col>
          <Col id='city-destination-name'>{this.getAddress(this.state.destination, 'city-destination-name')}</Col>
          <Col></Col>
        </Row>
        <div>{this.handleResult()}</div>

        <Row className='job-info-buttons'>
          <Col></Col>
          <Col><Button variant="outline-warning" href="/">Back to Calculator</Button></Col>
          <Col><Button variant="success" href="/">Request Moving Now</Button></Col>
          <Col></Col>
        </Row>
          {/*<div>{this.props.submitted && this.renderMap()}</div> */}
      </Container>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:("AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ")
})(CalculatorResult)
