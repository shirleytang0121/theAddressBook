import React, { Component } from 'react';

import './App.css';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

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
  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1>React Based ToDo List</h1>
          </header> 
          <ListGroup>
            
          </ListGroup>
          <h2>Add A ToDo</h2>
          <Form className="text-left">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter Description" />
            </Form.Group>
          </Form>
          </Container>
      </div>
    );
  }
}

export default App;
