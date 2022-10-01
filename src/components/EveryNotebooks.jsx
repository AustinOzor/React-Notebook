import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Notebooks from './Notebooks';

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

export default EveryNotebooks;
