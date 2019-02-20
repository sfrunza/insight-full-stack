import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Formm extends Component {
  constructor(props) {

    super(props);
        this.state = {
          distance: '',
          city: 0,
          origin: '',
          destination: '',
          submittedOrigin: [],
          submittedDestination: [],
          apiKey: 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

        this.setState({ submittedOrigin: city_origin })

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

        this.setState({ submittedDestination: city_destination })
      })

    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.submittedOrigin}&destinations=${this.state.submittedDestination}&key=${this.state.apiKey}`)
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
      let distance_is = body.rows[0].elements[0].distance.text
      this.setState({ distance: distance_is })
    })

  }


  render() {
    let origin_name = this.state.submittedOrigin
    let destination_name = this.state.submittedDestination
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
          <pre>{this.state.origin}, {this.state.destination} </pre>
        <strong>onSubmit:</strong>
          <pre>{origin_name} {destination_name}------{this.state.distance}</pre>
      </div>
    )
  }
}

export default Formm
