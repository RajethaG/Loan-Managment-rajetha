import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col,Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function ClientStatus(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44357/api/client/clientstatus');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  
  const editstatus = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/FinalVerification/'+ id
    });  
  };  
  return (  
    <div className="animated fadeIn mt-5">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader  >  
              <h5 style={{color:"#3b123b"}}>Final Verification </h5> 
              </CardHeader>  
           
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th style={{color:"#3b123b"}}>LoanAccountNo</th>
                  <th style={{color:"#3b123b"}}>InterviewDate</th>
                    <th style={{color:"#3b123b"}}>OnlineRequest</th>
                    <th style={{color:"#3b123b"}}>FinalVerification</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                        <td>{item.InterviewDate}</td>
                        <td>{item.Status}</td>
                        <td>{item.FinalStatus}</td>     
                        <td>  


                          <div class="btn-group">  
                            <button className="btn text-white" style={{ background: "#993399"}}  onClick={() => { editstatus(item.LoanAccountNo) }} >Edit</button>  
                          </div>  
                        </td>  
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
  
export default ClientStatus