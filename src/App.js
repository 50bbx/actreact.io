import React, { Component } from 'react'

import styled from 'styled-components'
import './App.css'

import logo from './logo.svg'
import Form from './Form'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Body>
          <Hero>
            <Container>
              <Wrapper>
                <Logo />
                <h1 className="Intro">
                  Learn React <em>for free</em> from the best open-source libraries, weekly in your inbox.
                </h1>

                <h2 className="SubIntro">
                  Sick of tired, shallow, sloppy React tutorials?
                  We love to read about real-world problems with real-world solutions by the best authors in the community, and so will you.
                </h2>
                <Form />
              </Wrapper>
            </Container>
          </Hero>
          <Section>
            <Container>
              <Wrapper>
                <p className="Intro">
                  Who are you?
                </p>
                <div>
                  <p className="SubIntro">
                    We are a bunch of React junkies, always looking for the best, greatest content to bring our game to the next level, and we are eager to share it with you!
                  </p>
                  <p className="SubIntro">
                    There is a lot to keep up with and limited time to learn. <br />
                    Let us do the digging, and just read what is important to you and your career.
                  </p>
                </div>

                <strong>This is the kind of content you will get every week in your inbox:</strong>

              </Wrapper>

              <ContentSample>
                <ContentCard>
                  <strong>Lorem ipsum</strong> <small>Leonardo Stenico</small>
                </ContentCard>
                <ContentCard>
                  <strong>Compose: How does it work?</strong> <small>Marcello Luatti</small>
                </ContentCard>
                <ContentCard>
                  <strong>Dogs with Pants</strong> <small>Nazzareno Squadroni</small>
                </ContentCard>
                <ContentCard>
                  <strong>Lorem ipsum</strong> <small>Leonardo Stenico</small>
                </ContentCard>
                <ContentCard>
                  <strong>Lorem ipsum</strong> <small>Leonardo Stenico</small>
                </ContentCard>
                <ContentCard>
                  <strong>Lorem ipsum</strong> <small>Leonardo Stenico</small>
                </ContentCard>
              </ContentSample>
            </Container>
          </Section>

          <LastSection>
            <Container center dark>
              <h2 className="Intro">
                The frontend panorama is changing <em>fast</em> and you need to <em>act</em>.
              </h2>

              <Form cta="Sign me up!" />
            </Container>
          </LastSection>

        </Body>
        <Footer>
          <Section>
            <Container>
              <Wrapper>
                Made with 🤖 by <a href="#">@ggsimm</a> & <a href="#">@50bbx</a>. Powered by React & Netlify. If you want to chat, click on the chat icon in the corner, powered by Drift!
                <br /> Logo: <a href="https://thenounproject.com/search/?q=chemistry&i=1556012#_=_">Chemistry</a> by dDara from the Noun Project
              </Wrapper>
            </Container>
          </Section>
        </Footer>
      </React.Fragment >
    );
  }
}

const Logo = styled(({ className }) => <div className={className}><img src={logo} width="180" /></div>) `
  margin-bottom: 4rem;
`
const Body = styled.div`
  margin-bottom: 240px;
  z-index: 2;
  background-color: white;
  position: relative;
  padding-bottom: 1rem;
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  padding: 1rem;
  z-index: 1;
  height: 240px;
  color: #777;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
`

const Container = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;

  ${props => props.center ? `
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  ` : ''}
`

const Wrapper = styled.div`
  max-width: 50rem;
`

const Apposto = styled.div`
  height: 60px;
  font-size: 1rem;
`

const Section = styled.div`
  background-color: ${props => props.grey ? '#fafafa' : ''};
  padding: 3rem 2rem;

  @media screen and (min-width: 800px) {
    padding: 5rem 2rem;
  }
`

const Hero = Section.extend`
  color: white;
  background-color: #16111C;

  @media screen and (min-width: 800px) {
    padding-bottom: 6rem;
  }
`

const ContentCard = styled.div`
  border-radius: 5px;
  background-color: #f8f8f8;
  padding: .5rem 1rem;

  display: grid;
  grid-template-columns: 2fr 1fr;

  align-items: center;

  &:hover {
    background-color: rgb(140, 38, 236);
    color: white;
    cursor: pointer;
  }

  small {
    font-size: .75rem;
    font-weight: bold;
  }
`

const ContentSample = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
  margin-top: 2rem;
`

const LastSection = styled.div`
  margin: 2rem;
  padding: 3rem;
  background-color: #16111C;
  color: white;
`

export default App;
