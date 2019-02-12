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

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

 const getWidth = () => {
   const isSSR = typeof window === 'undefined'

   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
 }



const ServicesHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
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
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

ServicesHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
          >
            <ServicesHeading />
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

 handleSidebarHide = () => this.setState({ sidebarOpened: false })

 handleToggle = () => this.setState({ sidebarOpened: true })

 render() {
   const { children } = this.props
   const { sidebarOpened } = this.state

   return (
     <Responsive
       as={Sidebar.Pushable}

       maxWidth={Responsive.onlyMobile.maxWidth}
     >
       <Sidebar.Pusher dimmed={sidebarOpened}>
         <Segment
           inverted
           textAlign='center'
           style={{ minHeight: 350, padding: '1em 0em' }}

         >
           <ServicesHeading mobile />
         </Segment>

         {children}
       </Sidebar.Pusher>
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


const Work = () => (
 <ResponsiveContainer>

 </ResponsiveContainer>
)
export default Work
