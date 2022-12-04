import React from 'react'
import './timeline.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWork} from 'react-icons/md'
import {MdOutlineSchool} from 'react-icons/md'

let timelineElements = [
    {
      id: 1,
      title: "Chang Gung University",
      location: "Taoyuan, Taiwan",
      description:
        "Major in Computer Science and Information Engineering",
      date: "September 2019 - June 2023",
      icon: "school",
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Turing Drive",
      description: "Preprocessing data from AWS EC2 and deploy on the official website. Apply the data by Chart.js, Google Maps API and visualize the trace of autopilot car on website.",
      date: "June 2022 - August 2022",
      icon: "work",
    },
    
];
  
function Timeline() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
  
    return (
      <div>
        <section id='timeline'>
            <h2>Timeline</h2>
        </section>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
  
            return (
              <VerticalTimelineElement
                className='VerticalTimelineContent'
                key={element.key}
                contentStyle={{ background: 'rgb(45, 48, 149)' }}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <MdWork /> : <MdOutlineSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description" className='vertical-timeline-element-description'>{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    );
  }

export default Timeline