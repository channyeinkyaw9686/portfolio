import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Chan Nyein Kyaw
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>01 Work</button>
            <button onClick={() => scrollTo("#about")}>02 About</button>
            <button onClick={() => scrollTo("#contact")}>03 Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
