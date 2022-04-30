import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {data} from './dataExp'
import './Experiences.css'

const Experiences = () => {
    //State 
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  const fetchJobs = () => { 
    setJobs(data)
    setLoading(false)
  }
 
  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="sectionTabs loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value]
  return (
    <main>
       <div className="serviceTitle">
          <h2>Informations</h2>
          <div className='underlineService'></div>
        </div>
        <section className="sectionTabs">
          <div className="jobs-center">
            {/* btn container */}
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
                    {item.company}
                  </button>
                )
              })}
            </div>
            {/* job info */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                )
              })}
            </article>
          </div>
      <button type="button" className="btn">
        En savoir plus 
      </button>
    </section>
    </main>
    
  )
}

export default Experiences