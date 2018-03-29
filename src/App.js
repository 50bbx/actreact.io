import React, { Component } from 'react';

import styled from 'styled-components'
import './App.css';

import logo from './logo.svg'

import Confetti from 'react-confetti'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
        {this.state.success && <Confetti
          width={this.state.window.width}
          height={this.state.window.height}
        />}
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
              this.state.isSubmitting ? "..." : (this.props.cta || "Cool, subscribe me!")
            } />
          </form> :
          <div className="Apposto">
            You're all done! <a href="#" target="_blank">Tweet</a>!
                </div>
        }
        <small className="Disclaimer">No spam, just React and maybe some other frameworks thrown in the mix. <br /> Unsubscribe at any time.</small>

      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Section>
          <Container>
            <Wrapper>
              <Logo />
              <p className="Intro">
                Learn React <em>for free</em> from the best open-source libraries, weekly in your inbox.
              </p>

              <p className="SubIntro">
                Sick of tired, shallow, sloppy React tutorials?
                We love to read about real-world problems with real-world solutions by the best authors from the community.
              </p>

              <Form />
            </Wrapper>
          </Container>
        </Section>
        <Section grey>
          <Container>
            <Wrapper>
              <p className="Intro">The frontend panorama is changing <em>fast</em> and you need to <em>act</em>.
              </p>
              <p className="SubIntro">
                There is a lot to keep up with and limited time to learn. <br />
                Let us do the digging, and just read what is important to you and your career.
              </p>
              <p className="SubIntro">
                This is the kind of content you will get in your inbox:

                <ul>
                  <li><a href="#" target="_blank">Lorem ipsum</a> by <a href="#" target="_blank">Leonardo Stenico</a></li>
                  <li><a href="#" target="_blank">Compose: How does it work?</a> by <a href="#" target="_blank">Marcello Luatti</a></li>
                  <li><a href="#" target="_blank">Dogs with Pants</a> by <a href="#" target="_blank">Nazzareno Squadroni</a></li>
                </ul>
              </p>
              <Form cta="Dogs with pants? Sign me up!" />
            </Wrapper>
          </Container>
        </Section>
        <Section>
          <Container>
            <Wrapper>
              <p className="Intro">
                Who are you?
              </p>
              <p className="SubIntro">
                We are a bunch of React junkies, always looking for the best, greatest content to bring our game to the next level, and we are eager to share it with you!
              </p>
              <p className="SubIntro">
                This is the kind of content you will get in your inbox:
              </p>

              <ul className="SubIntro">
                <li><a href="#" target="_blank">Lorem ipsum</a> by <a href="#" target="_blank">Leonardo Stenico</a></li>
                <li><a href="#" target="_blank">Compose: How does it work?</a> by <a href="#" target="_blank">Marcello Luatti</a></li>
                <li><a href="#" target="_blank">Dogs with Pants</a> by <a href="#" target="_blank">Nazzareno Squadroni</a></li>
              </ul>

              <Form cta="Sounds legit, let's roll!" />
            </Wrapper>
          </Container>
        </Section>
      </div>
    );
  }
}

const Logo = styled(({ className }) => <div className={className}><img src={logo} width="120" /></div>) `
  margin-bottom: 3rem;
`

const Container = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
`

const Wrapper = styled.div`
  max-width: 50rem;
`

const Apposto = styled.div`
  height: 60px;
  border: 1px solid red;
`

const Section = styled.div`
  background-color: ${props => props.grey ? '#fafafa' : ''};
  padding: 2rem 2rem;

  @media screen and (min-width: 800px) {
    padding: 4rem 2rem;
  }
`

export default App;
