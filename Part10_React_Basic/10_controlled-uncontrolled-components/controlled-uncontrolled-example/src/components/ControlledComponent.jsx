import React from 'react'

class ControlledComponent extends React.Component {
  state = {
    value: '',
  }
  render() {
    const { value } = this.state
    return (
      <div>
        <input value={ value } onChange={ this.change } />
        <button onClick={ this.click }>Send</button>
      </div>
    )
  }

  change = ((e) => {
      console.log(e.target.value)
      this.setState({
        value: e.target.value
      })
  })

  click = (() => {
    console.log(this.state.value)
  })
}

export default ControlledComponent