import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody,  Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
function EditLoanProgram(props) {  
        const [user, setuser]= useState({Id:'',LoanType: '', Interest: '', Description: ''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44357/api/Loan/LoanProgramdetails?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateLoanProgram = (e) => {  
          e.preventDefault();  
          const data = {Id:props.match.params.id, LoanType:user.LoanType, Interest: user.Interest, Description: user.Description};  
         console.log(data);
          axios.post('https://localhost:44357/api/loan/UpdateLoanProgram', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/LoanProgram')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  


        return (  
                <div className="app flex-row align-items-center mt-5">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateLoanProgram}>    
                            <h5  style={{color:"#3b123b",padding:"4px"}} >Update LoanProgram</h5>  
                                               
                            <InputGroup className="mb-3">  
                              <Input type="text" name="LoanType" id="Name" placeholder="LoanType" value={user.LoanType} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">  
                              <Input type="number" placeholder="Interset" name="Interest" id="Interest" value={user.Interest} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Description" name="Description" id="Description"  value={user.Description} onChange={ onChange }  />  
                            </InputGroup>                                
                      
                          <Row style={{marginLeft:"220px"}}>  
                              
                            <div className="col-md-2">
                              <Button type="submit" className="btn  text-white mb-1 " style={{ background: "#993399"}}   ><span>Update</span></Button>  &nbsp;
                          </div>
                              <div className="col-md-4">
                              <Button className="btn  text-white mb-1" style={{ background: "#993399"}} ><span>Cancel</span></Button>  
                              </div>
                          </Row>  
                       
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div>  
        )  
}  
  
export default EditLoanProgram  
