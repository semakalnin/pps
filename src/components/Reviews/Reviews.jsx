import React from 'react'
import { Slider } from '../'
import './Reviews.css'

export const Reviews = () => {
    return (
        <section className='reviews'>
            <div className='mx-auto text-center'>
                <hr className='horizontal-rule m-0 d-inline-block' />
            </div>
            <div className='container pb-8 pb-lg-10'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-7'>
                        <h2 className='fs-6 fs-lg-5 fw-bold text-center pt-7 pb-4 pt-lg-9 pb-lg-6 lh-lg text-white'>
                            <span className='underline'>
                                1,749 remote teams
                            </span>
                            have shared their experience with our app!
                        </h2>
                    </div>
                    <div className='col-12 mb-4 mb-lg-6'>
                        <div className='row g-2'>
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
