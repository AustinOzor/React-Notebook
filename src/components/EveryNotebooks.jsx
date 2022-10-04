import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Notebooks from './Notebooks';
import {connect} from 'react-redux'
const EveryNotebooks = (props) => {
  return (
      <Container>
        <Row>
          {props.notebooksData.map((notebook) =>
           { return <Notebooks notebookInfo={notebook} key={notebook.id} 
           deleteNotebook={props.deleteNotebook} editNotebook={props.editNotebook}/>}
           )
          }
        </Row>
      </Container>
  );
}
const mapStateToProps = (state) => {
  return{
    notebooksData:state.notebooks,
  }
}
export default connect(mapStateToProps) (EveryNotebooks);
