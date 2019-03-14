import React, { Component } from 'react'
import { Form, Select, Container, Segment, Header } from 'semantic-ui-react'
import CalculatorResult from '../containers/CalculatorResult'


const movingTypeOptions = [
  { key: 'elv', text: 'Elevator Bldg.', value: 'elevbldg' },
  { key: 'grfloor', text: 'No Stairs - Ground Floor', value: 'grfloor' },
  { key: '2floor', text: 'Stairs - 2nd Floor', value: '2floor' },
  { key: '3floor', text: 'Stairs - 3rd Floor', value: '3floor' },
  { key: '4floor', text: 'Stairs - 4th Floor', value: '4floor' },
  { key: '5floor', text: 'Stairs 5 or Higher - N/A ', value: '5floor', disabled: true },
  { key: 'private', text: 'Private House', value: 'private' },
  { key: 'storage', text: 'Storage Unit', value: 'storage' },
]
const movingSizeOptions = [
  { key: 'room', text: 'One Room or less (<1000 lbs)', value: 'room' },
  { key: 'studio', text: 'Studio Apt.', value: 'studio' },
  { key: 'onebed', text: '1 Bedroom Apt.', value: 'onebed' },
  { key: 'twobed', text: '2 Bedroom Apt.', value: 'twobed' },
  { key: 'threebed', text: '3+ Bedroom Apt.', value: 'threebed' },
  { key: 'twohouse', text: '2 Bedroom House/Townhouse', value: 'twohouse' },
  { key: 'threehouse', text: '3 Bedroom House/Townhouse', value: 'threehouse' },
  { key: 'fourhouse', text: '4+ Bedroom House/Townhouse', value: 'fourhouse' },
  { key: 'commercial', text: 'Office / Commercial Moving', value: 'commercial' },
]
const style = {
  h1: {
    fontSize: '51px',
    color: 'white',
    fontWeight: 'lighter'
  },
  h2: {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'lighter'
  },
}

class Calculator extends Component {
  constructor(props) {
    super(props);
        this.state = {
          moveDate: '',
          movingSize: '',
          typeFrom: '',
          typeTo: '',
          origin: '',
          destination: '',
          submitted: false,
          redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit() {
    this.setState({  submitted: true, redirect: true })
  }

  render() {
    if(this.state.submitted){

      return(
        <div>
          {this.state.submitted && <CalculatorResult
                  origin={this.state.origin}
                  destination={this.state.destination}
                  submitted={this.state.submitted}
                  />}
        </div>
      )
    } else {
    return (
      <div className='form-container animated fadeInDown delay-0.8s'>
        <Header className="calc-header" as='h1' content='Get Your Quote Now' style={style.h1} textAlign='center' />
        <Header className="calc-description" as='h2' content='Local and Long Distance Moving Cost Calculator' style={style.h2} textAlign='center' />
        <Container text className="calc-form">
        <Form onSubmit={this.handleSubmit}>
        <Segment>
          <Form.Group >
            <Form.Input
              placeholder='Move Date'
              name='moveDate'
              type='number'
              value={this.state.moveDate}
              onChange={this.handleChange}
              className="zip-field"
            />
            <Form.Input
              placeholder='ZipCode'
              name='origin'
              type='number'
              value={this.state.origin}
              onChange={this.handleChange}
              className="zip-field"
            />
            <Form.Input
              placeholder='ZipCode'
              name='destination'
              type='number'
              value={this.state.destination}
              onChange={this.handleChange}
              className="zip-field"
            />
            </Form.Group>
            </Segment>
            <Segment>
            <Form.Group>
            <Form.Select
              name='typeFrom'
              onChange={this.handleChange}
              control={Select}
              options={movingTypeOptions}
              placeholder='Type From...'
            />
            <Form.Select
              name='typeTo'
              onChange={this.handleChange}
              control={Select}
              options={movingTypeOptions}
              placeholder='Type To...'
            />
            </Form.Group>
            </Segment>
            <Segment>
            <Form.Group>
            <Form.Select
              name='movingSize'
              onChange={this.handleChange}
              control={Select}
              options={movingSizeOptions}
              placeholder='Select size of move...'
            />
            </Form.Group>
            </Segment>
            <Form.Button color='blue' style={{ width: "100%"}} content='Calculate'/>
        </Form>

        </Container>
        <strong>onChange:</strong>
        <div>{this.state.moveDate}<br></br>{this.state.origin}<br></br> {this.state.destination}<br></br> {this.state.typeFrom}<br></br>{this.state.typeTo}<br></br> {this.state.movingSize}</div>
      </div>
    )
  }
  }
}

export default Calculator
