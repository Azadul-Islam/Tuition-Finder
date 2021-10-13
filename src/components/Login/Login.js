import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css';


const Login = () => {
    return (
        <section id="">
         <Navbar></Navbar>
         <div className="login-body">        
            <div className="login-body-2">
                <div className="container py-5">
                    <div className="login-body-3 ">
                        <div className="login-body-4">
                    <form>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
           </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
       <button type="submit" class="btn btn-primary">Login</button>
        </form>
         </div>
       </div>
      </div>
     </div>
   </div>    
</section>
    );
};

export default Login;    
