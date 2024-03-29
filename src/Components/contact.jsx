import React from 'react';
import {
FaEnvelope, 
FaPhone,
FaSkype,
FaTwitter,
FaDribbble,
FaFacebookF } from "react-icons/fa";
import SectionTitle from "./section_title";

export default function Contact() {
    return (
        <div className="contact-area section-ptb" id="contact">
            <div className="container">
                <SectionTitle
                    title="CONTACT US"
                    subTitle="Ways To Contact Me"
                    desc="Feel free to contact me via phone, email, or WhatsApp for inquiries or collaboration."
                />
            </div>
            <div className="container mt-45">
                <div className="row md-justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaEnvelope/></i>
                            </div>
                            <a className="btn-animation" href="mailto:leilafariasdev@gmail.com?subject=Ask
                             some question&body=Can I ask some question%3F">Message Mail</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaPhone/></i>
                            </div>
                            <a className="btn-animation" href="https://api.whatsapp.com/send?phone=31620741573"
                               target="_blank">+31 6 20741573</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaSkype/></i>
                            </div>
                            <a className="btn-animation" href="https://join.skype.com/invite/KJVTmd4PZ65W"
                               target="_blank">live:skype</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaTwitter /></i>
                            </div>
                            <a className="btn-animation" href="https://themeforest.net/user/hempelleila"
                               target="_blank">@leila</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaDribbble /></i>
                            </div>
                            <a className="btn-animation" href="https://open.spotify.com/playlist/0bch9HLT6d5CF9mO2VXqJq?si=75343824c61c4a4b"
                               target="_blank">Listening</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaFacebookF /></i>
                            </div>
                            <a className="btn-animation" href="https://www.facebook.com/profile.php?id=61556669963294" target="_blank">Leila Farias</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
