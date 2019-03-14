import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Visibility
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import NavigationBar from './NavigationBar'
import Calculator from './Calculator'



const HomepageHeading =  props => {

  const TopPage = ({ mobile }) => (
    <Container text className="animated fadeInDown delay-0.9s">
      <Header
        as='h1'
        content={props.headerTitle}
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content={props.headerDescription}
        inverted
        style={{
          fontSize: mobile ? '1em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Button primary size='huge' style={{
        fontSize: mobile ? '0.8em' : '1em',
        borderRadius: '0'
      }}>
        Request Your Move
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
  TopPage.propTypes = {
    mobile: PropTypes.bool,
  }
  if(props.class === "home-top"){
    return(
      <Visibility once={false}>
        <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical className={props.class}>
          <NavigationBar />
          <Calculator />
        </Segment>
      </Visibility>
    )

  } else {
  return(
    <Visibility once={false}>
      <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical className={props.class}>
        <NavigationBar />
        <TopPage mobile={props.mobile}/>
      </Segment>
    </Visibility>
  )
}
}


export default HomepageHeading
