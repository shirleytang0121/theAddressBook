import React, { Component } from 'react';

import './App.css';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state={
    addess :[
      {
        FirstName: "Cathy" ,
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
    },
    {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
    },
    {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday:  "8/3/1970",
        Telephone: "200-661-9407"
    },
    {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
    },
    {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
    },
    {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
    }
    ]
  }

  //show address
  showAddress=()=>{
    const address=[...this.state.addess];
    return address.map((item)=>(
      <ListGroup.Item key={item.FirstName}>
        <Card className="bg-light border round">
          <span className="text-right">{'\u274e'}</span>
          <Card.Body className="text-left">
            <p>FirstName:{item.FirstName}</p>
            <p>LastName:{item.LastName}</p>
            <p>Birthday:{item.Birthday}</p>
            <p>Telephone:{item.Telephone}</p>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    ))
  }
  render=()=> {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1>Address Book</h1>
          </header> 
          <ListGroup>
            {this.showAddress()}
          </ListGroup>
          <h2>Add a new address about some one</h2>
          <Form className="text-left">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>FirstName</Form.Label>
              <Form.Control type="text" placeholder="Enter firstName" />
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text" placeholder="Enter lastName" />
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="text" placeholder="Enter Birthday" />
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="text" placeholder="Enter Telephone" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.addTodoHandler}>
            Add Address
            </Button>
          </Form>
          </Container>
      </div>
    );
  }
}

export default App;
