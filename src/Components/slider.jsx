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
                                                <h1>Jack <br /> Harper<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.instagram.com/tortoiz">Instagram</a> | <a
                                                    href="https://www.linkedin.com/in/shailendra-bhardwaj-4539611a0/">LinkedIn</a> <br />
                                                <a href="https://behance.net/tortoizthemes">Behance</a> | <a
                                                    href="https://dribbble.com/TortoizTeam">Dribbble</a>
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
                                            <img className="img-fluid" src={sliderImg01} alt="jack harper"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>UI/UX Designer,<br />Full Stack Web <br /> Developer</h2>
                                                <p className="pr-20">
                                                    Lorem ipsum dolor sit amet, consectetur adip
                                                    cing elit, sed do eiusmod tempor incidid
                                                    unt ut labore et dolorepore magna aliqua.</p>
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
                                                <h1>Jack <br /> Harper<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.instagram.com/tortoiz">Instagram</a> | <a
                                                    href="https://www.linkedin.com/in/shailendra-bhardwaj-4539611a0/">LinkedIn</a> <br />
                                                <a href="https://behance.net/tortoizthemes">Behance</a> | <a
                                                    href="https://dribbble.com/TortoizTeam">Dribbble</a>
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
                                            <img className="img-fluid" src={sliderImg01} alt="jack harper" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>UI/UX Designer,<br />Full Stack Web <br /> Developer</h2>
                                                <p className="pr-20">
                                                    Lorem ipsum dolor sit amet, consectetur adip
                                                    cing elit, sed do eiusmod tempor incidid
                                                    unt ut labore et dolorepore magna aliqua.</p>
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
                                                <h1>Jack <br /> Harper<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <a href="https://www.instagram.com/tortoiz">Instagram</a> | <a
                                                    href="https://www.linkedin.com/in/shailendra-bhardwaj-4539611a0/">LinkedIn</a> <br />
                                                <a href="https://behance.net/tortoizthemes">Behance</a> | <a
                                                    href="https://dribbble.com/TortoizTeam">Dribbble</a>
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
                                            <img className="img-fluid" src={sliderImg01} alt="jack harper" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>UI/UX Designer,<br />Full Stack Web <br /> Developer</h2>
                                                <p className="pr-20">
                                                    Lorem ipsum dolor sit amet, consectetur adip
                                                    cing elit, sed do eiusmod tempor incidid
                                                    unt ut labore et dolorepore magna aliqua.</p>
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
