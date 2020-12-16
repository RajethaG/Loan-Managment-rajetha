import React from 'react'  
import { Card, CardBody, CardHeader, Col,Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function ClientList(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44357/api/client/Homeloandetails');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deleteManager = (id) => {  
    debugger;  
    
    axios.delete('https://localhost:44357/api/client/HomeloanReject?id=' + id)  
      .then((result) => {  
        props.history.push('/Manager')  
      });  
  };  
  const editaManager = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/InterviewDate/'+ id
    });  
  };  
    return (  
    <div className="animated fadeIn mt-5">  
      <Row>  
        <Col>  
          <Card>  
          
            <CardHeader style={{color:"white"}} >  
              <h5  style={{color:"#3b123b"}}>Client Status</h5>
              </CardHeader>   
             
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th  style={{color:"#3b123b"}}>LoanAccountNo</th>
                    <th  style={{color:"#3b123b"}}>LoanId</th>  
                    <th  style={{color:"#3b123b"}}>Occupation</th>  
                    <th  style={{color:"#3b123b"}}>AnnualIncome</th>
                    <th  style={{color:"#3b123b"}}>LoanAmount</th>
                    <th  style={{color:"#3b123b"}}>Duration</th>
                    <th  style={{color:"#3b123b"}}>AccountNo</th>
                    <th  style={{color:"#3b123b"}}> EMI</th>
                    <th  style={{color:"#3b123b"}}>InterviewDate</th>
                    <th  style={{color:"#3b123b"}}>Status</th>
                       
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                        <td>{item.LoanId}</td>  
                        <td>{item.Occupation}</td>  
                        <td>{item.AnnualIncome}</td>
                        <td>{item.LoanAmount}</td>
                        <td>{item.Duration}</td>
                        <td>{item.AccountNo}</td>
                        <td>{item.EMI}</td>
                        <td>{item.InterviewDate}</td>
                        <td>{item.Status}</td>     
                        <td>  
                          <div class="btn-group">  
                            <button className="btn text-white mr-2"  style={{ background: "#993399"}}  onClick={() => { editaManager(item.LoanAccountNo) }} >Accept/Reject</button>  
                            <button className="btn text-white"  style={{ background: "#993399"}}  onClick={() => { deleteManager(item.LoanAccountNo) }}>Delete</button>  
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
  
export default ClientList