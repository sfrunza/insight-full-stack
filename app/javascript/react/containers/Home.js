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
import Nav from 'react-bootstrap/Nav'
import HomepageHeading from '../components/HomepageHeading'

 const getWidth = () => {
   const isSSR = typeof window === 'undefined'

   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
 }


 class DesktopContainer extends Component {
   state = {}

   render() {
     const { children } = this.props

     return (
       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} >
       <InlineStyle />
             <HomepageHeading headerTitle="Insight Moving Company" headerDescription="Making your moving least painful" class="home-top"/>
           <Container className="our-process">
             <Grid className="grid-our-process">
               <Grid.Column width={4} className="process-list"><i className="far fa-calendar-check"></i><span> </span>Book our service</Grid.Column>
               <span><i className="fas fa-arrow-right"></i></span>
               <Grid.Column width={4} className="process-list"><i className="fas fa-box-open"></i><span> </span>We pack your goods</Grid.Column>
               <span><i className="fas fa-arrow-right"></i></span>
               <Grid.Column width={4} className="process-list"><i className="fas fa-truck"></i><span> </span>We move your goods</Grid.Column>
               <span><i className="fas fa-arrow-right"></i></span>
               <Grid.Column width={4} className="process-list"><i className="fas fa-umbrella"></i><span> </span>Safe delivery</Grid.Column>
             </Grid>
           </Container>
           <Container text style={{ padding: '2em 0em' }}>
             <Header as='h3' style={{ fontSize: '2em' }}>
               OUR MISSION IS TO MOVE YOU, NOT JUST YOUR BOXES.
             </Header>
             <p style={{ fontSize: '1.2em' }}>
               We're a professional local moving company created to move more than just your boxes. We'll move you
               with our hard work and genuine smiles.
             </p>
           </Container>
           <Container className="services-container">
             <Grid>
               <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-home"></i></span><Header as='h4' style={{ fontSize: '2em'}}>
                 <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Local Moving</Nav.Link>
               </Header><p>We offer a comprehensive menu of moving services to suit your needs, timescale and budget.</p></Grid.Column>

               <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-road"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                 <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Long Distance</Nav.Link>
               </Header><p>We provide with long distance and international moving to keep your property in safe.</p></Grid.Column>

               <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-briefcase"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                 <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Packaging Service</Nav.Link>
               </Header><p>We provide complete packing services, including professional packers, professional moving supplies, and full-service relocation packing.</p></Grid.Column>

               <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-boxes"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                 <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Storage</Nav.Link>
               </Header><p>We are the largest provider of storage facilities in the US, providing safe and secure furniture storage.</p></Grid.Column>
             </Grid>
           </Container>
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
            <HomepageHeading mobile headerTitle="Insight Moving Company" headerDescription="Making your moving least painful" class='home-top' mobile/>
            <Container className="our-process">
              <Grid stackable>
                <Grid.Column width={4} className="process-list"><i className="far fa-calendar-check"></i><span> </span>Book our service</Grid.Column>
                <Grid.Column width={4} className="process-list"><i className="fas fa-box-open"></i><span> </span>We pack your goods</Grid.Column>
                <Grid.Column width={4} className="process-list"><i className="fas fa-truck"></i><span> </span>We move your goods</Grid.Column>
                <Grid.Column width={4} className="process-list"><i className="fas fa-umbrella"></i><span> </span>Safe delivery</Grid.Column>
              </Grid>
            </Container>
            <Container text style={{ padding: '2em 0em' }}>
              <Header as='h3' style={{ fontSize: '1em' }}>
                OUR MISSION IS TO MOVE YOU, NOT JUST YOUR BOXES.
              </Header>
              <p style={{ fontSize: '15px', padding: '0 2% 0 2%', textAlign: 'center' }}>
                We're a professional local moving company created to move more than just your boxes. We'll move you
                with our hard work and genuine smiles.
              </p>
            </Container>
            <Container className="services-container">
              <Grid stackable >
                <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-home"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                  <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Local Moving</Nav.Link>
                </Header><p>We offer a comprehensive menu of moving services to suit your needs, timescale and budget.</p></Grid.Column>

                <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-road"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                  <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Long Distance</Nav.Link>
                </Header><p>We provide with long distance and international moving to keep your property in safe.</p></Grid.Column>

                <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-briefcase"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                  <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Packaging Service</Nav.Link>
                </Header><p>We provide complete packing services, including professional packers, professional moving supplies, and full-service relocation packing.</p></Grid.Column>

                <Grid.Column width={4} ><span className="services-icons"><i className="fas fa-boxes"></i></span><Header as='h4' style={{ fontSize: '2em' }}>
                  <Nav.Link style={{ color: '#5A5A5A' }} href="/services">Storage</Nav.Link>
                </Header><p>We are the largest provider of storage facilities in the US, providing safe and secure furniture storage.</p></Grid.Column>
              </Grid>
            </Container>
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


const Home = () => (
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
      <Container style={{textAlign: "center", padding: ' 2em 0em'}}>
          <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
      </Container>

  </ResponsiveContainer>
)
export default Home

const MobileStyle = () => (
  <style>{`
    .ui.container.our-process {
      background-color: #57C0A8;
      color: #fff;
      padding: 4% 0;
    }
    .our-process i {
      color: black;
      margin-right: 3%;
    }
    .ui.container {
      width: auto!important;
      margin-left: 0em!important;
      margin-right: 0em!important;
    }
    .ui.segment {
      margin: 0 0 !important;
    }
    h3.ui.header {
        font-style: normal;
        font-weight: 500;
        line-height: 1.344;
        letter-spacing: 0.04em;
        text-align: center;
      }
    .ui.grid>[class*="four wide"].column.process-list {
        font-size: 14px;
        text-align: center;
    }
    .ui.grid>[class*="four wide"].column span.services-icons i {
        font-size: 30px;
        color: white;
    }
    .ui.grid>[class*="four wide"].column span.services-icons i:hover,
    .ui.grid>[class*="four wide"].column span.services-icons i:focus,
    .ui.grid>[class*="four wide"].column span.services-icons i:active {
      transform: scale(1.4);
    }
    .ui.grid>[class*="four wide"].column span.services-icons {
      background-color: #57C0A8;
      padding: 40px 25px 30px 25px;
      border-radius: 50px;
      margin-bottom: 4%;
    }
    h4.ui.header {
      margin-top:10%;
      }
      .services-container {
        margin-top: 10%;
      }
      .home-top {
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url("https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2016/10/moving-company.jpg?fit=1200%2C675&ssl=1") !important;
          background-position: center !important; /* Center the image */
          background-repeat: no-repeat !important; /* Do not repeat the image */
          background-size: cover !important;
          min-height: 350px;
      }
      .ui.grid>[class*="four wide"].column p {
          font-size: 15px !important;
      }


    `}</style>
)
const InlineStyle = () => (
  <style>{`
    .ui.grid>[class*="four wide"].column.process-list {
        padding: 16px 0px;
        font-size: 16px;
        text-align: center;
        width: 15% !important;
    }
    .our-process {
      padding: 2% 0;
      background-color: #57C0A8;
      color: #fff;
      width: 100% !important;
    }
    .our-process i {
      color: black;
      margin-right: 3%;
    }
    .ui.grid.grid-our-process {
      margin-left: 22%;
    }
    .fas.fa-arrow-right {
      color: #fff !important;
    }
    .navbar-light .navbar-toggler {
      color: #fff !important;
      border-color: #fff !important;
    }
    .ui.text.container {
        max-width: 860px !important;
        font-size: 1rem !important;
        text-align: center;
    }
    h3.ui.header {
        font-style: normal;
        font-weight: 500;
        line-height: 1.344;
        letter-spacing: 0.04em;
        text-align: center;
        padding: 0 25% 0 20%;
      }
      .ui.grid>[class*="four wide"].column span.services-icons i {
          font-size: 30px;
          color: white;
      }

      .ui.grid>[class*="four wide"].column span.services-icons i:hover,
      .ui.grid>[class*="four wide"].column span.services-icons i:focus,
      .ui.grid>[class*="four wide"].column span.services-icons i:active {
        transform: scale(1.4);
      }

      .ui.grid>[class*="four wide"].column span.services-icons {
        background-color: #57C0A8;
        padding: 40px 25px 30px 25px;
        border-radius: 50px;
        margin-bottom: 4%;
      }
      h4.ui.header {
          margin-top: 20%;
        }
      .services-container {
        margin-top: 4%;
      }
      .home-top {
          background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url("https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2016/10/moving-company.jpg?fit=1200%2C675&ssl=1") !important;
          background-position: center !important; /* Center the image */
          background-repeat: no-repeat !important; /* Do not repeat the image */
          background-size: cover !important;
          min-height: 500px;
      }
      .testimonial-grid {
        text-align: center;
      }
      .testimonials-container {
        margin-top: 4%;
      }


  `}</style>
)
