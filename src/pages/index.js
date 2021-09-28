import * as React from "react"
import "./style.css"
import { StaticImage } from "gatsby-plugin-image"
import BoxIcon from "../assets/open-box.svg"
import FastIcon from "../assets/fast-time.svg"
import SupportIcon from "../assets/conversation.svg"
import Ceo from "../images/persons/ceo.png"
import Manager from "../images/persons/manager.png"
import TestimonialFace from "../images/testimonial.png"
import { InView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import ContactForm from '../components/ContactForm'

const tabHandler =()=>{
  
}
// markup
const IndexPage = () => {
  return (
    <>
    <main>
      <section className="bg-gradient section-home">
        <div className="container">
        <div className="row wrap">
          <div className="col-12 col-md-6">
            <p className="upper-title">Strona Lading Page</p>
            <h1 className="title">Nazwa produktu lub usługi </h1>
            <p className="subtitle">W tym pudełku jest wszystko czego potrzebujesz, jeszcze nie raz Cię zaskoczy. </p>
            <button className="cfa-btn">Zamawiam</button>
          </div>
          <div className="col-12 col-md-6">
            <StaticImage 
            src="../images/product_nobg.png" 
            alt="product" 
            placeholder="none"
            />
          </div>
        </div>
        </div>
      </section>
      <section id="partners" className="bg-dark">
        <div className="container">
          <div className="row mobile-slider">
            <div className="col-3 col-md-2">
              <div className="partners-item">
                PARTNER
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="partners-item">
                PARTNER
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="partners-item">
                PARTNER
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="partners-item">
                PARTNER
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="partners-item">
                PARTNER
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
        <div className="row wrap features-icon">
          <div className="col-12 col-md-4">
            <div className="row wrap features-item">
              <BoxIcon fill="#fff" width="48px"  height="48px"/>
              <p className="col-12"><b>Trwałe opakowanie</b></p>
              <p className="col-12">Zapakowane w najlepszym opakowaniu na rynku!</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row wrap features-item">
              <FastIcon fill="#fff" width="48px"  height="48px"/>
              <p className="col-12"><b>Najszybszy transport</b></p>
              <p className="col-12">Najszybszy transport z dostawą do domu!</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row wrap features-item">
              <SupportIcon fill="#fff" width="48px"  height="48px"/>
              <p className="col-12"><b>Wsparcie specjalistów</b></p>
              <p className="col-12">Wsparcie specjalistów na każdym kroku współpracy!</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
        <div className="row wrap">
          <div className="section-title col-md-12"> <h2>Nasz produkt</h2></div>
          <div className="col-12 col-md-6">
            <StaticImage 
            src="../images/packs.png" 
            alt="product" 
            placeholder="none"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="services-item">
              <div className="services-title"><span>Pakowanie</span></div>
              <div className="services-descs">Pakujemy wszystko i w każdym rozmiarze i w każdym stanie skupienia.</div>
            </div>
            <div className="services-item">
              <div className="services-title"><span>Produkcja</span></div>
              <div className="services-descs">Produkujemy najlepszej jakości pudełka, składane w dowolny sposób</div>
            </div>
            <div className="services-item">
              <div className="services-title"><span>Dowóz</span></div>
              <div className="services-descs">Dowieziemy pudełka we wskazany adres na terenie Pacanowa.</div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="section-title"> <h2>Nasz zespół</h2></div>
          <div className="row wrap about-wrapper">
            <div className="col-12 col-md-3">
              <div className="about-item">
                <StaticImage 
                  src="../images/persons/ceo.png"  
                  alt="zdjęcie"
                  />
                  <p>CEO</p>
                <h3>Jan Kowalski</h3>
                
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="about-item">
                <StaticImage 
                  src="../images/persons/manager.png" 
                  alt="zdjęcie"
                  placeholder="none"
                  />
                  <p>Manager</p>
                <h3>Joanna Malinowska</h3>
                
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="about-item">
                <StaticImage 
                  src="../images/persons/project.png" 
                  alt="zdjęcie"
                  placeholder="none"
                  />
                  <p>Projektant</p>
                <h3>Andrzej Kowalski</h3>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counter">
        <div className="container">
        <div className="section-title"> <h2>W liczbach</h2></div>
        <InView  delay={300} triggerOnce	>
            {({ inView, ref, entry }) => (
            <div className="row wrap" ref={ref}>
                
            <div className="col-12 col-md-4" >
              <div className="counter-item">
                <CountUp start={0} end={340} duration={6}/>
                <p>Projektów opakowań</p></div>
            </div>
            <div className="col-12 col-md-4" >
              <div className="counter-item">
                <CountUp start={0} end={1340} duration={7}/>
                <p>Zadowolonych klientów</p></div>
            </div>
            <div className="col-12 col-md-4" >
              <div className="counter-item">
                <CountUp start={0} end={40} duration={7}/>
                <p>Pracowników</p></div>
            </div>
            </div>
            )}
        </InView>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
        <div className="section-title"> <h2>Co o nas mówią?</h2></div>
        <div className="testimonials-wrapper">
          <ul className="testimonials-list">
              <li className="testimonials-item">
                <div className="testimonials-text">
                  <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                  <div className="testimonials-desc">
                    <img className="testimonial-img" src={TestimonialFace} alt="Jan Wiśniewski" />                   
                    <p className="testimonials-author">Jan Wiśniewski</p>
                    <p className="testimonials-role">CEO My Company</p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="testimonials-text">
                  <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                  <div className="testimonials-desc">
                    <img className="testimonial-img" src={TestimonialFace} alt="Jan Wiśniewski" />                   
                    <p className="testimonials-author">Jan Wiśniewski</p>
                    <p className="testimonials-role">CEO My Company</p>
                  </div>
                  
                </div>
              </li>
              <li className="testimonials-item">
                <div className="testimonials-text">
                  <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                  <div className="testimonials-desc">
                    <img className="testimonial-img" src={TestimonialFace} alt="Jan Wiśniewski" />                   
                    <p className="testimonials-author">Jan Wiśniewski</p>
                    <p className="testimonials-role">CEO My Company</p>
                  </div>
                </div>
              </li>
          </ul>
        </div>
        </div>
      </section>
      <section id="contact-form">
        <div className="container">
          <div className="row wrap">
            <div className="section-title col-12"> <h2>Napisz do nas!</h2></div>
            <div className="col-12 col-md-6">
                <StaticImage 
                src="../images/packs.png" 
                alt="product" 
                placeholder="none"
                />
            </div>
            <div className="from-wrapper bg-dark col-12 col-md-6">
                  <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-dark">
      <div className="container">
        <div className="row wrap">
          <div className="col-12 col-md-3">
          <p className="upper-title">Strona Lading Page</p>
            <h2 className="title">Nazwa produktu lub usługi </h2>
            <p className="subtitle">W tym pudełku jest wszystko czego potrzebujesz, jeszcze nie raz Cię zaskoczy. </p>
          </div>
          <div className="col-12 col-md-3 address">
              <p>Nazwa Firmy</p>
              <p>Ulica 3</p>
              <p>00-123 Miasto</p>
              <p>adres@mailowy.pl</p>
              <p>+48 500 600 700</p>
          </div>
          <div className="col-12 center">Made by Starywieloryb - 2021</div>
        </div>
      </div>
    </footer>
    </>
   )
}

export default IndexPage
