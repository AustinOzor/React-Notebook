import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';

class AddNotebooks extends Component {
  constructor(props){
    super(props);
    this.state ={title:"", date:"", description:""}
  }

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addNotebook(this.state);
    this.setState({title:"", date:"", description: ""});
  };


  render() {
    return (

        <Form onSubmit={this.handleSubmit} style={{border:"1px solid #6c1b1b", backgroundColor: "#6c1b1b", color: "#fff", height: "420px", borderRadius:"5px"}}>
          <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px",}} 
          className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Title</strong></Form.Label>
            <Form.Control type="text" placeholder="Notebook Title" value={this.state.title} name="title" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Date</strong></Form.Label>
            <Form.Control type="date" placeholder="Date Recorded" value={this.state.date} name="date" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Description</strong></Form.Label>
            <Form.Control type="description" as="textarea" style={{height:"100px"}} placeholder="Note Text" value={this.state.description} name="description" onChange={this.handleChange}/>
          </Form.Group>
          
          <Button style={{marginTop:"15px", marginLeft: "150px", width: "100px"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
  }
}

export default AddNotebooks;