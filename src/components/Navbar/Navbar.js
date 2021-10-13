import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (

       
  
  <div class="contener">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <a class="navbar-brand" href="#">Nav</a>
  
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div >
      <nav>
      <ul class="navbar-nav">
        <ul class="nav navbar-nav">
      
             <li>
             <a href="Home">Home</a>
                    {/* <a href="/" class="nav-home">
                        <span class="common-sm-sprite home-nav"></span> Home </a> */}
                        
              </li>

                <li>
                    <a href="works">How It Works</a>
                </li>

                    <li>
                        <a href="need"> I Need A Tutor </a>
                    </li>
                    <li>
                        <a href="join">Join As Tutor</a>
                    </li>
                    <li>
                        <a href="online">Online Tuitions</a>
                    </li>
                    <li><a href="pricing">Pricing</a></li>

                    <li>
                     <Link to="login"><a href="#login">Login</a></Link>
                 </li> 
                    <li>
                     <a href="sign_up">Sign Up</a>
                </li>
                <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle" data-hover="dropdown" id="nav-bar-more">More<b class="caret"></b></a>
            <div class="dropdown-menu dropdown-mega-menu" role="menu" aria-labelledby="nav-bar-more">
             <div class="mega-menu-block nav-vertical">
            <ul class="more-menu">
                                
                                
                                <li><a href="/home/findprofile/">Find Tutor By Id</a></li>
                                <li><a href="/home/findtuition/">Find Tuition By Id</a></li>
                                <li><a href="/home/faqs/">FAQs</a></li>
                                <li><a href="/home/moneybackguarantee/">100% Money Back Guarantee</a></li>
                                <li><a href="/blog/">Blog</a></li>
                                <li><a href="/home/testimonials/">Testimonials</a></li>
                                <li><a href="/home/about/">Our Team</a></li>
                                <li><a href="/home/contact/">Contact Us</a></li>                    
                          </ul> 
                        </div>
                      </div>
                    </li>
                   </ul>
                  </ul>
                  </nav>
                  </div>
                </div>
            
           </nav>
        </div>
    );
};

export default Navbar;