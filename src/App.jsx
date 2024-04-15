import React from 'react'
import {
    Collaborator,
    Hero,
    Statistics,
    Reviews,
    Pricing,
    Contact,
    FAQ,
    Service
} from './components'
import { Navbar, Footer } from './layout'

function App() {
    return (
        <div className='App'>
            <main
                className='main'
                id='top'
            >
                <div className='content'>
                    <Navbar />
                    <div
                        data-bs-target='#navbar'
                        data-bs-spy='scroll'
                    >
                        <Hero />
                        <Statistics />

                        <Collaborator />
                        <Service />
                        <Reviews />
                        <Pricing />
                        <FAQ />
                        <Contact />
                    </div>
                    <button
                        className='btn scroll-to-top text-black rounded-circle d-flex justify-content-center align-items-center bg-primary'
                        data-scroll-top='data-scroll-top'
                    >
                        <span className='uil uil-angle-up'></span>
                    </button>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default App
