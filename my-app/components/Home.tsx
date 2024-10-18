import React, { useEffect, useRef, useState } from 'react';
import Typed from "typed.js"; // Import Typed.js
import './Hhom.css';
import aboutImage from '../assets/About001.jpg';
import aboutImage2 from '../assets/About002.png';
import portfolio001 from '../assets/portfolio 001.jpg';
import portfolio002 from '../assets/portfolio 002.jpg';
import portfolio003 from '../assets/portfolio 003.jpg';
import portfolio004 from '../assets/portfolio 004.jpg';
import portfolio005 from '../assets/portfolio 005.jpg';
import portfolio006 from '../assets/portfolio 006.jpg';

const Hhom = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    aboutRef.current.classList.add('fade-in');
                } else {
                    aboutRef.current.classList.remove('fade-in');
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(aboutRef.current);

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    const carouselTrackRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

    const scrollLeft = () => {
        const track = carouselTrackRef.current;
        const newPosition = Math.max(scrollPosition - track.clientWidth, 0); // Prevent scrolling past start
        track.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
    };

    const scrollRight = () => {
        const track = carouselTrackRef.current;
        const maxScroll = track.scrollWidth - track.clientWidth; // Prevent scrolling past the end
        const newPosition = Math.min(scrollPosition + track.clientWidth, maxScroll);
        track.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
    };


    const typedRef = useRef(null);
    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed(typedRef.current, {
            strings: ["A Personalized Experience.", "Your Dream Website", "Curated Seo."],
            typeSpeed: 150,
            backSpeed: 120,
            loop: true,
        });
        // Clean up the Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <div className="background"></div> {/* Fixed background */}

            <div className="Hhom-content">
                <h1>TRANSFORM YOUR BRAND<br />WITH A STUNNING NEW DESIGN</h1>
            </div>
            <div className="about-container" ref={aboutRef}>
                <div className="about-content">
                    <div className="body">
                        <h3>DESIGN YOUR BEST INSPIRATION</h3>
                        <h2>HI, I’M HIND</h2>
                        <h4>
                            I am a 24-year-old Freelancer in social media content creation and strategy.
                            I graduated from ISEFAC PARIS private school with a degree in project management, event management, public relations, and communication.
                            I am extremely passionate and driven about my job.
                            Here's a glimpse of what I've done in terms of communication and graphic content.
                        </h4>
                    </div>
                    <div className="img">
                        <img src={aboutImage} alt="About Hind" />
                    </div>
                </div>

                <div className="about-content2">
                    <div className="img2">
                        <img src={aboutImage2} alt="About Hind" />
                    </div>
                    <div className="body2">
                        <div className="hakko">
                            <h3>e s t 2 0 2 3</h3>
                        </div>
                        <button
                            className="work-button2"
                            onClick={() =>
                                window.scrollTo({
                                    top: document.getElementById("portfolio").offsetTop,
                                    behavior: "smooth",
                                })
                            }
                        >
                            Portfolio
                        </button>
                    </div>
                </div>

                <div className="carousel">
                    <div className="carousel-track" ref={carouselTrackRef} style={{ width: 'fit-content', height: 'auto' }}>
                        <a href="/portfolio" target="_self" className="carousel">
                            <div className="ssg-slider filmstrip flickity-enabled is-draggable" style={{ opacity: 1 }} tabIndex="0">
                                <div className="flickity-viewport" style={{ touchAction: 'pan-y' }}>
                                    <div className="flickity-slider">
                                        <img src={portfolio001} alt="Client 1" />
                                        <img src={portfolio002} alt="Client 2" />
                                        <img src={portfolio003} alt="Client 3" />
                                        <img src={portfolio004} alt="Client 4" />
                                        <img src={portfolio005} alt="Client 5" />
                                        <img src={portfolio006} alt="Client 6" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="carousel-buttons">
                        <button className="carousel-button" onClick={scrollLeft}>&#9664;</button>
                        <button className="carousel-button" onClick={scrollRight}>&#9654;</button>
                    </div>

                </div>

                <div className="about-content3">
                    <div className="about-content-body">
                        <h3>DESIGN YOUR BEST INSPIRATION</h3>
                        <h2><span className="about-content-body-auto-type" ref={typedRef}> HI, I’M HIND</span></h2>
                    </div>
                </div>

                <div className="Shop">
                    <button
                        className="Shop-button"
                        onClick={() =>
                            window.scrollTo({
                                top: document.getElementById("portfolio").offsetTop,
                                behavior: "smooth",
                            })
                        }
                    >
                        Shop Templates
                    </button>

                    <div className="Shop-imgs">
                        <div className="Shop-item">
                            <a href="/portfolio" className="Shop-img-link">
                                <img src={portfolio001} alt="Template 1" />
                            </a>
                            <h3>Bougie Bleue Candle Template</h3>
                        </div>
                        <div className="Shop-item">
                            <a href="/portfolio" className="Shop-img-link">
                                <img src={portfolio002} alt="Template 2" />
                            </a>
                            <h3>Bow Photography Template</h3>
                        </div>
                        <div className="Shop-item">
                            <a href="/portfolio" className="Shop-img-link">
                                <img src={portfolio003} alt="Template 3" />
                            </a>
                            <h3>Waimea Essence Photography Template</h3>
                        </div>
                    </div>
                </div>


                <div className="about-content">
                    <div className="body">
                        <h2>WHAT CAN MY WEBSITES DO FOR YOU?</h2>
                        <h3>SEO</h3>
                        <p>
                            SEO, or Search Engine Optimization, is crucial for online visibility.
                            AKA ranking higher on Google when someone searches for your product or
                            service. Great SEO will enhance your website's chances of obtaining
                            organic traffic. Let's improve the opportunity of being found by potential
                            customers while boosting your brand's overall visibility and credibility
                            online.
                        </p>
                        <div className="indicator-dots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>


                <div className="testimonials-section">
                    <div className="image-grid">
                        <div className="image-container">
                            <img src={portfolio001} alt="Client 1" />
                            <div className="overlay-text">Surfboard</div>
                        </div>

                        <div className="image-container">
                            <img src={portfolio002} alt="Client 2" />
                            <div className="overlay-text">Nature</div>
                        </div>

                        <div className="image-container">
                            <img src={portfolio003} alt="Client 3" />
                            <div className="overlay-text">Shells</div>
                        </div>
                    </div>

                    <h2>TESTIMONIALS</h2>
                </div>

                <div className="about-content">
                    <div className="body">
                        <h2>WHAT CAN MY WEBSITES DO FOR YOU?</h2>
                        <h3>SEO</h3>
                        <p>
                            SEO, or Search Engine Optimization, is crucial for online visibility.
                            AKA ranking higher on Google when someone searches for your product or
                            service. Great SEO will enhance your website's chances of obtaining
                            organic traffic. Let's improve the opportunity of being found by potential
                            customers while boosting your brand's overall visibility and credibility
                            online.
                        </p>
                        <h2>Garvey Wholesale</h2>
                        <div className="indicator-dots">
                            <span className="arrow">&#8594;</span> {/* Unicode for right arrow */}
                        </div>


                    </div>

                </div>

            </div>


        </>

    );
};

export default Hhom;