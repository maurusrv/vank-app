import React from 'react'

class ClassicalComponent extends React.Component {
  state = {
    count: 0,
  }
  // constructor () {
  //   super()
  //   this.state = {
  //     count: 0,
  //   }

  //   // this.onClick = this.onClick.bind(this)
  // }  

  // In class components, the focus is what stage / step should a side-effect trigger?
  componentDidMount() {
    console.log('C: componentDidMount!')
  }

  componentDidUpdate() {
    console.log('C: componentDidUpdate!')
  }

  componentWillUnmount() {
    console.log('C: componentWillUnmount!')
  }

  onClick = () => {
    const { count } = this.state

    this.setState({
      count: count + 1
    })
  }

  render() {
    const { count } = this.state
    const { username } = this.props
 
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black', padding: '10px', flexDirection: 'column' }}>
        <h6>Hello, {username}!</h6>
        <h1>{count}</h1>
        <button onClick={this.onClick}>Click me!</button>
      </div>
    )
  }
}

export default ClassicalComponent
