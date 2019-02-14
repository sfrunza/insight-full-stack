  import React, { Component } from 'react';
  import Navbar from 'react-bootstrap/Navbar';
  import Nav from 'react-bootstrap/Nav';
  import { Link } from 'react-router-dom';
  import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
  import {
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
  } from 'semantic-ui-react'

  const NavLink = ({ exact, to, eventKey, children }) =>
        <LinkContainer exact={exact} to={to} eventKey={eventKey}>
          <Nav.Link>{children}</Nav.Link>
        </LinkContainer>;

  class NavigationBar extends Component {
      constructor(props) {
        super(props)
        this.state = {
          fixed: false,
          number: "617-878-7878"
        }

          }
          hideFixedMenu = () => this.setState({ fixed: false })
          showFixedMenu = () => this.setState({ fixed: true })

      render(){

        const { children } = this.props
        const { fixed } = this.state

         return(
           <Responsive >
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
            >
            <Segment className="navig-bar"
              inverted
              textAlign='center'
              style={{ minHeight: 100, padding: '1em 0em' }}
              vertical
            >
            <Menu secondary={!fixed}
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              size='large'
            >
              <Container>
               <Navbar collapseOnSelect expand="lg" bg="transparent">
                 <Menu.Item><Nav.Link  href="/" to="/">Insight Moving Company</Nav.Link></Menu.Item>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse className="justify-content-center">
                   <Nav className="mr-auto">
                      <Menu.Item><Nav.Link  href="/" to="/">Home</Nav.Link></Menu.Item>
                      <Menu.Item><Nav.Link  href="/services">Services</Nav.Link></Menu.Item>
                      <Menu.Item><Nav.Link  href="/prices">Pricing</Nav.Link></Menu.Item>
                      <Menu.Item><Nav.Link  href="/work" >Work</Nav.Link></Menu.Item>
                   </Nav>
                   <Nav>
                      <Menu.Item><Nav.Link href={`tel:${this.state.number}`}><span><i className="fas fa-phone"></i></span>(617)-878-7878</Nav.Link></Menu.Item>
                   </Nav>
                 </Navbar.Collapse>
               </Navbar>
               </Container>
           </Menu>
          </Segment>
          </Visibility>
          {children}
          </Responsive>
          )
      }
  }

export default NavigationBar;
