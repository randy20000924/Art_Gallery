import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.gif'
import IMG2 from '../../assets/portfolio2.gif'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Vehicle Data Visualization Web Page',
    github: 'https://github.com/randy20000924/CarTrace'
  },
  {
    id: 2,
    image: IMG2,
    title: "McDonald's Ordering Machine",
    github: 'https://github.com/randy20000924/self-order-kiosk'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer noopenner">Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio