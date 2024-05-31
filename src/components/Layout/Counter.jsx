/* eslint-disable no-unreachable */
import React from 'react'
import '../../styles/counter.css'

const CounterData = [
    {
        number: '5k',
        text: 'Clients'
    },
    {
        number: 50,
        text: 'Completed Projects'
    },
    {
       number: 20,
        text: 'Running Projects'
    },
]

const Counter = () => {
    return (
        <section className='counter '>
            <div className='container'>
                <div className='counter__wrapper' >
                   {
                        CounterData.map((item, index) => (
                            <div className='counter__item' key={index}>
                                <h3 className='counter__number'>{item.number}</h3>
                                <h4 className='counter__title'>{item.text}</h4>
                            </div>
                        ))
                    }


                </div>

            </div>
        </section>
    );
}

export default Counter