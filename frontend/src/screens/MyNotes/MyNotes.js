import React, { useEffect, useState } from 'react'
import { Accordion, CustomToggle, Badge, Button, Card, AccordionCollapse } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen'

import axios from "axios";

const MyNotes = () => {

  const [notes,setNotes] = useState([]);
  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")){

    }
  };
const fetchNotes = async () => {
  const {data} = await axios.get('/api/notes'); // we cannot directly call api in useEffect we have to make a function and get coz in server we r using .get

  setNotes(data);
}
console.log(notes);

useEffect(() => {
  fetchNotes();
}, [])

  return (
    <MainScreen title="Welcome back Ekta Mer...">
      <Link to='createnote'>
        <Button style={{marginLeft:10,marginBottom: 6}} size="lg">
          Create New Note
        </Button>
        </Link>
        {
           notes.map(note=>(
            <Accordion key={note._id}>
              {/* <Accordion.Item eventKey='0'> */}
                
               
               <Card style={{margin: 10}}>
               {/* <Accordion.Header> */}
            <Card.Header style={{display: "flex"}}>
               {/* <CustomToggle eventKey="0"> */}
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1, // takes full space and pushes the button to the right side
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
                  >
                    <Accordion.Header as={Card.Text} variant="link" eventKey='0'>{note.title}</Accordion.Header>
                       
        
                    </span>
                    {/* </CustomToggle> */}
    
              <div>
              <Button href={`/notes/${note._id}`}>Edit</Button>
              <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)} >Delete</Button>
              </div>
            </Card.Header>
            {/* </Accordion.Header> */}
           {/* <Accordion.Collapse eventKey='0'> */}
            {/* <Accordion.Body eventKey="0"> */}
            {/* <Accordion.Body> */}
            <Accordion.Body eventKey='0'>
            <Card.Body>

<h4>
  <Badge bg="success">
    Category - {note.category}
  </Badge>
</h4>
<blockquote className="blockquote mb-0">
<p>
{note.content}
</p>
<footer className="blockquote-footer">
Created On -date
</footer>
</blockquote>
</Card.Body>
            </Accordion.Body>
            
{/* </Accordion.Body> */}
{/* </Accordion.Collapse> */}
            {/* </Accordion.Body> */}
            
          </Card>
          {/* </Accordion.Item> */}
          
            </Accordion>
            
           ))
        }
      
     
    </MainScreen>
  );
};

export default MyNotes;
