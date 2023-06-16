import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

export default function App() {
  const [counter, setCounter]= useState(0)
  const increment=()=>{
    setCounter(counter+1);
  };
  const decrement=()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  };

  return (
    <div style={{backgroundColor:"#e6e6e6"}}>
      <Container className="mt-5 pt-5 text-center">
        <h1 className="text-center">COUNTER APP</h1>
        <div className="border rounded border-primary p-5 m-5 d-inline-block shadow" style={{backgroundColor:"#e6e6e6"}}>           
           <h1 style={{ padding: "auto" }}> {counter}</h1>
        <div className="d-flex justify-content-between my-5">
        <Button className="mx-2 px-5"variant="danger"onClick={increment}>+</Button>
              {
                counter >0 && 
                <Button className="mx-2 px-5"variant="info"onClick={decrement}>-</Button>
              }


      
       </div>
        </div> 
      </Container>
    </div>
  );
}
// import Card from 'react-bootstrap/Card';

// function TextExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>COUNTER APP</Card.Title>
        
        
//         <Button variant="primary">Go somewhere</Button>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default TextExample;