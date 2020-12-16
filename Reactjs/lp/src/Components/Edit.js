import React, { useState, useEffect } from 'react'  
import axios from 'axios';
import {useForm} from 'react-hook-form';

function EditProfile(props) {  

const [user, setuser] = useState({AccountNo:'',Name:'',DOB:'',PAN:'',PermanentAddress:'',Phone:'',Email:'',Password:'' })  
console.log(props.match.params.id);  
        const Url = "https://localhost:44357/api/Login/UserDetails?id=" + props.match.params.id;  
        console.log(Url);
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
            console.log(result.data);
          };     
          GetData();  
        }, []);  
        const Editprofile= (e) => {  
          
          // e.preventDefault();  
          const data = {AccountNo:props.match.params.id, Name:user.Name, DOB:user.DOB,PAN:user.PAN,PermanentAddress:user.PermanentAddress,Phone:user.Phone,Email:user.Email,Password:user.Password};  
         console.log(data);
          axios.post('https://localhost:44357/api/login/UpdateUserDetails', data)  
            .then((result) => {  
                console.log(result.data);
                alert('Update successfull')
              props.history.push('/User')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }
        const { register, handleSubmit, errors } = useForm();

        return ( 
          <div class="container">  
           <div class="row"> 
                </div>  
              <div class="card o-hidden border-0 shadow-lg my-5  col-md-12" style={{ "marginTop": "5rem!important;" }}>  
                <div class="card-body p-0">  
                   <div class="row">  
                     <div class="col-lg-12">  
                       <div class="p-5">  
                       <div class="text-center">  
                          <h5  style={{color:"#3b123b",marginBottom:"30px"}} >Update Profile</h5>  
                         </div>
                          <form onSubmit={handleSubmit(Editprofile)} class="user">
                           
                          <div class="form-group row">  
                            
                           <div class="col-sm-6 mb-3 mb-sm-0"> 
                                <input type="number" name="AccountNo"    class="form-control" id="AccountNo"   value={user.AccountNo}  readOnly placeholder="AccountNo" /> 
                                </div>  
          
                          
          
                            <div class="col-sm-6 "> 
                              <input type="text" name="Name"  onChange={onChange} required  value={user.Name} class="form-control" id="Name" placeholder="Name"  ref={register({ maxLength: 20, minLength: 6,pattern: /^[A-Za-z]+$/i })}  />   
                              {errors.Name && errors.Name.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.Name && errors.Name.type === "minLength" && ( <p style={{color:"red"}}>Min length is 5</p>)} 
                      {errors.Name && errors.Name.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 20</p>)} 
                      {errors.Name && errors.Name.type === "pattern" && ( <p style={{color:"red"}}> Only letters can be inserted</p>)}
                         </div>  
                           </div>
                              
                     <div class="form-group row"> 
                               <div class="col-sm-6 mb-3 mb-sm-0"> 
                               <input type="date" name="DOB" onChange={onChange}  readOnly  value={user.DOB} class="form-control" id="DOB" placeholder="yyyy-mm-dd" />  
                             </div>
                              
                             <div class="col-sm-6 mb-3"> 
                              <input type="text" name="PAN" onChange={onChange}   readOnly value={user.PAN} class="form-control" id="PAN" placeholder="PAN"   ref={register({ maxLength:10,minLength: 10,pattern: /^[A-Za-z]+[0-9]+$/i })}/> 
                              {errors.PAN && errors.PAN.type === "required" &&  ( <p  style={{color:"red"}}>This is required</p>)} 
                      {errors.PAN && errors.PAN.type === "minLength" && ( <p style={{color:"red"}}>Length should be 10</p>)}  
                          </div>
                            <br/>
                           
                           </div>
          
                         <div class="form-group row"> 
                          <div class="col-sm-6 mb-3 mb-sm-0"> 
                           
                               <textarea row={2} type="text" name="PermanentAddress"  required onChange={onChange} value={user.PermanentAddress} class="form-control" id="PermanentAddress" placeholder="Permanent Address" />  
                            
                            </div>
                            
                            <div class="col-sm-6"> 
                           <input type="number" name="Phone" onChange={onChange}  required value={user.Phone} class="form-control" id="Phone" placeholder="Phone"  />  
                           
                           
                          </div>
                             
                          </div> 
          
                                <div class="form-group row">
                             <div class="col-sm-6 mb-3 mb-sm-0"> 
                               <input type="email" name="Email" onChange={onChange}   required value={user.Email} class="form-control" id="Email" placeholder="Email" />  
                          </div>
                           <div class="col-sm-6 "> 
                             <input type="password" name="Password" onChange={onChange}  required  value={user.Password} class="form-control" id="Password" placeholder="Password"  ref={register({ maxLength:10,minLength: 5})} /> 
                             {errors.Password && errors.Password.type === "maxLength" &&  ( <p  style={{color:"red"}}>maximum length should be 10 </p>)} 
                             {errors.Password && errors.Password.type === "minLength" && ( <p style={{color:"red"}}>minimum length should be 5</p>)} 
               
                        </div>
                             
                          </div>  
                          <button type="submit" class="btn  text-white mb-1"  style={{ background: "#993399"}} >  
                            Update profile
                    </button>  
                          
                        </form>  
                        
                     </div>  
                   </div>  
                   </div>  
               </div>  
              </div>  
              </div>   
        
        )  
}  
  
export default EditProfile
