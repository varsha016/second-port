import React from 'react'
import officialAvatar from "./images/officialAvatar.jpg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import lin from "./images/lin.png"
import gitlogo from "./images/gitlogo.png"
import "./about.css"




export default function About() {
    const resumeUrl = "https://drive.google.com/file/d/1b31GgQtsGSTi3KKP63axHvDdOfHa_Bdu/view?usp=drivesdk"
    const lindinUrl = "https://www.linkedin.com/in/varsha-harkal-b851b623a/"
    const githubUrl = "https://github.com/varsha016"
    return <>


        <div className='aboutImage'>
            <div className='flex justify-between text-secondary'>
                <h4><i className="bi bi-person-circle">V.G.Harkal</i></h4>
                <div className='flex fs-5'>
                    <span className='mr-4'><Link className='nav-link' to="/project" >project</Link></span>
                    <span className='mr-4'><Link className='nav-link' to="/contact" >Contact</Link></span>
                    <span className='mr-4'><Link className='nav-link' to="/" >Home</Link></span>
                </div>

            </div>


            <Container className='bg-dark mb-5 mt-5 text-light'  >

                <Row >
                    <Col sm={{ span: 6, offset: 3, }} >
                        <div className=' d-flex justify-content-between gap-4 mt-4 mb-4  '>

                            <marquee direction="up" scrollamount="3" behavior="alternate"  >

                                <img src={officialAvatar} alt="avatar" className=' img-fluid rounded-pill' />
                            </marquee>

                            <div>
                                <h1 style={{ textDecoration: "underline", fontFamily: "fantasy", fontSize: "60px", boxShadow: "inherit" }}>ABOUT ME</h1>
                                <div>
                                    <p style={{ fontFamily: "sans-serif", fontSize: "20px", }}>Varsha Harkal</p>
                                    <p style={{ wordSpacing: "3px", lineHeight: "30px" }}>I am varsha harkal , I have one years experience of react-js,
                                        In this period, i learn HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT-BOOTSTRAP, and others
                                        skills.I have good knowlange of programming skills,
                                        so i think i am right fit  position of  FRONTEND developer  </p>

                                    <button className='btn btn-outline-light border-pill h-25' >
                                        <span>Resume</span>
                                        <marquee direction="down" height="30" scrollamount='1' behavior="alternate"><i className="bi bi-arrow-down-circle-fill fs-3 text-secondary pl-5"><a href={resumeUrl}></a></i></marquee>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr className='text-info' />
                        <div className='d-flex justify-content-center gap-3 mb-5'>
                            <span>
                                <a href={lindinUrl}>
                                    <img src={lin} alt="" height={40} width={40} />
                                </a>
                            </span>
                            <span>
                                <a href={githubUrl}>

                                    <img src={gitlogo} alt="" height={40} width={40} />
                                </a>


                            </span>
                        </div>



                    </Col>
                </Row>
                <Row className='flex justify-space-x-4 text-cenetr'>
                    <Col sm={4}>
                        <h4 className='text-center'>Phone</h4>
                        <p className='text-center'><i className="bi bi-phone text-blue-700  fs-4 p-2"></i>9623067667</p>

                    </Col>
                    <Col sm={4}>
                        <h4 className='text-center'>Email</h4>
                        <p className='text-center'><i className="bi bi-envelope text-blue-700 fs-4 p-2"></i>vharkal16@gmail.com</p>


                    </Col>
                    <Col sm={4}>
                        <p className='gap-4 text-center'><i className="bi bi-instagram text-blue-700 fs-4 p-2"></i>Instagram</p>
                        <p className='gap-4 text-center'><i className="bi bi-facebook text-blue-700 fs-4 p-2"></i>Facebook</p>
                    </Col>


                </Row>


            </Container>



        </div>




    </>
}
