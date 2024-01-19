import  React , {Component, KeyboardEvent} from 'react'
import {Container,Row,Col,Card,Form,Button } from 'react-bootstrap';
import {useState} from 'react';
let Register = () =>
{
    let [state,setState] = useState({
        user : {
            username : " ",
            password : " "
        }
    });
    let updateInput = (e) => {
         setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name] : e.target.value
            }
         })
    }
      let register = (e) => {
        e.preventDefault();
        console.log(state.user);
    

      }
    
    return (
        <>
        <Container  fluid="xxl" style={{align: 'centre',padding: 300}}>
            <Row>
                <Col xs={3}>
                <Card style={{ width: '20rem', height: '20rem'}}>
                 <Card.Header className="p-3" style={{backgroundColor: 'orange'}}>
                    <h4>Registration</h4>
                </Card.Header>
                    <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control 
                                    name="username"
                                    onChange={updateInput}
                                    type = "text" placeholder ="Username"/>
                         </Form.Group>
                         <Form.Group className="mb-3">
                            <Form.Control 
                            name="password"
                            onChange={updateInput}
                            type = "password" placeholder ="Password"/>
                         </Form.Group>
                         <Form.Group className="mb-3">
                            <Button onClick={register} variant ="warning" type = "submit">submit</Button> <he/>
                            <Button onClick={register} variant ="warning" type = "submit">signup</Button> 
                         </Form.Group>
                         
                          <p className="forgot-password text-right">
                       <a href="#">Forgot password?</a>
                    </p>


                    </Form>
                    </Card.Body>

                </Card>
                </Col>
            </Row>
            
        </Container>
        </>
    )
}
export default Register