import React, { useRef } from 'react'

function App() {
  // ===========================================================================
  // -- Navbar height change functionality
  // ===========================================================================

  const navbar = useRef(null)

  window.onscroll = function changeHeight() {
    if(navbar.current) {
      
      if(document.documentElement.scrollTop > 20) {
        navbar.current.classList.add("sticky-nav")
      } else {
        navbar.current.classList.remove("sticky-nav")
      }

    }
  }


  // ===========================================================================
  // -- Nav Menu Items color change functionality
  // ===========================================================================

  const liElements = useRef([])

  function changeColors() {
    liElements.current.forEach((element, index) => {
      if(element) {
        element.classList.toggle("red")
      }
    })
  }

  // ===========================================================================
  // -- Nav Menu Data
  // ===========================================================================

  const navItems = [
    {
      label: "home",
      link: "#home",
      className: "nav-link"
    },
    {
      label: "about",
      link: "#about",
      className: "nav-link"
    },
    {
      label: "services",
      link: "#services",
      className: "nav-link"
    },
    {
      label: "reviews",
      link: "#reviews",
      className: "nav-link"
    },
    {
      label: "contact",
      link: "#contact",
      className: "nav-link"
    },
  ]


  return (
    <>
      <header ref={ navbar }>
        <div className="container">
          <nav>
            <h1>Brand Logo</h1>

            <ul>
              { navItems.map(({ label, link, className }, key) => (
                <li key={ key } id={ `link-${key + 1}` }>
                  <a href={ link } className={ className } ref={ (el) => (liElements.current[key] = el) }>{ label }</a>
                </li>
              )) }
            </ul>

            <button className='nav-btn' onClick={ changeColors }>Browse More</button>
          </nav>
        </div>
      </header>

      <section className="section section-1">
        <h1>Section 1</h1>
      </section>
      <section className="section">
        <h1>Section 2</h1>
      </section>
      <section className="section">
        <h1>Section 3</h1>
      </section>
      <section className="section">
        <h1>Section 4</h1>
      </section>
      <section className="section">
        <h1>Section 5</h1>
      </section>
    </>
  )
}

export default App