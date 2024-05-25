import React from 'react'
import '../../styles/about.css'
import AboutImage from '../../images/about-us.jpg'



const ChooseUsdata = [
  {
    icon: 'ri-wifi-line',
    title: 'Frist Working Proccess',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu a'
  },
  {
    icon: 'ri-team-line',
    title: 'Collaboration',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu a'
  },
  {
    icon: 'ri-customer-service-line',
    title: '24/7 client Support systems',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu a'
  },
]


const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className="about__wrapper">
          <div className='about__content'>
            <h6 className='subtitle'>Who are we</h6>
            <h2 >Cutting Edge services and</h2>
            <h2 className='highlight'>finacial Challenges</h2>
            <p className='description about__content__desc'>lorLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam aliquam, nunc nunc lLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu aliquam aliquam, nunc nunc lLorem ipsum dolor sit amet.</p>
            <div className='choose__us_item_wrapper'>
            {
              ChooseUsdata.map((item, index) => (
                <div className='choose__us_item' key={index}>
                  <span className='choose__us_icon'><i class={item.icon}></i></span>
                  <div>
                    <h4 className='choose__us_title'>{item.title}</h4>
                    <p className='description'>{item.desc}</p>

                  </div>
                </div>
              ))
            }
            </div>
          </div>
          <div className='about__img'>
          <img src={AboutImage} alt='img'/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About