import React from 'react'  
import { Card, CardBody, CardHeader, Col,Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function ManagerList(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44357/api/admin/clientdetails');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deleteClients = (id) => {  
    debugger;  
    
    axios.delete('https://localhost:44357/api/admin/removeclient?id=' + id)  
      .then((result) => {  
        props.history.push('/ViewManager')  
      });  
  };  

  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setData({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div className="animated fadeIn mt-5">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>
              <h5 style={{color:"#3b123b"}}> Clients List </h5>
              </CardHeader>
            <CardBody>

              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>Id</th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Email</th>
                 <th>Address</th>  
                <th>Phone</th>
                <th>Password</th>      
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.Id}</td>   
                        <td>{item.Name}</td>  
                        <td>{item.DOB}</td>  
                        <td>{item.Email}</td>  
                        <td>{item.Address}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Password}</td>   
                        <td>  
                          <div class="btn-group">  
                            <button className="btn text-white " style={{ background: "#993399"}}  onClick={() => { deleteClients(item.Id) }}>Delete</button>  
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
  
export default ManagerList