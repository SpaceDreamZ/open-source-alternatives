import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import "../styles/AppItem.css"

function AppItem(props) {
    return(
      <Container>
          <Col></Col>
          <Col>
            <Card className="appCard">
              <Card.Header className="text-center">{props.item.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <b>Uses:</b> {props.item.uses}
                </Card.Text>
                  <p>
                    <b>Description:</b> {props.item.description}
                  </p>
                <Card.Text>
                  <b>Platforms:</b> {props.item.platforms}
                </Card.Text>
                <Card.Text>
                  <b>Alternative To:</b> {props.item.alternative}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                    <Button href={props.item.visit} target="_blank">Visit</Button>
                    <Button href={props.item.support} target="_blank">Support</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col></Col>
      </Container>
    )
}

export default AppItem;

