import React, { Component } from 'react'
import Container from './components/Container'
import TodoContent from './components/TodoContent'

export default class App extends Component {
  render() {
    return (
      <Container>
        <TodoContent/>
      </Container>
    )
  }
}
