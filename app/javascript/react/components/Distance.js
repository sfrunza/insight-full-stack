import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Distance extends Component {
  constructor(props) {

    super(props);
        this.state = {
          origin: props.origin,
          destination: props.destination,
          distance: '',
          apiKey: 'AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ'
        }

  }

  componentDidMount(){
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.origin}&destinations=${this.state.destination}&key=${this.state.apiKey}`)
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
      debugger;
      let distance_is = body.rows[0].elements[0].distance.text
      this.setState({ distance: distance_is })
    })

  }

  render() {

    return (
      <div>
      {this.state.distance}
      </div>
    )
  }
}

export default Distance
