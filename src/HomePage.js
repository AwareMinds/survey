import React from "react";
import { Element } from "react-scroll";

export const HomePage = () => {
    return (
        <div style={{ paddingTop: 70, backgroundColor: "#ffe9d1" }}>
            <Element name="Section1" className="element section1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 d-flex align-items-center">
                            <div>
                                <div style={{ fontSize: 50, color: '#4a4a4a' }}>
                                    Mental Health Matters
                                </div>
                                <h6 style={{ color: '#52A447', paddingTop: 80, }}>
                                    There is hope, even when your brain tells you
                                    there isn't." - John Green
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 section1_side2">
                            <div>
                                {/* Section 2 */}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: 50, paddingBottom: 50 }}>
                        <div className="col-md-3 col-12 d-flex align-items-center">
                            <div>
                                <div style={{ fontSize: 30, color: '#4a4a4a', backgroundColor: '#41dc8e', borderRadius: 30, padding: 20 }}>
                                    Lets Talk about Mental Health!
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-12">
                            <p style={{ fontSize: 20, color: '#4a4a4a' }}>
                                Mental health issues are becoming a growing concern around the world, just
                                like physical health. In India itself, millions of people experience these
                                challenges. Unfortunately, many don't seek help due to a lack of understanding
                                about mental illness signs, fear of judgment, or simply not knowing where to
                                turn. These negative attitudes towards mental health problems can make things
                                worse for those struggling.
                            </p>
                            <p style={{ fontSize: 20, color: '#4a4a4a' }}>
                                <b>We can change this!</b> By raising awareness and reducing the stigma
                                surrounding mental health, we can create a more inclusive society where
                                everyone feels supported and has access to the help they need.
                            </p>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: 50, paddingBottom: 50 }}>
                        <div className="col-md-3 col-12">
                            <div>
                                <div style={{ fontSize: 30, color: '#4a4a4a', backgroundColor: '#41dc8e', borderRadius: 30, padding: 20 }}>
                                    What is Mental Health Awareness?
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-12 d-flex align-items-center">
                            <p style={{ fontSize: 20, color: '#4a4a4a' }}>
                                Mental health awareness involves knowledge of mental illnesses, their
                                symptoms, available treatment options, and the benefits of those
                                treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="Section2" className="element">
                <div className="container">
                    <div style={{ fontSize: 50, color: '#4a4a4a' }}>
                        About Research
                    </div>
                    <p style={{ fontSize: 20, color: '#4a4a4a', paddingTop: 50, }}>
                        Mental Health Awareness Analysis</p>
                    <p style={{ fontSize: 20, color: '#4a4a4a' }}>

                        Lack of awareness about mental health contributes to the rising number of mental illness cases.
                        Social isolation, financial worries, and uncertainty about the future contributed to these mental health
                        challenges. Understanding how people perceive mental health will help us develop targeted
                        educational programs to reduce stigma and misconceptions.</p>
                    <p style={{ fontSize: 20, color: '#4a4a4a' }}>
                        The survey consists of three questionnaires to assess respondents' understanding of mental health,
                        attitudes towards community care and positive and negative beliefs of individuals with different
                        cultural characteristics toward mental illness.
                    </p>
                    <div style={{ fontSize: 50, color: '#4a4a4a', marginTop: 50 }}>
                        Our Approach
                    </div>
                    <p style={{ fontSize: 20, color: '#4a4a4a', paddingTop: 50, }}>
                        Use standardized research methodology to develop a decision support model to help mental health
                        professionals design interventions.
                    </p>
                    <div style={{ fontSize: 50, color: '#4a4a4a', marginTop: 50 }}>
                        About Us
                    </div>
                    <p style={{ fontSize: 20, color: '#4a4a4a', paddingTop: 50, }}>
                        The team at the Vinod Gupta School of Management, IIT Kharagpur, is conducting research on decision support modelling for
                        mental healthcare in partnership with the Central Institute of Psychiatry Ranchi.
                    </p>
                    <p style={{ fontSize: 20, color: '#4a4a4a' }}>
                        You are cordially invited to partake in this research project. You are welcome to ask questions at any point during the
                        discussion.
                    </p>
                </div>
            </Element>
            <Element name="Section3" className="element">
                <div className="container">
                    <div style={{ fontSize: 50, color: '#4a4a4a', marginTop: 50 }}>
                        Our Team
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12" style={{paddingTop: 50}}>
                            <div style={{ fontSize: 20 }}>Dr M Vimala Rani</div>
                            <div style={{ fontSize: 16 }}>
                                Assistant Professor<br />
                                Vinod Gupta School of Management<br />
                                Indian Institute of Technology, Kharagpur
                            </div>
                            <a href="https://www.iitkgp.ac.in/department/BM/faculty/bm-vimala">
                                Profile
                            </a><br/>
                            <a href="https://www.linkedin.com/in/dr-vimala-rani-m-23b7a0101/">
                                LinkedIn
                            </a>
                        </div>
                        <div className="col-md-6 col-12" style={{paddingTop: 50}}>
                            <div style={{ fontSize: 20 }}>Dr. Basudeb Das</div>
                            <div style={{ fontSize: 16 }}>
                                Professor of Psychiatry<br />
                                Central Institute of Psychiatry, Ranchi
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12" style={{paddingTop: 50}}>
                            <div style={{ fontSize: 20 }}>Ms Antara Ravindra Sarode</div>
                            <div style={{ fontSize: 16 }}>
                                Research Scholar<br />
                                Vinod Gupta School of Management<br />
                                Indian Institute of Technology, Kharagpur<br />
                                Contact: +91 8698487390<br />
                                Email: antaraasarode2@gmail.com
                            </div>
                            <a href="https://www.linkedin.com/in/antarasarode-24/">
                                LinkedIn
                            </a>
                        </div>
                        <div className="col-md-6 col-12" style={{paddingTop: 50}}>
                            <div style={{ fontSize: 20 }}>Dr. Umesh S.</div>
                            <div style={{ fontSize: 16 }}>
                                Associate Professor of Psychiatry<br />
                                Central Institute of Psychiatry, Ranchi
                            </div>
                            <a href="https://cipranchi.nic.in/?p=facultydetails&facid=70">
                                Profile
                            </a><br/>
                            <a href="linkedin.com/in/dr-umesh-s-477a7198">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};