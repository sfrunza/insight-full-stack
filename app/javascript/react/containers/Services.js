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
import NavigationBar from '../components/NavigationBar'
import { Tab } from 'semantic-ui-react'

 const getWidth = () => {
   const isSSR = typeof window === 'undefined'

   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
 }
 const panes = [
   { menuItem: 'Local Moving', render: () => <Tab.Pane>
                                               <Segment style={{ padding: '2em 0em' }} vertical>
                                                  <Grid container stackable verticalAlign='middle'>
                                                    <Grid.Row>
                                                      <Grid.Column width={8}>
                                                        <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>
                                                          Residential moving
                                                        </Header>
                                                        <p style={{ textAlign: 'center' }}>
                                                          We’re a one-stop place, helping with all home moving situations. Our large fleet of modern, fully equipped vans keeps us on the cutting edge of convenience and reliability.
                                                        </p>
                                                      </Grid.Column>
                                                      <Grid.Column floated='right' width={6}>
                                                        <Image bordered rounded size='large' src='https://moving101.hireahelper.com/static/images/og/couple.jpg' />
                                                      </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                      <Grid.Column textAlign='center'>
                                                        <Button size='huge'>Book Now</Button>
                                                      </Grid.Column>
                                                    </Grid.Row>
                                                  </Grid>
                                                </Segment>
                                              </Tab.Pane> },
   { menuItem: 'Interstate Moving', render: () => <Tab.Pane>
                                                   <Segment style={{ padding: '2em 0em' }} vertical>
                                                      <Grid container stackable verticalAlign='middle'>
                                                        <Grid.Row>
                                                          <Grid.Column width={8}>
                                                            <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>
                                                              Interstate Moving
                                                            </Header>
                                                            <p style={{ textAlign: 'center' }}>
                                                              Flat Rate Moving. Gas, mileage, tolls, insurance are included. No hidden fees.
                                                              Same or Next Day moving services on distance up to 1500 miles.
                                                            </p>
                                                          </Grid.Column>
                                                          <Grid.Column floated='right' width={6}>
                                                            <Image bordered rounded size='large' src='http://www.heavenlycaremoving.com/wp-content/uploads/long_distance_moves.jpg' />
                                                          </Grid.Column>
                                                        </Grid.Row>
                                                        <Grid.Row>
                                                          <Grid.Column textAlign='center'>
                                                            <Button size='huge'>Book Now</Button>
                                                          </Grid.Column>
                                                        </Grid.Row>
                                                      </Grid>
                                                    </Segment>
                                                  </Tab.Pane> },
   { menuItem: 'Packing Service', render: () => <Tab.Pane>
                                                 <Segment style={{ padding: '2em 0em' }} vertical>
                                                    <Grid container stackable verticalAlign='middle'>
                                                      <Grid.Row>
                                                        <Grid.Column width={8}>
                                                          <Header as='h3' style={{ fontSize: '2em', textAlign: 'center'}}>
                                                            Packaging service
                                                          </Header>
                                                          <p style={{ textAlign: 'center' }}>
                                                            We provide complete packing services, including professional packers, professional moving supplies, and full-service relocation packing. Our well trained movers will securely pack your home properly.
                                                          </p>
                                                        </Grid.Column>
                                                        <Grid.Column floated='right' width={6}>
                                                          <Image bordered rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdWjtKgO0ClBgFOXTRA6Hq0gOV2ixGNFIAYU6zIa4QLjZPf8LEg' />
                                                        </Grid.Column>
                                                      </Grid.Row>
                                                      <Grid.Row>
                                                        <Grid.Column textAlign='center'>
                                                          <Button size='huge'>Book Now</Button>
                                                        </Grid.Column>
                                                      </Grid.Row>
                                                    </Grid>
                                                  </Segment>
                                                 </Tab.Pane> },
   { menuItem: 'Storage Service', render: () => <Tab.Pane>
                                                 <Segment style={{ padding: '2em 0em' }} vertical>
                                                    <Grid container stackable verticalAlign='middle'>
                                                      <Grid.Row>
                                                        <Grid.Column width={8}>
                                                          <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>
                                                            Overnight
                                                          </Header>
                                                          <p style={{ textAlign: 'center' }}>
                                                          In case you have to move out in one day, but are not able to move into your new residence until the next day, we offer low cost Overnight On-Truck Storage.
                                                          The truck remains locked and stationary in our digitally monitored parking lot. Once you get your keys, your inventory will be safely delivered to your new home or apartment
                                                          </p>
                                                          <Header as='h3' style={{ fontSize: '2em', textAlign: 'center' }}>
                                                            Long-Term
                                                          </Header>
                                                          <p style={{ textAlign: 'center' }}>
                                                          Insight Moving Company provides clean, dry, climate and temperature controlled storage for up to 6 months.
                                                          Storage rates vary based on the size of your inventory.
                                                          </p>
                                                        </Grid.Column>
                                                        <Grid.Column floated='right' width={6}>
                                                          <Image bordered rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSent-6vTQDN9sAa96-8aKxP9v_l-j_cuzMv36pJ7feui3m44K6' />
                                                        </Grid.Column>
                                                      </Grid.Row>
                                                      <Grid.Row>
                                                        <Grid.Column textAlign='center'>
                                                          <Button size='huge'>Book Now</Button>
                                                        </Grid.Column>
                                                      </Grid.Row>
                                                    </Grid>
                                                  </Segment>
                                                 </Tab.Pane> }
                                               ]

 const ServicesTabs = () => (
   <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
 )
const HomepageHeading = ({ mobile }) => (
  <div>
  <NavigationBar />
  <Container text>
    <Header
      as='h1'
      content='Services'
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
      content='We will make your moving day an easy day!'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get A Quote Now
      <Icon name='right arrow' />
    </Button>
  </Container>
  </div>
)
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}



/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
 class DesktopContainer extends Component {
   state = {}

   render() {
     const { children } = this.props
     const { fixed } = this.state

     return (
       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} >
       <InlineStyle />
         <Visibility once={false}>
           <Segment inverted textAlign='center' style={{ minHeight: 500, padding: '1em 0em' }} vertical className="service-top">
             <HomepageHeading />
           </Segment>
         </Visibility>

         {children}
       </Responsive>
     )
   }
 }

 DesktopContainer.propTypes = {
   children: PropTypes.node,
 }


class MobileContainer extends Component {
  state = {}

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileStyle />
          <Segment  className="service-top" inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }}>
            <HomepageHeading mobile />
          </Segment>
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


const Services = () => (
  <ResponsiveContainer>
  <ServicesTabs />
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
export default Services

const MobileStyle = () => (
  <style>{`
      .service-top {
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url("https://www.transformesuacasa.com.br/wp-content/uploads/2018/03/mudan%C3%A7a-1.jpg") !important;
          background-position: center !important; /* Center the image */
          background-repeat: no-repeat !important; /* Do not repeat the image */
          background-size: cover !important;
      }
      .testimonials-container {
        margin-top: 4%;
        text-align: center;
      }


    `}</style>
)
const InlineStyle = () => (
  <style>{`
      .service-top {
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url("https://www.transformesuacasa.com.br/wp-content/uploads/2018/03/mudan%C3%A7a-1.jpg") !important;
          background-position: center !important; /* Center the image */
          background-repeat: no-repeat !important; /* Do not repeat the image */
          background-size: cover !important;
      }
      .testimonials-container {
        margin-top: 4%;
        text-align: center;
      }


  `}</style>
)
