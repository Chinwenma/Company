import React from 'react'
import '../../styles/hero.css'
import HeroDarkImage from '../../images/hero-img.png'
const Hero = () => {
    return (
        <section className='hero__section' id='home'>
            <div className="container">
                <div className="hero__wrapper">
                    <div className='hero__content'>
                        <div>
                            <h2>Welcome to DeTech_Matrix</h2>
                            <h2>Lets Us make it</h2>
                            <h2 className='highlight'>Tech for you</h2>
                        </div>
                        <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className='hero__btns'>
                            <button className='primary__btn'>Get started</button>
                            <button className='secondary__btn'>Learn More</button>

                        </div>
                    </div>
                    <div className='hero__img'>
                        <img src={HeroDarkImage} alt='img'/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero