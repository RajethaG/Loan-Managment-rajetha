import React from 'react'  
import { Card, CardBody, CardHeader, Col,Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function RequestList() {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44357/api/client/clientstatus');  
      console.log(result);
      setData(result.data);  
    };  
    GetData();  
   }, []);
  

  
  return (  
    <div className="animated fadeIn mt-5"> 
      <Row>  
        <Col>  
          <Card>  
             <CardHeader>
              <h5 style={{color:"#3b123b"}}>Clients Status</h5> 
              </CardHeader>
            <CardBody>  
              
              
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>LoanAccountNo</th>
                    <th>LoanId</th>  
                   <th>LoanAmount</th>
                    <th>Duration</th>
                  
                    <th>FinalVerification</th>
                       
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                  
                    data.map((item, idx) => {
                      console.log(item);
                      console.log(data)
                      
                      if(item.FinalStatus=="accepted  "){
                        return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                        <td>{item.LoanId}</td>  
                        <td>{item.LoanAmount}</td>
                        <td>{item.Duration}</td>
                        <td style={{color:"green"}}>{item.FinalStatus}</td>     
                       
                      </tr>  
                        
                      }else if(item.FinalStatus=="pending   "){
                        
                          return <tr> 
                          <td>{item.LoanAccountNo}</td>   
                          <td>{item.LoanId}</td>  
                          <td>{item.LoanAmount}</td>
                          <td>{item.Duration}</td>
                         
                          <td style={{color:"#ffbf00"}}>{item.FinalStatus}</td>     
                         
                        </tr>  
                      }else if(item.FinalStatus=="rejected  "){
                        return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                        <td>{item.LoanId}</td>  
                        <td>{item.LoanAmount}</td>
                        <td>{item.Duration}</td>
                        <td style={{color:"red"}}>{item.FinalStatus}</td>     
                       
                      </tr>  
                      }

                      
                     
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
  
export default RequestList