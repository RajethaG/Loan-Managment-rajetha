import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
function EditRequest(props) {  
        const [user, setuser]= useState({LoanAccountNo:'',LoanId:'',PlotAddress:'',Occupation:'',AnnualIncome: '', MonthlyExpenditure:'',LoanAmount:'',Duration: '', AccountNo: '', EMI:'',InterviewDate:'',Status:''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44357/api/client/HomeLoanDetailsbyID?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateInterViewDate = (e) => {  
          e.preventDefault();  
          const data = {LoanAccountNo:props.match.params.id,LoanId:user.LoanId,PlotAddress:user.PlotAddress,Occupation:user.Occupation, AnnualIncome:user.AnnualIncome,MonthlyExpenditure:user.MonthlyExpenditure,LoanAmount:user.LoanAmount, Duration: user.Duration, AccountNo: user.AccountNo,EMI:user.EMI,InterviewDate:user.InterviewDate,Status: user.Status};  
         console.log(data);
          axios.post('https://localhost:44357/api/client/interviewdate', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/Manager')  
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
                          <Form onSubmit={UpdateInterViewDate}>  
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Status" name="Status" id="Status"  value={user.Status} onChange={ onChange }  />  
                            </InputGroup>    
                            <InputGroup className="mb-3">  
                              <Input type="datetime" placeholder="InterView Date" name="InterviewDate" id="Inda"  value={user.InterviewDate} onChange={ onChange }  />  
                            </InputGroup>                             
             
                          <Row className="mt-5">  
                              
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn text-white mb-1" style={{ background: "#993399"}}  ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn  text-white  mb-1" style={{ background: "#993399"}} ><span>Cancel</span></Button>  
                            </Col>  
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
  
export default EditRequest