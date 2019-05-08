import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="text-xs">
          copyright {new Date().getFullYear()}{' '}
          <a href="https://github.com/cdunnnnnnn/rhubarb" target="_blank">
            rhubarb
          </a>
        </p>
      </footer>
    )
  }
}

export default Footer
