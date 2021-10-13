import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons';



const Header = () => {
    return (

      <div class="header">
      <div class="menu2">
     
        <div>
          <h2 class="home-name">Home Tuition Finder</h2>
          <h4 class="Learn">Learn & Achieve!</h4>
        </div>

        <div class="logoCaption">
        <i >We Help Students & Tutors To find Each Others</i>
        </div>
      
      </div>
      <div className="header">
        <nav className="navbar">
          <ul>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
              Select City
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Sirajganj </a>
              <a class="dropdown-item" href="#">Rajshahi </a>
              <a class="dropdown-item" href="#">Chittagong </a>
              <a class="dropdown-item" href="#">Dinajpur</a>
              <a class="dropdown-item" href="#">Rangpur</a>
              <a class="dropdown-item" href="#">Pabna</a>
              <a class="dropdown-item" href="#">Noakhali </a>
              <a class="dropdown-item" href="#">Barisal</a>
              <a class="dropdown-item" href="#">Comilla</a>
            </div>
          </ul>
          <div class="tuition-type">
            <div class="pax-details ddn-parent">
              <select name="searchTypeDropdown" id="searchTypeDropdown" class="form-control ui-autocomplete-input form-control-front" autocomplete="off">
                <option value="tutors" selected="">Tutors</option>
                <option value="tuitions">Tuitions</option>
              </select>
            </div>
          </div>

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Enter Course Subject" aria-label="Search" />
            <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <br />
      </div>
     
      <div class="coverpage">
        <div class="container views">
          <div class="row tuition-viewer-count">
            <div class="col-md-4 col-sm-4 page-views-back">
              <h2 class="pageviews">All Bangladesh<br />
                <span class="views1">Coverage</span></h2>
            </div>
            <div class="col-md-4 col-sm-4 page-views-back">
              <h2 class="home-tutors">5,000 +<br />
                <span class="tutors1">Home Tutors</span></h2>
            </div>
            <div class="col-md-4 col-sm-4 page-views-back">
              <h2 class="tuition-jobs">3,000 +<br />
                <span class="jobs1">Tuition Jobs</span></h2>
            </div>
          </div>
        </div>
      </div>


      <di class="container Looking ">
        <br />
        <h1 class="Looking">Looking for Home Tutors</h1>
      </di>

      <div class="card-deck">
        <div class="card ">
          <div class="card-body tell">
            <div>
              <h1>Tell us your</h1>
              <p>NEEDS</p>
            </div>
            <div class="card-footer">
              <h1 class="text-muted">1</h1>
            </div>
          </div>
        </div>
        <div class="card ">
          <div class="card-body get">
            <div>
              <h1>Get a free</h1>
              <p>DEMO</p>
            </div>
            <div class="card-footer">
              <h1 class="text-muted">2</h1>
            </div>
          </div>
        </div>
        <div class="card ">
          <div class="card-body confirm">
            <div>
              <h1>Confirm if you</h1>
              <p>LIKE</p>
            </div>
            <div class="card-footer">
              <h1 class="text-muted">3</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="pp">
        <h3><button class="sal">I NEED A HOME/ONLINE TUTTOR</button></h3>
      </div>

      <br />
      <h1 class="Tuition">Looking for Tuition Jobs</h1>
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide orange-background" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <h6>Job ID-5606</h6>
                  <h1 class="tutor">Need Language Learning Tutor For English Student</h1>
                  <h3 class="subject">Category : English Medium. Class : Play</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -9.30 a.m.-10.30 a.m.</p>
                </div>
                <div class="col-md-5">
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 3 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a female tutor for Class 1 student (Home Tutoring)</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : one</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Mirpur 10</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-9.30 a.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 2000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 1 week ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need Language Learning Tutor For English Student class-2</h1>
                  <h3 class="subject">Category : English Medium. Class : Two</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Mirpur Shower para</h2>
                  <p>Other Requirements - tutoring time -7.30 a.m.-9.30 a.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 3 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a male tutor for class- 3 </h1>
                  <h3 class="subject">Category :  Bangla Medium. Class : Class-3</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Sirajganj</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-7.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 3000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 3 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a female tutor for class- 4 (4 Student)</h1>
                  <h3 class="subject">Category : English Medium. Class : Class-4 </h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Chittagong</h2>
                  <p>Other Requirements - tutoring time -8.30 p.m.-10.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 3 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a female tutor for Class- 5</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : Class-5</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Dinajpur</h2>
                  <p>Other Requirements - tutoring time -8.30 a.m.-9.30 a.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 3000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 2 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a Male tutor For Class- 6</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : Class-6</h3>
                  <p>Subjects : All Subjects</p>
                  <h6> 5 Days/Week</h6>
                  <h2> Mirpur-2</h2>
                  <p>Other Requirements - tutoring time -8.30 a.m.-9.30 a.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 3,500</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 2 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a female tutor for 5 Student</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : Class-7</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -8.30 p.m.-10.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6,000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 2 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need male tutor for class 8 student</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : Class-8</h3>
                  <p>Subjects : All Subjects</p>
                  <h6>5 Days/Week</h6>
                  <h2> Farmgate</h2>
                  <p>Other Requirements - tutoring time -8.30 p.m.-10.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 4000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 3 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need Female tutor for class 9 student</h1>
                  <h3 class="subject">Category : English Medium. Class : Class-9</h3>
                  <p>Subjects :  Biology, Chemistry, Higher maths, Physics</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a male tutor for class 10 Student</h1>
                  <h3 class="subject">Category : English Medium. Class : Class-10</h3>
                  <p>Subjects : Higher maths, Physics</p>
                  <h6>5 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -9.30 a.m.-10.30 a.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 4000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 1 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need Female tutor for class SSC student</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : SSC</h3>
                  <p>Subjects :  Biology, Chemistry, Higher maths, Physics</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a Male tutor For HSC 1st year student</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : HSC-1st YEAR</h3>
                  <p>Subjects :  English</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Farmgate</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 3500</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a Male tutor For HSC 2nd year student</h1>
                  <h3 class="subject">Category : English Medium. Class :  HSC 2nd year</h3>
                  <p>Subjects : Chemistry,Physics</p>
                  <h6>3 Days/Week</h6>
                  <h2> Chittagong</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a Male tutor for Spoken</h1>
                  <h3 class="subject">Category : Bangla Medium. Class : Class-9</h3>
                  <p>Subjects :  English</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Saver</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a Male tutor for BBA</h1>
                  <h3 class="subject">Category : Uni Help. Class : BBA-Finance</h3>
                  <p>Subjects :</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need Admission preparation tutor for A unit</h1>
                  <h3 class="subject">Category : Admission Test. Class : Public University Admission Test</h3>
                  <p>Subjects :Math</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row  align-items-center">
                <div class="col-md-7">
                  <h1 class="tutor">Need a Male tutor for BBA</h1>
                  <h3 class="subject">Category : Uni Help. Class : BBA-Finance</h3>
                  <p>Subjects :</p>
                  <h6>3 Days/Week</h6>
                  <h2> Dhaka,Aftabnagar</h2>
                  <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
                </div>
                <div class="col-md-5">
                  <br />
                  <br />
                  <p class="Salary">Salary : 6000</p>
                  <br />
                  <br />
                  <button class="buy-now-button">More details</button>
                  <br />
                  <br />
                  <p>Published Time: 4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="copy">
        <div class="container">
          <div class="row  contact-info">
            <div class="col-md-3 crs">
              <div>
                <h6 class="contact"><FontAwesomeIcon icon={faPhone} /> Contact</h6>
                <h6 class="phone">+8801521-502713</h6>
                <div class="location">
                  <div class="map">
                    <div class="mail"><a href="https://mail.google.com/mail/u/0/#inbox"><i><FontAwesomeIcon icon={faMailBulk} /></i></a></div>
                    <samp>Mail</samp>
                  </div>
                  <div class="map">
                    <div class="mail"><a href="https://www.google.com/maps/@23.506657,90.3443647,7z"><i><FontAwesomeIcon icon={faMapMarker} /></i></a></div>
                    <samp>Location</samp>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-3 terms">
              <h2>Terms</h2>
              <h6>Graphic Design</h6>
              <h6>Web Design</h6>
              <h6>Business</h6>
              <h6>Marketing</h6>
              <h6>Engineering</h6>
            </div>
            <div class="col-md-2 useful">
              <h2>Useful Link</h2>
              <h6>Graphic Design</h6>
              <h6>Web Design</h6>
              <h6>Business</h6>
              <h6>Marketing</h6>
              <h6>Engineering</h6>
            </div>
          </div>
        </div>
        <div class="Social">
          <h1 >Social media</h1>
        </div>

        <div class="iconlogo">
          <div class="wrapper">
            <div class="button">
              <div class="icon"><a href=""><i><FontAwesomeIcon icon={faFacebookF} /></i></a></div>
              <samp>facbook</samp>
            </div>
            <div class="button">
              <div class="icon"><a href="https://www.instagram.com/_a_i___sagor___/?hl=en"><i><FontAwesomeIcon icon={faInstagram} /></i></a></div>
              <samp>instgram</samp>
            </div>
            <div class="button">
              <div class="icon"><a href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a></div>
              <samp>twitter</samp>
            </div>
            <div class="button">
              <div class="icon"><a href="https://github.com/Azadul-Islam"><i><FontAwesomeIcon icon={faGithub} /></i></a></div>
              <samp>github</samp>
            </div>
          </div>
        </div>

        <br />

        <footer>
          <div class="footer">
            <div class="row">
              <div class="copy">
                <p>Copyright ©2021 tuition finder</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>


                 
//       <div class="header">
         
//         <div class="menu2">
//             <div>
//             <div class="row ">
//                     <div class="logo-home">
//                         <a href="/" class="home-sprite-none">
//                             <span class="logo">
//                                 <img src="../../Images/home logo.jpg"  alt="Home Tuition Finder"  />
                                
//                             </span>
//                             <h1 class="logo-title">
                               
//                                 <span class="logo-caption">Learn & Achieve!!</span>
//                             </h1>
//                         </a>
//                     </div>
//                 </div>
//             </div>
            
               
//                 </div>
//             <div className="header">
//             <nav className="navbar">  
//            <ul>
//            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                 Select City
//                 </a>
//                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//            <a class="dropdown-item" href="#">Sirajganj </a>
//                 <a class="dropdown-item" href="#">Rajshahi </a>          
//                 <a class="dropdown-item" href="#">Chittagong </a>
//                 <a class="dropdown-item" href="#">Dinajpur</a>
//                 <a class="dropdown-item" href="#">Python</a>          
//                 <a class="dropdown-item" href="#">Pabna</a>
//                 <a class="dropdown-item" href="#">Noakhali </a>
//                 <a class="dropdown-item" href="#">MongoDB</a>          
//                 <a class="dropdown-item" href="#">Comilla</a>          
//                 </div>
//              </ul>
//              <div class="tuition-type">
//                                     <div id="" class="pax-details ddn-parent">
//                                         <select name="searchTypeDropdown" id="searchTypeDropdown" class="form-control ui-autocomplete-input form-control-front" autocomplete="off">
//                                         <option value="tutors" selected="">Tutors</option>
//                                         <option value="tuitions">Tuitions</option>
//                                         </select>
//                                     </div>
//                                 </div>
                         
//             <form class="form-inline my-2 my-lg-0">
//             <input class="form-control mr-sm-2" type="search" placeholder="Enter Course Subject" aria-label="Search"/>
//             <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//             </nav>
//             <br />
//             <br />
//         </div>
//          <div class="coverpage">
//         <div class="container views">
//                 <div class="row tuition-viewer-count">
//                     <div class="col-md-4 col-sm-4 page-views-back">
//                         <h2 class="pageviews">All Bangladesh<br />
//                         <span class="views1">Coverage</span></h2>
//                     </div>
//                     <div class="col-md-4 col-sm-4 page-views-back">
//                         <h2 class="home-tutors">5,000 +<br />
//                         <span class="tutors1">Home Tutors</span></h2>
//                     </div>
//                     <div class="col-md-4 col-sm-4 page-views-back">
//                         <h2 class="tuition-jobs">3,000 +<br />
//                         <span class="jobs1">Tuition Jobs</span></h2>
//                     </div>
//                 </div>
//             </div>
//          </div>
        
//       <di class="container Looking ">
//           <br />
//           <h1 class="Looking">Looking for Home Tutors</h1>
//       </di>
      
//       <div  class="card-deck">
//       <div class="card "> 
//           <div  class="card-body tell">
//               <div>
//                   <h1>Tell us your</h1>
//                   <p>NEEDS</p>
//               </div>
//               <div class="card-footer">
//                   <h1 class="text-muted">1</h1>
//               </div>
//           </div>
//           </div>
//           <div class="card "> 
//           <div  class="card-body get">
//               <div>
//                   <h1>Get a free</h1>
//                   <p>DEMO</p>
//               </div>
//               <div class="card-footer">
//                   <h1 class="text-muted">2</h1>
//               </div>
//           </div>
//           </div>
//           <div class="card "> 
//           <div  class="card-body confirm">
//               <div>
//                   <h1>Confirm if you</h1>
//                   <p>LIKE</p>
//               </div>
//               <div class="card-footer">
//                   <h1 class="text-muted">3</h1>
//               </div>
//           </div>
//           </div>
//       </div>
//       <br />
//       <br />
//        <div class="pp">
//        <h3><button class="sal">I NEED A HOME/ONLINE TUTTOR</button></h3>
//        </div>
//        <br />
//        <br />
//        <h1 class="Tuition">Looking for Tuition Jobs</h1>
       
//        <div class="container">
//         <div id="carouselExampleControls" class="carousel slide orange-background" data-ride="carousel">
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                <div class="row align-items-center">
//                    <div class="col-md-7">
//                     <h6>Job ID-5606</h6>
//                     <h1 class="tutor">Need Language Learning Tutor For English Student</h1>
//                     <h3 class="subject">Category : English Medium. Class : Play</h3>
//                     <p>Subjects : All Subjects</p>
//                     <h6>5 Days/Week</h6>
//                     <h2> Dhaka,Aftabnagar</h2>
//                     <p>Other Requirements - tutoring time -9.30 a.m.-10.30 a.m.</p>
//                    </div>
//                    <div class="col-md-5">
//                     <p class="Salary">Salary : 6000</p>
//                                <br/>
//                                <br/>
//                                <br/>
//                                <button class="buy-now-button">More details</button>
//                                <br/>
//                                <br/>
//                                <p>Published Time: 3 hours ago</p>
//                    </div>
//                </div>
//               </div>
//               <div class="carousel-item">
//                 <div class="row  align-items-center">
//                     <div class="col-md-7">
//                       <h1 class="tutor">Need a female tutor for Class 1 student (Home Tutoring)</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : one</h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-9.30 a.m.</p>
//                     </div>
//                     <div class="col-md-5">
//                        <br />
//                              <br />
//                                <p class="Salary">Salary : 2000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 1 week ago</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="carousel-item">
//               <div class="row  align-items-center">
//                   <div class="col-md-7">
//                     <h1 class="tutor">Need Language Learning Tutor For English Student class-2</h1>
//                             <h3 class="subject">Category : English Medium. Class : Two</h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -7.30 a.m.-9.30 a.m.</p>
//                   </div>
//                   <div class="col-md-5">
//                     <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 3 hours ago</p>
//                   </div>
//               </div>
//           </div>
//           <div class="carousel-item">
//             <div class="row  align-items-center">
//                 <div class="col-md-7">
//                   <h1 class="tutor">Need a male tutor for class- 3 </h1>
//                             <h3 class="subject">Category :  Bangla Medium. Class : Class-3</h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-7.30 p.m.</p>
//                 </div>
//                 <div class="col-md-5">
//                   <br />
//                   <br />
//                     <p class="Salary">Salary : 3000</p>
//                     <br />
//                     <br />
//                     <button class="buy-now-button">More details</button>
//                     <br />
//                     <br/>
//                     <p>Published Time: 3 hours ago</p>
//                 </div>
//             </div>
//         </div>
//         <div class="carousel-item">
//           <div class="row  align-items-center">
//               <div class="col-md-7">
//                 <h1 class="tutor">Need a female tutor for class- 4 (4 Student)</h1>
//                             <h3 class="subject">Category : English Medium. Class : Class-4 </h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -8.30 p.m.-10.30 p.m.</p>
//               </div>
//               <div class="col-md-5">
//                 <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 3 hours ago</p>
//               </div>
//           </div>
//       </div>
//       <div class="carousel-item">
//         <div class="row  align-items-center">
//             <div class="col-md-7">
//               <h1 class="tutor">Need a female tutor for Class- 5</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : Class-5</h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -8.30 a.m.-9.30 a.m.</p>
//             </div>
//             <div class="col-md-5">
//               <br />
//                              <br />
//                                <p class="Salary">Salary : 3000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 2 hours ago</p>
//             </div>
//         </div>
//     </div>
//     <div class="carousel-item">
//       <div class="row  align-items-center">
//           <div class="col-md-7">
//             <h1 class="tutor">Need a Male tutor For Class- 6</h1>
//             <h3 class="subject">Category : Bangla Medium. Class : Class-6</h3>
//             <p>Subjects : All Subjects</p>
//             <h6> 5 Days/Week</h6>
//             <h2> Dhaka,Aftabnagar</h2>
//             <p>Other Requirements - tutoring time -8.30 a.m.-9.30 a.m.</p>
//           </div>
//           <div class="col-md-5">
//             <br />
//                              <br />
//                                <p class="Salary">Salary : 3,500</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 2 hours ago</p>
//           </div>
//       </div>
//   </div>
//   <div class="carousel-item">
//     <div class="row  align-items-center">
//         <div class="col-md-7">
//           <h1 class="tutor">Need a female tutor for 5 Student</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : Class-7</h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -8.30 p.m.-10.30 p.m.</p>
//         </div>
//         <div class="col-md-5">
//           <br />
//                              <br />
//                                <p class="Salary">Salary : 6,000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 2 hours ago</p>
//         </div>
//     </div>
// </div>
//               <div class="carousel-item">
//                   <div class="row  align-items-center">
//                       <div class="col-md-7">
//                         <h1 class="tutor">Need male tutor for class 8 student</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : Class-8</h3>
//                             <p>Subjects : All Subjects</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -8.30 p.m.-10.30 p.m.</p>
//                       </div>
//                       <div class="col-md-5">
//                         <br />
//                              <br />
//                                <p class="Salary">Salary : 4000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 3 hours ago</p>
//                       </div>
//                   </div>
//               </div>
//               <div class="carousel-item">
//                   <div class="row  align-items-center">
//                       <div class="col-md-7">
//                         <h1 class="tutor">Need Female tutor for class 9 student</h1>
//                             <h3 class="subject">Category : English Medium. Class : Class-9</h3>
//                             <p>Subjects :  Biology, Chemistry, Higher maths, Physics</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                       </div>
//                       <div class="col-md-5">
//                         <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 4 hours ago</p>
//                       </div>
//                   </div>
//               </div>
//               <div class="carousel-item">
//                 <div class="row  align-items-center">
//                     <div class="col-md-7">
//                       <h1 class="tutor">Need a male tutor for class 10 Student</h1>
//                             <h3 class="subject">Category : English Medium. Class : Class-10</h3>
//                             <p>Subjects : Higher maths, Physics</p>
//                             <h6>5 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -9.30 a.m.-10.30 a.m.</p>
//                     </div>
//                     <div class="col-md-5">
//                       <br />
//                              <br />
//                                <p class="Salary">Salary : 4000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 1 hours ago</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="carousel-item">
//               <div class="row  align-items-center">
//                   <div class="col-md-7">
//                     <h1 class="tutor">Need Female tutor for class SSC student</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : SSC</h3>
//                             <p>Subjects :  Biology, Chemistry, Higher maths, Physics</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                   </div>
//                   <div class="col-md-5">
//                     <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 4 hours ago</p>
//                   </div>
//               </div>
//           </div>
//           <div class="carousel-item">
//             <div class="row  align-items-center">
//                 <div class="col-md-7">
//                   <h1 class="tutor">Need a Male tutor For HSC 1st year student</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : HSC-1st YEAR</h3>
//                             <p>Subjects :  English</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                 </div>
//                 <div class="col-md-5">
//                   <br />
//                              <br />
//                                <p class="Salary">Salary : 3500</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 4 hours ago</p>
//                 </div>
//             </div>
//         </div>
//         <div class="carousel-item">
//           <div class="row  align-items-center">
//               <div class="col-md-7">
//                 <h1 class="tutor">Need a Male tutor For HSC 2nd year student</h1>
//                             <h3 class="subject">Category : English Medium. Class :  HSC 2nd year</h3>
//                             <p>Subjects : Chemistry,Physics</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//               </div>
//               <div class="col-md-5">
//                 <br />
//                 <br />
//                   <p class="Salary">Salary : 6000</p>
//                   <br />
//                   <br />
//                   <button class="buy-now-button">More details</button>
//                   <br />
//                   <br/>
//                   <p>Published Time: 4 hours ago</p>
//               </div>
//           </div>
//       </div>
//        <div class="carousel-item">
//                   <div class="row  align-items-center">
//                       <div class="col-md-7">
//                         <h1 class="tutor">Need a Male tutor for Spoken</h1>
//                             <h3 class="subject">Category : Bangla Medium. Class : Class-9</h3>
//                             <p>Subjects :  English</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                       </div>
//                       <div class="col-md-5">
//                         <br />
//                         <br />
//                           <p class="Salary">Salary : 6000</p>
//                           <br />
//                           <br />
//                           <button class="buy-now-button">More details</button>
//                           <br />
//                           <br/>
//                           <p>Published Time: 4 hours ago</p>
//                       </div>
//                   </div>
//               </div>
//               <div class="carousel-item">
//                 <div class="row  align-items-center">
//                     <div class="col-md-7">
//                       <h1 class="tutor">Need a Male tutor for BBA</h1>
//                       <h3 class="subject">Category : Uni Help. Class : BBA-Finance</h3>
//                       <p>Subjects :</p>
//                       <h6>3 Days/Week</h6>
//                       <h2> Dhaka,Aftabnagar</h2>
//                       <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                     </div>
//                     <div class="col-md-5">
//                       <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 4 hours ago</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="carousel-item">
//               <div class="row  align-items-center">
//                   <div class="col-md-7">
//                     <h1 class="tutor">Need Admission preparation tutor for A unit</h1>
//                             <h3 class="subject">Category : Admission Test. Class : Public University Admission Test</h3>
//                             <p>Subjects :Math</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                   </div>
//                   <div class="col-md-5">
//                     <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br />
//                                <br/>
//                                <p>Published Time: 4 hours ago</p>
//                   </div>
//               </div>
//           </div>
//           <div class="carousel-item">
//             <div class="row  align-items-center">
//                 <div class="col-md-7">
//                   <h1 class="tutor">Need a Male tutor for BBA</h1>
//                             <h3 class="subject">Category : Uni Help. Class : BBA-Finance</h3>
//                             <p>Subjects :</p>
//                             <h6>3 Days/Week</h6>
//                             <h2> Dhaka,Aftabnagar</h2>
//                             <p>Other Requirements - tutoring time -5.30 p.m.-8.30 p.m.</p>
//                 </div>
//                 <div class="col-md-5">
//                   <br />
//                              <br />
//                                <p class="Salary">Salary : 6000</p>
//                                <br />
//                                <br />
//                                <button class="buy-now-button">More details</button>
//                                <br/>
//                                <br/>
//                                <p>Published Time: 4 hours ago</p>
//                 </div>
//             </div>
//         </div>
//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="sr-only">Next</span>
//             </a>
//           </div>
//           </div>
    
//         <div class="copy">
//         <div class="container">
//           <div class="row  contact-info">
//             <div class="col-md-3 crs">
//                <div>
//                <h6 class="contact"><FontAwesomeIcon icon={faPhone} /> Contact</h6>
//                <h6 class="phone">+8801521-502713</h6>
//                <div class="location">
//                   <div class="map">
//                   <div class="mail"><a href="https://mail.google.com/mail/u/0/#inbox"><i><FontAwesomeIcon icon={faMailBulk} /></i></a></div>
//                   <samp>Mail</samp>
//                   </div>
//                   <div class="map">
//                   <div class="mail"><a href="https://www.google.com.bd/maps/@23.7906583,90.4224393,12.25z"><i><FontAwesomeIcon icon={faMapMarker} /></i></a></div>
//                   <samp>Location</samp>
//                   </div>
//                </div>
//                </div>
//             </div>
            
            
//             <div class="col-md-3 terms">
//               <h2>Terms</h2>
//               <h6>Graphic Design</h6>
//               <h6>Web Design</h6>
//               <h6>Business</h6>
//               <h6>Marketing</h6>
//               <h6>Engineering</h6>
//             </div>
//             <div class="col-md-2 useful">
//               <h2>Useful Link</h2>
//               <h6>Graphic Design</h6>
//               <h6>Web Design</h6>
//               <h6>Business</h6>
//               <h6>Marketing</h6>
//               <h6>Engineering</h6>
//             </div>
//           </div>
//         </div>
//        <div class="Social">
//        <h1 >Social media</h1>
//        </div>
      
//        <div class="iconlogo">
//          <div class="wrapper">
//          <div class="button">
//              <div class="icon"><a href="https://web.facebook.com/?_rdc=1&_rdr"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></div>
//              <samp>facbook</samp>
//              </div>
//              <div class="button">
//              <div class="icon"><a href="https://www.instagram.com/_a_i___sagor___/"><i><FontAwesomeIcon icon={faInstagram} /></i></a></div>
//              <samp>instgram</samp>
//              </div>
//              <div class="button">
//              <div class="icon"><a href="https://github.com/Azadul-Islam"><i><FontAwesomeIcon icon={faTwitter} /></i></a></div>
//              <samp>twitter</samp>
//              </div>
//              <div class="button">
//              <div class="icon"><a href="https://github.com/Azadul-Islam"><i><FontAwesomeIcon icon={faGithub} /></i></a></div>
//              <samp>github</samp>
//              </div>
//          </div>
//        </div>

//       <br />
      
//       <footer>
//         <div class="footer">
//           <div class="row">
//             <div class="copy">
//               <p>Copyright ©2021 tuition finder</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       </div>
//      </div> 


    
     


             
                        
                               
                               
                                
        

        


       
           
      
      
    );
};

export default Header;