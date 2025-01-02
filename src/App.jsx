// Modules
import React from 'react'

// Components
import Navbar from './components/Navbar'


function App() {
  
  return (
    <>
      <main>
        <Navbar/>

        <section className="section section-1" id="home">
          <h1>Section 1</h1>
        </section>

        <section className="section section-2" id="about">
          <h1>Section 2</h1>
        </section>

        <section className="section section-3" id="services">
          <h1>Section 3</h1>
        </section>

        <section className="section section-4" id="reviews">
          <h1>Section 4</h1>
        </section>
        
        <section className="section section-5" id="contact">
          <h1>Section 5</h1>
        </section>
      </main>
    </>
  )
}

export default App