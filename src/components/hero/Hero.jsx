import React from 'react'
import './hero.css'
import HeroImg from '../../images/hero-img.webp'
import {FaReact} from 'react-icons/fa'
import {GrGraphQl} from 'react-icons/gr'
import {SiApollographql} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

function Hero() {
  return (
    <div className='hero_section'>
      <div className="container">
        <div className="row">
            <div className="col-md-6 text_section">
                <p className='span'>Rick & Morty API by Adil Shabab</p>
                <h1>Full Stack Developer</h1>

                <div className="technologies">
                    <p className="tech-head">Technologies Used</p>
                    <div className="tech-icons">
                        <FaReact/>
                        <GrGraphQl/>
                        <SiApollographql/>
                        <BsBootstrapFill/>
                    </div>
                    <button className="button">Source Code <AiFillGithub/></button>
                </div>
            </div>
            <div className="col-md-6 img_section">
                <img  className="img-fluid" src={HeroImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
