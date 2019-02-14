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
import { Tab } from 'semantic-ui-react'
import HomepageHeading from '../components/HomepageHeading'

 const getWidth = () => {
   const isSSR = typeof window === 'undefined'

   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
 }
 const panes = [
   { menuItem: 'Local Moving', render: () => <Tab.Pane>
                                               <Segment  vertical>
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
                                                   <Segment  vertical>
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
                                                 <Segment  vertical>
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
                                                 <Segment  vertical>
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

const panesMobile = [
 { menuItem: 'Local', render: () => <Tab.Pane>
                                             <Segment  vertical>
                                                <Grid container stackable verticalAlign='middle'>
                                                  <Grid.Row>
                                                    <Grid.Column width={8}>
                                                      <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center' }}>
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
 { menuItem: 'Interstate', render: () => <Tab.Pane>
                                                 <Segment  vertical>
                                                    <Grid container stackable verticalAlign='middle'>
                                                      <Grid.Row>
                                                        <Grid.Column width={8}>
                                                          <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center' }}>
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
 { menuItem: 'Packing', render: () => <Tab.Pane>
                                               <Segment  vertical>
                                                  <Grid container stackable verticalAlign='middle'>
                                                    <Grid.Row>
                                                      <Grid.Column width={8}>
                                                        <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center'}}>
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
 { menuItem: 'Storage', render: () => <Tab.Pane>
                                               <Segment  vertical>
                                                  <Grid container stackable verticalAlign='middle'>
                                                    <Grid.Row>
                                                      <Grid.Column width={8}>
                                                        <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center' }}>
                                                          Overnight
                                                        </Header>
                                                        <p style={{ textAlign: 'center' }}>
                                                        In case you have to move out in one day, but are not able to move into your new residence until the next day, we offer low cost Overnight On-Truck Storage.
                                                        The truck remains locked and stationary in our digitally monitored parking lot. Once you get your keys, your inventory will be safely delivered to your new home or apartment
                                                        </p>
                                                        <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center' }}>
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
   <Container textAlign='center'>
<Header textAlign='center'><Tab panes={panes} /></Header>
</Container>
)

  const ServicesTabsMobile = () => (
    <Container textAlign='center' className="mobile-tabs">
  <Header textAlign='center'><Tab panes={panesMobile} /></Header>
  </Container>
 )




/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
 class DesktopContainer extends Component {
   state = {}

   render() {
     const { children } = this.props

     return (
       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} >
       <InlineStyle />
             <HomepageHeading headerTitle="Services" headerDescription="We will make your moving day an easy day!" class="service-top"/>
             <ServicesTabs />

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

    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileStyle />
            <HomepageHeading mobile headerTitle="Services" headerDescription="We will make your moving day an easy day!" class='service-top' mobile/>
              <ServicesTabsMobile />

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
          min-height: 350px;
      }
      .ui.segment {
        margin: 0 0 !important;
      }
      .testimonials-container {
        margin-top: 4%;
        text-align: center;
      }
      .ui.container.mobile-tabs {
        margin-left: 0 !important;
        margin-right: 2% !important;
        padding-left: 2% !important;
        padding-right: 0 !important;
      }
      .ui.tabular.menu .item {
        background: 0 0;
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-top: 2px solid transparent;
        padding: 0 3% !important;
        color: rgba(0,0,0,.87);
        width: 25% !important;
        display: grid !important;
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
          min-height: 500px;
      }
      .testimonials-container {
        margin-top: 4%;
        text-align: center;
      }
      .ui.tabular.menu .item {
        width: 25% !important;
        display: grid !important;
      }


  `}</style>
)
