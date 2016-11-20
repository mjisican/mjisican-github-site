import React, { PropTypes } from 'react'

import './index.global.css'
import './highlight.global.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Container from './components/Container'
import DefaultHeadMeta from './components/DefaultHeadMeta'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import {
  fullWhite,
  pink700, pink500, pink100,
  // white,
  purpleA200
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'

const customMuiTheme = getMuiTheme({
  palette: {
    primary1Color: pink700,
    primary2Color: pink500,
    primary3Color: pink100,
    accent1Color: purpleA200,
    accent2Color: purpleA200,
    accent3Color: purpleA200,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  },
  appBar: {
    height: 50
  },
  toolbar: {
    color: fullWhite,
    backgroundColor: 'transparent',
    menuHoverColor: purpleA200
  }
})

const AppContainer = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(customMuiTheme)}>
    <Container>
      <DefaultHeadMeta />
      <Header />
      <Content>
        { props.children }
      </Content>
      <Footer />
    </Container>
  </MuiThemeProvider>
)

AppContainer.propTypes = {
  children: PropTypes.node
}

export default AppContainer
