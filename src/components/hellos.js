import React, { Component } from 'react'

const hellos = ['Hello', 'Bonjour', 'Hola', 'Ciao', '你好', 'Guten Tag', 'Hej', 'Привет', 'Namaste', 'Salaam', 'Olá', 'Oi']
const speed = 2000

class Hellos extends Component{
  constructor() {
    super()
    this.state = { helloIndex: 0 }
    this.changeHello = this.changeHello.bind(this)
  }
  componentDidMount() {
    setTimeout(this.changeHello, speed)
    this._ismounted = true;
  }
  componentWillUnmount() {
    this._ismounted = false;
  }
  changeHello() {
    const { helloIndex } = this.state
    const nextIndex = helloIndex + 1
    if (this._ismounted) {
      this.setState({helloIndex: nextIndex === hellos.length ? 0 : nextIndex})
      setTimeout(this.changeHello, speed)
    }
  }

  render() {  
    const { helloIndex } = this.state
    return <span>{hellos[helloIndex]}</span>
  }
}

export default Hellos
