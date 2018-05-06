import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Card, CardBody, CardTitle, Input, Label, FormGroup, CardHeader } from 'reactstrap';




class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  //handles



  render() {
    return (
      <div>
        <Jumbotron>

        </Jumbotron>

        {/* <Row>
          <Col xs="4"></Col>
          <Col xs="4">
          <h1> BBQ  </h1>
          </Col>
        </Row> */}
        <Row>
          <Col xs="4">

          </Col>
          <Col xs="3">
          <p>Hello! On May 12th at 7pm I'll be hosting a BBQ at my house.
          If you're interested please RSVP and I'll email you with the further details.</p>
          </Col>
        </Row>

        <Row>
          <Col xs="4"></Col>
          <Col xs="6" sm="3">
            <Card>
              <CardHeader>
                <strong>RSVP</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" id="name" placeholder="Enter your name" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Email</Label>
                      <Input type="text" id="email" placeholder="Enter your email" required />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Food</Label>
                      <Input type="text" id="food" placeholder="Would you like to bring some food to share?" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Attending?</Label>
                      <Input type="select" name="attendance" id="attendance">
                        <option value="0"></option>
                        <option value="1">Yes I'd love to come!</option>
                        <option value="2">Sorry I can't make it :/</option>
                        <option value="3">I'm not sure I'll get back to you</option>

                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Button>Submit</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>




        </Row>


      </div>
    );
  }
}

export default Books;
