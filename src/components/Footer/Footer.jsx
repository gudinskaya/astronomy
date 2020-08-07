import React from 'react'
import './Footer.css'
import GHImage from './GitHub.png'

function Footer() {
  return (
    <>
      <footer className="page-footer teal darken-1 footer">
        <div className="footer-copyright">
          <div className="footer-container container">
            <p>© 2020 Anna Gudinskaya</p>
            <a className="grey-text text-lighten-4 right" target="_blank" rel="noopener noreferrer" href="https://github.com/gudinskaya">
              <img className="gh-link" src={GHImage} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
