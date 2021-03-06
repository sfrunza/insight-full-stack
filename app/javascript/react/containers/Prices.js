import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import HomepageHeading from '../components/HomepageHeading'

 const getWidth = () => {
   const isSSR = typeof window === 'undefined'
   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
 }


 class DesktopContainer extends Component {
   render() {
     const { children } = this.props
     return (
       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} >
       <InlineStyle />
             <HomepageHeading headerTitle="Prices & Rates" headerDescription="We Offer Fair and Affordable Prices" class="prices-top"/>
         {children}
       </Responsive>
     )
   }
 }

 DesktopContainer.propTypes = {
   children: PropTypes.node,
 }


class MobileContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileStyle />
            <HomepageHeading mobile headerTitle="Prices & Rates" headerDescription="We Offer Fair and Affordable Prices" class='prices-top' mobile/>
          {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>

  </div>
)


const Prices = () => (
  <ResponsiveContainer>
  <Container className="testimonials-container">
  <Header as='h3' style={{ fontSize: '2em' }}>
    Testimonials
  </Header>
  <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '2em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '2em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      </Container>
  </ResponsiveContainer>
)
export default Prices

const MobileStyle = () => (
  <style>{`
      .prices-top {
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url("https://www.newcitymovers.com/content/uploads/2018/02/services3.jpg") !important;
          background-position: center !important; /* Center the image */
          background-repeat: no-repeat !important; /* Do not repeat the image */
          background-size: cover !important;
          min-height: 350px;
      }
      .ui.segment {
        margin: 0 0 !important;
      }
      .testimonials-container {
        margin-top: 4%;
        text-align: center;
      }


    `}</style>
)
const InlineStyle = () => (
  <style>{`
      .prices-top {
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url("https://www.newcitymovers.com/content/uploads/2018/02/services3.jpg") !important;
          background-position: center !important; /* Center the image */
          background-repeat: no-repeat !important; /* Do not repeat the image */
          background-size: cover !important;
          min-height: 500px;
      }
      .testimonials-container {
        margin-top: 4%;
        text-align: center;
      }

  `}</style>
)
