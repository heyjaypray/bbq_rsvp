import React, { Component } from "react";
import { Jumbotron, Button, Row, Col, Card, CardBody, Input, Label, FormGroup, CardHeader, Form } from 'reactstrap';
import API from "../utils/API"




class RSVP extends Component {
  state = {
    name: "",
    email: "",
    attendance: "",
    food: ""
  };

  //handles

  handleName = e => {
    this.setState({ name: e.target.value })
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleFood = e => {
    this.setState({ food: e.target.value })
  }

  handleAttendance = e => {
    this.setState({ attendance: e.target.value })
  };

  postRSVP = e => {
    e.preventDefault();
    const rsvp = {
      name: this.state.name,
      email: this.state.email,
      attendance: this.state.attendance,
      food: this.state.food
    }

    API.postRsvp(rsvp).then(res => console.log(res.data))
  }



  render() {
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.food)
    console.log(this.state.attendance)
    return (
      <div>
        <Jumbotron>

        </Jumbotron>

        <Row>
          <Col xs="4">

          </Col>
          <Col xs="3">
            <p>Hello! On May 12th at 7pm I'll be hosting a BBQ at my house.
          If you're interested please RSVP and I'll email you with the further details.</p>
          </Col>
        </Row>

        <Form 
        onSubmit={this.postRSVP}
        >
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
                        <Input type="text" id="name" placeholder="Enter your name" onChange={this.handleName} required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" id="email" placeholder="Enter your email" onChange={this.handleEmail} required />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="food">Food</Label>
                        <Input type="text" id="food" placeholder="Would you like to bring some food to share?" onChange={this.handleFood} />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="attendance">Attending?</Label>
                        <Input type="select" name="attendance" id="attendance" onChange={this.handleAttendance}>
                          <option ></option>
                          <option value="Yes">Yes I'd love to come!</option>
                          <option value="No">Sorry I can't make it :/</option>
                          <option value="Maybe">I'm not sure I'll get back to you</option>

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

        </Form>


      </div >
    );
  }
}

export default RSVP;
