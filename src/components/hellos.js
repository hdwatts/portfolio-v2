import React, { Component } from 'react'

const hellos = ['Hello', 'Bonjour', 'Hola', 'Ciao', '你好', 'Guten Tag', 'Hej', 'Привет', 'Namaste', 'Salaam', 'Olá', 'Oi']
const speed = 3000

class Hellos extends Component{
  constructor() {
    super()
    this.state = { helloIndex: 0 }
    this.changeHello = this.changeHello.bind(this)
  }
  componentDidMount() {
    setInterval(this.changeHello, speed)
    this._ismounted = true;
  }
  componentWillUnmount() {
    this._ismounted = false;
  }
  changeHello() {
    const { helloIndex } = this.state
    if (this._ismounted) {
      this.setState({helloIndex: helloIndex + 1})
    }
  }

  render() {  
    const { helloIndex } = this.state
    return <div style={{position: 'relative', width: '100%', textAlign: 'center'}}>
      <div style={{opacity: 0}}>{hellos[helloIndex % hellos.length]}</div>
      {hellos.filter((h,idx)=>
        idx === helloIndex % hellos.length
        || idx === (helloIndex % hellos.length) - 1
        || (helloIndex > 0 && helloIndex % hellos.length === 0 && idx === hellos.length - 1)
      ).map(h=>
        <div key={h} className='hellos'>{h},</div>
      )}
    </div>
  }
}

export default Hellos
