import React from 'react';
import {VerticalTimelineElement, VerticalTimeline} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      
      <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date='Aug 2021-Present'
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<SchoolIcon />}
                >
                  <h4 className="vertical-timeline-element-title">
                      University of Texas at Dallas
                  </h4>   
                  <p> Masters in Computer Science</p>  
          </VerticalTimelineElement>

          <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date='June 2018 - July 2021'
                iconStyle={{background: '#aa3e3e',color: '#fff'}}
                icon={<WorkIcon />}
                >
                  <h4 className="vertical-timeline-element-title">
                      KPIT Technologies Ltd, Bangalore
                  </h4>   
                  <p> Software Engineer</p>  
          </VerticalTimelineElement>

          <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date='May 2017 – July 2017'
                iconStyle={{background: '#aa3e3e',color: '#fff'}}
                icon={<WorkIcon />}
                >
                  <h4 className="vertical-timeline-element-title">
                  Schneider Electric india Pvt Ltd, Bangalore
                  </h4>   
                  <p> Intern</p>  
          </VerticalTimelineElement>
          <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date='Nov 2015 – July 2016'
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<SchoolIcon />}
                >
                  <h4 className="vertical-timeline-element-title">
                  STUDSAT 2, Bangalore
                  </h4>   
                  <p> Intern</p>  
          </VerticalTimelineElement>
          <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date='Aug 2014-June 2018'
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<SchoolIcon />}
                >
                  <h4 className="vertical-timeline-element-title">
                  Visvesvaraya Technological University, Bangalore
                  </h4>   
                  <p> Bachelors in Electronics and Communication Engineering</p>  
          </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  )
}

export default Experience