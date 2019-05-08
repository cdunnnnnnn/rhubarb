import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="py-8">
        <p className="text-xs">
          copyright {new Date().getFullYear()}{' '}
          <a
            className="text-pink-darker no-underline border-transparent border-solid border-b-2 hover:border-pink-darker"
            href="https://github.com/cdunnnnnnn/rhubarb"
            target="_blank"
          >
            rhubarb
          </a>
        </p>
      </footer>
    )
  }
}

export default Footer
