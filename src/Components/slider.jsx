import React from 'react';
import Slider from "react-slick";
import "../assets/css/slick.min.css";
import sliderImg01 from "../assets/images/slider/person.png";
import { 
FaLongArrowAltLeft, 
FaLongArrowAltRight,
FaLongArrowAltDown
 } from "react-icons/fa";
import { Link } from 'react-scroll';
export default function slider() {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{...style}}
                onClick={onClick}
            >
            <FaLongArrowAltLeft/>
            </div>
        );
    }
    const SampleNextvArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style}}
                onClick={onClick}
            >
            <FaLongArrowAltRight/>
            </div>
        );
    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        padding: 20,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextvArrow/>
    }
    return (
        <div className="container"> 
            <div className="slider-area">
                <div className="slider-activator">
                    <Slider {...settings}>
                        <div className="slide-item">
                            <div className="container pt-130 pl-xl-0 px-0">
                                <div className="row m-0">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                        <div className="slider-left">
                                            <div className="name">
                                                <h1>Leila <br /> Farias<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.instagram.com/leilafariasweb/" target="_blank">Instagram</a> | <a
                                                    href="https://www.linkedin.com/in/leilafarias-dev/" target="_blank">LinkedIn</a> <br />
                                                <a href="https://github.com/LEILAFARIAS-DVL" target="_blank">GitHub</a> | <a
                                                    href="https://twitter.com/leilafariasdev/" target="_blank">Twitter</a>
                                            </div>
                                            <div className="slider-cta">
                                                <Link 
                                                to="contact" 
                                                className="ct-btn" 
                                                smooth={true} 
                                                duration={2000} 
                                                activeClass="active" 
                                                spy={false} 
                                                offset={5}>Contact me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img className="img-fluid" src={sliderImg01} alt="leila farias"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>UI/UX Designer,<br />Frontend Web <br /> Developer</h2>
                                                <p className="pr-20">
                                                    Welcome to my digital world!
                                                    I'm a frontend developer specialized in UI/UX design,
                                                    passionate about crafting engaging and functional digital
                                                    experiences. With skills in HTML, CSS, and JavaScript,
                                                    I'm dedicated to turning concepts into attractive and intuitive
                                                    interfaces. Explore my portfolio and discover how I can elevate
                                                    user experience in your projects.</p>
                                            </div>
                                            <div className="intro-button">
                                                <Link
                                                    to="services"
                                                    className="btn-animation mr-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}> Learn more &nbsp; <i><FaLongArrowAltDown /></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="container pt-130 pl-xl-0 px-0">
                                <div className="row m-0">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                        <div className="slider-left">
                                            <div className="name">
                                                <h1>Leila <br /> Farias<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.instagram.com/leilafariasweb/" target="_blank">Instagram</a> | <a
                                                    href="https://www.linkedin.com/in/leilafarias-dev/" target="_blank">LinkedIn</a> <br />
                                                <a href="https://github.com/LEILAFARIAS-DVL" target="_blank">GitHub</a> | <a
                                                    href="https://twitter.com/leilafariasdev/" target="_blank">Twitter</a>
                                            </div>
                                            <div className="slider-cta">
                                                <Link
                                                    to="contact"
                                                    className="ct-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}>Contact me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img className="img-fluid" src={sliderImg01} alt="leila farias" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>UI/UX Designer,<br />Frontend Web <br /> Developer</h2>
                                                <p className="pr-20">
                                                    I'm a web developer specializing in HTML, CSS, JavaScript,
                                                    and ReactJS, dedicated to crafting innovative digital solutions.
                                                    With a focus on user experience, I'm constantly honing my
                                                    skills in UI/UX design to deliver captivating and functional
                                                    interfaces. Explore my portfolio and discover how I can
                                                    turn your ideas into digital reality.</p>
                                            </div>
                                            <div className="intro-button">
                                                <Link
                                                    to="services"
                                                    className="btn-animation mr-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}> Learn more &nbsp; <i><FaLongArrowAltDown /></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="container pt-130 pl-xl-0 px-0">
                                <div className="row m-0">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                        <div className="slider-left">
                                            <div className="name">
                                                <h1>Leila <br /> Farias<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.instagram.com/leilafariasweb/" target="_blank">Instagram</a> | <a
                                                    href="https://www.linkedin.com/in/leilafarias-dev" target="_blank">LinkedIn</a> <br />
                                                <a href="https://github.com/LEILAFARIAS-DVL" target="_blank">GitHub</a> | <a
                                                    href="https://twitter.com/leilafariasdev" target="_blank">Twitter</a>
                                            </div>
                                            <div className="slider-cta">
                                                <Link
                                                    to="contact"
                                                    className="ct-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}>Contact me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img className="img-fluid" src={sliderImg01} alt="leila farias" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>UI/UX Designer,<br />Frontend Web <br /> Developer</h2>
                                                <p className="pr-20">
                                                    Web Design & Mobile/Web APIs: I specialize in web design and
                                                    mobile/web API development. With extensive experience in
                                                    crafting engaging and functional interfaces, as well as
                                                    implementing robust APIs for various platforms,
                                                    I'm equipped to tackle diverse challenges in the digital
                                                    realm. Working remotely, I have the flexibility to collaborate
                                                    on projects from anywhere in the world. Get in touch with
                                                    me to discuss hiring opportunities and partnerships
                                                    that can drive the success of your business.</p>
                                            </div>
                                            <div className="intro-button">
                                                <Link
                                                    to="services"
                                                    className="btn-animation mr-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}> Learn more &nbsp; <i><FaLongArrowAltDown /></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
