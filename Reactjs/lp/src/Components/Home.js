import React from 'react'
import {Link} from 'react-router-dom'
import UserLoanProgram from './UserLoanProgram'

function Home() {
    return (
        <div>
         
 <div id="demo" class="carousel slide" data-ride="carousel">


  <ul class="carousel-indicators">
    
  <li data-target="#demo" data-slide-to="0" class="active"></li>
    
  <li data-target="#demo" data-slide-to="1"></li>
    <li 
  data-target="#demo" data-slide-to="2"></li>
  </ul>


  <div class="carousel-inner">
    
  <div class="carousel-item active">
      <img src="http://www.letscompare.com.au/wp-content/uploads/2018/05/home-loan-banner.jpg" 
  alt="Soweto" height="400vh" width="100%"/>
   <div class="carousel-caption d-none d-md-block">
  <div class="col-sm-7  mb-sm-0" id="bt">    
  <h3 style={{color:"#800080" }}>Timely return of Loan makes it easier to borrow a second time</h3>
 <Link   to={'/Register'} className="nav-link" style={{textAlign:"center",color:"#800080",fontWeight:"bold",marginBottom:"100px"}} >Apply Now!</Link>
                
                </div></div>
    </div>
    <div 
  class="carousel-item">
      <img src="https://www.hdfcsales.com/blog/wp-content/uploads/2019/10/Blog-Images-New-05.jpg" 
  alt="Joburg" height="400vh" width="100%"/>
  

    </div>
    <div 
  class="carousel-item">
      <img src="https://www.incred.com/uploads/2020/03/23104516/el2-scaled.jpg" 
  alt="Pretoria" height="400vh" width="100%"/>
    </div>
  </div>
  <a class="carousel-control-prev" 
  href="#demo" data-slide="prev">
    <span 
  class="carousel-control-prev-icon"></span>
  </a>
  <a 
  class="carousel-control-next" href="#demo" data-slide="next">
    
  <span class="carousel-control-next-icon"></span>
  </a>

</div>

<div className="card-deck mb-2 " style={{background:"lightgray"}}>
               <div className="card m-2"   >
               <p style={{color:"#3b123b"}}><strong>Secured Loans</strong></p>
                  <img src="https://davidclarkfinancialsolutions.co.uk/wp-content/uploads/2016/09/secure-loans.jpg" width="400" height="200"  ></img> 
               
             <p style={{color:"#3b123b"}} >1.00% over the rate of interest paid on the relative Time Deposits offered as security irrespective of the loan amount.<br>
             </br> 1.00% over the rate of interest paid on the relative Time Deposits offered as security irrespective of the loan amount.</p>
               </div>
              
              
               <div className="card m-2">
               <p style={{color:"#3b123b"}}><strong>Reduced Interest Rates</strong></p>   
                <img src="https://th.bing.com/th/id/OIP.a62k5hEtALZGgviZHkpzFgHaFk?pid=Api&rs=1"  width="400" height="200"></img> 
               
                <p style={{color:"#3b123b"}}>Fixed Deposit interest rates reduced by OPP Due to the liquidity of the economy, OPP has reduced its Fixed Deposits (FD) and bank deposits interest rates. The interest rates on bank deposits have been reduced to 3.25% from 3.50%.</p>
            
                   
                   </div>
                   <div className="card m-2">
                   <p style={{color:"#3b123b"}}><strong>Benefits of OPP Loans</strong></p>
              < img src="https://www.attractcapital.com/wp-content/uploads/2017/12/benefits-of-loan.jpg" height="200" width="450"></img> 
             
               <p style={{color:"#3b123b"}}>OPP has come up with a slew of special offers for its retail customers to spread festive joy amid the coronavirus pandemic. The nation’s largest lender has announced a 100% waiver in the processing fee for all customers applying for car, gold, and personal loan through OPPYONO.</p>
                   
                   </div>
           </div>
           <UserLoanProgram/>



           <div className="card">
              <h3 style={{color:"#3b123b"}}>Apply Online</h3>
              <p style={{color:"#3b123b"}}>just in 10 minutes by following the three steps</p>
              <div className="card-deck">
                <div className="card" style={{alignItems:"center"}}>
                  <img src="https://cdn0.iconfinder.com/data/icons/business-management-78/66/49-512.png"  height="100" width="100" ></img>
                  <p  style={{color:"#3b123b"}}>Complete Registration process to get started</p>
                </div>
                <div class="card"  style={{alignItems:"center"}}>
                  <img src="https://th.bing.com/th/id/OIP.FkRgfNMXW9eiKEUM4a--LwHaHa?w=175&h=192&c=7&o=5&dpr=1.25&pid=1.7" height="100" width="100"></img>
                  <p style={{color:"#3b123b"}}>Link your online banking data and we'll determine how much we can lend</p>

                </div>
                <div class="card"  style={{alignItems:"center"}}>
                  <img src="https://th.bing.com/th/id/OIP.32E2GVJt1QQ7uzH4SHjh8wHaHa?pid=Api&w=1000&h=1000&rs=1" height="100" width="100"></img>
                  <p  style={{color:"#3b123b"}}>Once approved get your loan to your preferred bank</p>

                </div>
                  
              </div>
            </div>


    
<div  class="footer">
    <nav class="navbar navbar-dark " style={{background:"#800080" }}>
    <p style={{color: "white"}}>
    <br/>   Conditions of UseP rivacy NoticeInterest-Based Ads© 1996-2020, OPP.com, Inc. or its affiliates    </p>
   <a href="#" style={{textAlign:"center",color:"white"}}>Back to top</a>
</nav>
        
        </div>
        </div>
        
    )
}

export default Home
 