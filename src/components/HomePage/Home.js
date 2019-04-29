import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import "./Home.css"


class Home extends Component {
  render() {
    return (
      <div>
      <Container>
      <Row>
        <Col>  
          <Card bg="primary" text="white" style={{ width: '33rem', height: '15rem' }}>
            <Card.Body>
              <Card.Title>What Is Open-Source Software?</Card.Title>
              <Card.Text>
                Open-source software (OSS) is a type of computer software in which 
                source code is released under a license in which the copyright 
                holder grants users the rights to study, change, and distribute the 
                software to anyone and for any purpose. - Wikipedia(“Open-source software”) 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card bg="primary" text="white" style={{ width: '33rem', height: '15rem'}}>
            <Card.Body>
              <Card.Title>What Is The Purpose Of This Website?</Card.Title>
              <Card.Text>
                Open Source Alternatives aims to provide visitors with open source 
                alternatives to closed source software and spread the 
                awesomeness of open source software for all to experience! 
              </Card.Text>
            </Card.Body>
          </Card>        
        </Col>

      </Row>
      
      <hr/>

      <Row>
        <Col>
        <Card bg="primary" text="white" style={{ width: '33rem', height: '15rem'}}>
            <Card.Body>
              <Card.Title>What Can You Find Here?</Card.Title>
              <Card.Text>
                The curated lists of software has been categorized for your 
                convenience. Clicking on any of the categories provided in the 
                navigation bar will take you to a page where open source 
                alternatives to popular closed source programs are listed along with 
                where to download the program and how to support the developers.  
              </Card.Text>
            </Card.Body>
          </Card>        
        </Col>

        <Col>
        <Card bg="primary" text="white" style={{ width: '33rem', height: '15rem'}}>
            <Card.Body>
              <Card.Title>Want To Contribute And Grow The List?</Card.Title>
              <Card.Text>
                Contact us by clicking on the link down below or click the GitHub 
                Link provided at the top of the page. Let’s spread awesomeness 
                together !
              </Card.Text>
            </Card.Body>
          </Card>          
        </Col>
      </Row>
    </Container>
    </div>
    );
  }
}
 
export default Home;