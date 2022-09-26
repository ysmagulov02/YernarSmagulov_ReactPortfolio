import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa";
import {FaGraduationCap} from "react-icons/fa";
import {MdWork} from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Major</h5>
              <small>Computer Science</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>GPA</h5>
              <small>3.94 (Dean's List)</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto reiciendis, a incidunt ut dolorem perspiciatis fugiat assumenda iusto excepturi suscipit sunt consequatur est blanditiis voluptatibus delectus, quaerat, laudantium obcaecati?
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    </section>
  )
}

export default About