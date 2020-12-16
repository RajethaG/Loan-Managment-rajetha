import React from 'react'  
import {  Card, CardBody, CardHeader, Col,Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  


function LoanProgramList(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44357/api/loan/DisplayLoanPrograms');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  
  return (  
    <div className="animated-fadein mt-5">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader style={{color:"white"}} >  
              <h5  style={{color:"#3b123b"}}>Loan Program List </h5>  
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive  size="sm">  
                <thead >  
                  <tr>  
                  <th  style={{color:"#3b123b"}}>Loan ID</th>
                    <th  style={{color:"#3b123b"}}>Loan Type</th>  
                    <th  style={{color:"#3b123b"}}>Interest</th>  
                    <th  style={{color:"#3b123b"}}>Description</th>  
                    
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.Id}</td>   
                        <td>{item.LoanType}</td>  
                        <td>{item.Interest}</td>  
                        <td>{item.Description}</td>  
                        
                    
                         
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  )  
}  
  
export default LoanProgramList