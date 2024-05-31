import React from 'react'
import '../../styles/team.css'

import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'



const TeamData = [
    {
        imgUrl: team01,
        name: 'John Doe',
        designation: 'Product Designer',
    },
    {
        imgUrl: team02,
        name: 'John Doe',
        designation: 'Digital Marketer',
    },
    {
        imgUrl: team03,
        name: 'John Doe',
        designation: 'App developer',
    },
    {
        imgUrl: team04,
        name: 'John Doe',
        designation: 'Graphics Designer',
    },
]

const Team = () => {
    return (
        <section className='our__team '>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>behold Our<span className='highlight'> Team Members</span></h2>
                </div>
                <div className='team__wrapper'>
                   {
                    TeamData.map((item, index) => (
                        <div className='team__item' key={index}>
                        <div className='team__img'>
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className='team__details'>
                            <h4>{item.name}</h4>
                            <p className='description'>{item.designation}</p>
                            <div className='team__social_icon'>
                                <span>
                                    <i class='ri-linkedin-line'></i>
                                </span>
                                <span>
                                    <i class='ri-twitter-line'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
        </section>
    )
}

export default Team