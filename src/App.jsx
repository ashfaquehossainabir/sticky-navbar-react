// Modules
import React, { useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'

// Components
import Navbar from './components/Navbar'


function App() {
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClick = () => {
      toast.success('Button Clicked!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const button = buttonRef.current

    if(button) {
      button.addEventListener('click', handleClick)
    }

    // Cleanup the event listener
    return () => {
      if(button) {
        button.removeEventListener('click', handleClick)
      }
    }

  }, [])
  
  return (
    <>
      <main>
        <ToastContainer/>

        <Navbar/>

        <section className="section section-1" id="home">
          <h1>Section 1</h1>
          <button className='section-btn' ref={ buttonRef }>Click Here</button>
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