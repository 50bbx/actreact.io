import React, { Component } from 'react';
import styled from 'styled-components'

const emailRegex = /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class Form extends Component {
  constructor() {
    super()

    this.state = {
      email: null,
      window: {},
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.setState({
      window: {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    })
  }

  handleSubmit(e) {

    e.preventDefault()

    const { email } = this.state

    const isValid = email && email.match(emailRegex)

    if (isValid) {
      this.setState({ isValid, isInvalid: false, isSubmitting: true })

      setTimeout(() => {
        this.setState({
          success: true,
        })
      }, 1000)

    } else {
      this.setState({ isInvalid: true, isValid: false, })
    }

  }

  handleChange(e) {

    const email = e.target.value

    this.setState({
      email
    })
  }

  render() {
    return (
      <div>
        {!this.state.success ?
          <form className="Formerino" onSubmit={this.handleSubmit}>
            <input
              className="Input"
              type="email"
              name="email"
              placeholder="Your Best Email"
              onChange={this.handleChange}
            />
            <input type="submit" className="LetsGo" value={
              this.state.isSubmitting ? "Hold on..." : (this.props.cta || "Cool, subscribe me!")
            } />
          </form> : (
            <div className="Apposto">
              <div>
                You're all done! 🎉<br />
                <a href="#" target="_blank">Wanna tweet about it?</a>
              </div>
            </div>
          )
        }
        <small className="Disclaimer">No spam, just React and maybe some other frameworks thrown in the mix. <br /> Unsubscribe at any time.</small>

      </div>
    )
  }
}

export default Form
