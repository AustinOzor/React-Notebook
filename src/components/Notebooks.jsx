import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditNotebooks from './EditNotebooks';

const Notebooks = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteNotebook(props.notebookInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title style={{fontStyle:"italic"}}>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <EditNotebooks notebookInfo={props.notebookInfo} editNotebook={props.editNotebook} closeModal={handleClose}/> 
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ backgroundColor: "#963636", color: "white" }}>
          <Card.Body>
            
            <Card.Title style={{ marginLeft: "60px", fontWeight: "800"}}> Notebook</Card.Title>
            <Card.Text style={{ paddingLeft:"20px",paddingTop:"20px",paddingBottom:"7px",borderStyle:"dotted", borderColor:"white"}}>
              <p><strong> Title: </strong>{props.notebookInfo.title}</p>
              <p><strong> Date: </strong> {props.notebookInfo.date}</p>
              <p><strong> Description: </strong> {props.notebookInfo.description}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button style={{ width: "75px" }} href="#" variant="primary" onClick={handleShow}>Edit</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button style={{ marginLeft: "10px" }} href="#" variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Notebooks;