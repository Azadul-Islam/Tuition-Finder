import React from 'react';
import img1 from '../../Images/student1.jpg';
import img2 from '../../Images/student2.jpg';
import img3 from '../../Images/student3.jpg';
import img4 from '../../Images/student4.jpg';
import img6 from '../../Images/home.jpg';
import './Need.css';

const Need = () => {
    return (

        <div class="container">
            <div class="container-wrapper starter-template-none container-wrapper-lp">
                <div class="text-center">

                    <div class="row ">
                        <div class="log-home">
                            <a href="/" class="home-sprite-none">
                                <span class="log">
                                    <img src={img6} class="img-responsive home-sprite home-logo-image" alt="Home Tutor Site logo" width="1" height="1" />
                                </span>
                                <h1 class="log-title">
                                    Home Tutor Site
                                    <span class="log-caption">Learn & Achieve!!</span>
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div class="logoCaption">
                        <i >We Help Students & Tutors To find Each Others</i>
                    </div>



                    <div class="row">

                        <div class="full-width full-width-lp">
                            <div class="right-common-content lp-content">


                                <div class="row">

                                    <div class="col-md-5 col-md-push-7 col-">
                                        <div id="HomeTutorOrStudentParentInteractPanel" class="form-horizontal contact-form lp-form">

                                            <div class="hidden-xs"><span class="arrow-hand"><img src="https://static.hometutorsite.com/content/images/landing/arrow-hand-red.png" /></span></div>
                                            <div><span class="ff">FREE Registration</span></div>
                                            <div id="rightSideForm"></div>
                                            <form action="" class="form-validation" data-ajax="true" data-ajax-begin="LandingAjaxBegin" data-ajax-method="POST" data-ajax-mode="replace" data-ajax-success="TrackGoogleAdwordsConversions" data-ajax-update="#rightSideForm" id="landing-page-form" method="post">
                                                <input name="__RequestVerificationToken" type="hidden" value="eVMxeoFkPC7Cj_91hJbLjOFEq7fhi0qauJyTgTkBqreNlqttDHO45xIAQz-JvXqGVGPzUd5mUufk1XirYySn50yY06lhDbRfW2H4Epc1-KI1" />
                                                <input type="hidden" id="online" name="online" value="false" />
                                                <input type="hidden" id="city" name="city" value="false" />
                                                <input type="hidden" id="courseSubjectOrCategory" name="courseSubjectOrCategory" value="false" />
                                                <input type="hidden" id="utm_campaign" name="utm_campaign" value="false" />
                                                <input type="hidden" id="utm_source" name="utm_source" value="false" />
                                                <input type="hidden" id="utm_medium" name="utm_medium" value="false" />
                                                <input type="hidden" id="utm_content" name="utm_content" value="false" />
                                                <input type="hidden" id="utm_term" name="utm_term" value="false" />
                                                <br />

                                                <div class="">
                                                    <div class="form-control-lp">
                                                        I am a &nbsp;
                                                        <label class="rad studentStyle">
                                                            <input type="radio" id="radioStudentLanding" name="UserTypeLanding" class="radioRegHeader" value="student" checked />
                                                            <i></i>
                                                            Student/Parent
                                                            &nbsp;
                                                        </label>
                                                        <label class="rad tutorStyle">
                                                            <input type="radio" id="radioTutorLanding" name="UserTypeLanding" class="radioRegHeader" value="tutor" />
                                                            <i></i>
                                                            Tutor
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-group-lp">
                                                    <div class="">
                                                        <div class="input-group margin-bottom-sm">
                                                            <span class="input-group-addon">
                                                                <span class="common-sprite-opt contact-name"></span>
                                                            </span>
                                                            <input id="Name" name="Name" class="form-control input-lg  validate[required,custom[onlyLetterSp]]" type="text" placeholder="Name"
                                                                data-errormessage-value-missing="Please enter your name." required></input>
                                                        </div>
                                                        <p class="small text-muted">We don't misuse your phone number </p>
                                                    </div>
                                                </div>
                                                <div class="form-group-lp">
                                                    <div class="">
                                                        <div class="input-group margin-bottom-sm">
                                                            <span class="input-group-addon input-mail-block">
                                                                <span class="common-sprite-opt contact-details-phone"></span>
                                                            </span>

                                                            <input type="tel" id="Mobile" name="Mobile" class="form-control lp-phone-number input-lg  validate[required,custom[phone],funcCall[validateIndianMobileNumber]]" placeholder="Mobile Number"
                                                                data-errormessage-value-missing="Please enter mobile number." required></input>

                                                        </div>
                                                        <p class="small text-muted">We don't misuse your phone number </p>
                                                    </div>
                                                </div>
                                                <div class="form-group-lp" id="tuition-need-lp">
                                                    <div class="">
                                                        <div class="input-group margin-bottom-sm">
                                                            <span class="input-group-addon input-pincode-block">
                                                                <span class="common-sprite-opt course-icon"></span>
                                                            </span>
                                                            <input id="Email" name="Email" class="form-control input-lg validate[custom[email]]" type="email" placeholder="Enter Email"
                                                                data-errormessage-value-missing="Please enter your email." required></input>
                                                        </div>
                                                        <p class="small text-muted">We don't misuse your email.</p>
                                                    </div>
                                                </div>
                                                <div class="form-group-lp" id="tuition-need-lp">
                                                    <div class="">
                                                        <div class="input-group margin-bottom-sm">
                                                            <span class="input-group-addon input-pincode-block">
                                                                <span class="common-sprite-opt course-icon"></span>
                                                            </span>
                                                            <input id="Course" name="Course" class="form-control input-lg  validate[required]" type="text" placeholder="Enter Course"
                                                                data-errormessage-value-missing="Please enter course. Eg. Class I CBSE or Class X or B.Tech etc." required></input>
                                                        </div>
                                                        <p class="small text-muted">eg. Class I CBSE or Class X or B.Tech etc.</p>
                                                    </div>
                                                </div>
                                                <div class="form-group-lp" id="subject-lp">
                                                    <div class="">
                                                        <div class="input-group margin-bottom-sm">
                                                            <span class="input-group-addon input-pincode-block">
                                                                <span class="common-sprite-opt subject-icon"></span>
                                                            </span>
                                                            <input id="Subject" name="Subject" class="form-control input-lg  validate[required]" type="text" placeholder="Enter Subjects"
                                                                data-errormessage-value-missing="Please enter subjects. Eg. maths, physics or all subjects etc." required></input>
                                                        </div>
                                                        <p class="small text-muted">eg. maths, physics or all subjects etc.</p>
                                                    </div>
                                                </div>
                                                <div class="form-group-lp">
                                                    <div class="">
                                                        <div id="submitButtonContainer" class="text-center">
                                                            <button id="btn-signup-lp" type="submit" class="btn btn-info btn-orange btn-lg">Get Free Demo Class</button>


                                                        </div>

                                                    </div>

                                                </div>
                                                <p class="text-center small">By signing up you agree to our <a href="/home/termsandconditions">Terms and Conditions</a></p><br />
                                                <p class="text-center medium">Already a member? <a href="/account/login">Login</a></p>

                                            </form>



                                        </div>
                                    </div>
                                    <div class="col-md-7 col-md-pull-5">
                                        <div id="students-info-lp" class="text-center">
                                            <h2>Find Best Home Tutors / Online Tutors.</h2>

                                            <img src="https://static.hometutorsite.com/content/images/landing/student-reg-steps.jpg" class="img-responsive" />
                                            <br />
                                            <div class="text-center"><img src="https://www.oracle.com/a/ocom/img/cw58-ovum-student-planning.jpg" class="img-responsive" /></div>
                                            <br />
                                            <p class="lp-lead text-center lp-lead1">
                                                Home Tuition is the #1 secret of <b>ACADEMIC EXCELLENCE</b>

                                            </p>
                                        </div>
                                    </div>
                                    {/* <div id="tutors-info-lp" class="text-center">
                                        <h2>Find Home Tuition / Online Tuition Part Time Jobs.</h2>
                                        <img src="https://static.hometutorsite.com/content/images/landing/tutor-reg-steps.jpg" class="img-responsive" />

                                        <br />
                                        <div class="text-center"><img src="https://static.hometutorsite.com/content/images/landing/tuition-image.jpg" class="img-responsive" /></div>
                                        <br />
                                        <p class="lp-lead text-center lp-lead1">
                                            You focus on teaching, We focus on finding students for you.

                                        </p>

                                    </div> */}

                                    <br />
                                    <div class="row">

                                        <div class="col-md-12 lp-testimonial">
                                            <h3>Testimonials</h3>

                                            <div id="students-testimonials-lp">
                                                <div class="col-md-4">
                                                    <div class="home-testimonial-block">

                                                        <div class="pull-left user-pic">

                                                            <img src={img1} class="img-responsive home-common-images-sprite1 home-testimonial-student2 img-circle img-thumbnail" alt="Home Tutor Site testimonial" width="1" height="1" />
                                                        </div>
                                                        <div class="testimonial-content">
                                                            <p>
                                                                <em>"Great website! We found a caring and humble tutor for our daughter. She likes studying with the tutor."</em>
                                                            </p>
                                                            <p class="by-name">— Fathema</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="col-md-4">
                                                    <div class="home-testimonial-block">

                                                        <div class="pull-left user-pic">
                                                            <img src={img2} class="img-responsive home-common-images-sprite1 home-testimonial-student3 img-circle img-thumbnail" alt="Home Tutor Site testimonial" width="1" height="1" />
                                                        </div>
                                                        <div class="testimonial-content">
                                                            <p>
                                                                <em>"I used to struggle with maths. After getting a home tutor I am doing maths very easily."</em>
                                                            </p>
                                                            <p class="by-name">— Sadiya</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-4">

                                                    <div class="home-testimonial-block">
                                                        <div class="pull-left user-pic">
                                                            <img src={img3} class="img-responsive home-common-images-sprite1 home-testimonial-student4 img-circle img-thumbnail" alt="Home Tutor Site testimonial" width="1" height="1" />
                                                        </div>
                                                        <div class="testimonial-content">
                                                            <p>
                                                                <em>"After posting my learning requirement, I got a good tutor within a day. Excellent Service!"</em>
                                                            </p>
                                                            <p class="by-name">— Sagor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="tutors-testimonials-lp">
                                                <div class="col-md-4">
                                                    <div class="home-testimonial-block">
                                                        <div class="pull-left user-pic">
                                                            <img src={img4} class="img-responsive home-common-images-sprite1 home-testimonial-tutor1 img-circle img-thumbnail" alt="Home Tutor Site testimonial" width="1" height="1" />
                                                        </div>
                                                        <div class="testimonial-content">
                                                            <p>
                                                                <em>"Its a good channel for getting part time tuition jobs. I started earning on my own!"</em>
                                                            </p>
                                                            <p class="by-name">— Sayma</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer" class="footer-lp">
                <div id="footer-inner">
                    <div class="container credit">
                        <p class="muted credit">
                            &copy; Copyright <a href="#">Home Tutor Site </a>All rights reserved<span class="vb"></span><br class="footer-br" />
                            <span class="privacy-policy"><a href="/home/privacypolicy">Privacy Policy</a><span class="privacy-devider">|</span><a href="/home/termsandconditions">Terms & Conditions</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>








    );
};

export default Need;