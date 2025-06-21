import React from 'react'
import ai from '../../../assets/img/ai.png'
import dg from '../../../assets/img/dg.png'
import sd from '../../../assets/img/sd.png'
import hacking from '../../../assets/img/hacking.png'
import './Course.css'

function Course() {

    const CourseData = [
        {
        title: "AI DEVELOPMENT",
        desc: "Master Ai Development",
            img: ai,
        },
        {
        title: "DIGITAL MARKETING",
        desc: "Master Digital Marketing",
            img: dg,
        },
        {
        title: "SOFTWARE DAVELOPMENT",
        desc: "Master Software Developent",
            img: sd,
        },
        {
        title: "CYBER SECURITY",
        desc: "Master Cyber Security",
            img: hacking,
        },
        
    
    ]

  return (
    <div className='container course-container'>
  <div className="course-top">
    <h2 className='section_title'>Our Free Course</h2>
    <p>The Trading Free Courses</p>
    <div className="course-wrapper">
      {CourseData.map((courses, index) => (
        <div className="course-item" key={index}>
          <span className='course-icon'>
            <img src={courses.img} alt={courses.title} />
          </span>
          <div className="course-content">
            <h4>{courses.title}</h4>
            <p>{courses.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Course
