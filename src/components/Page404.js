import React, { Component } from 'react'

class Page404 extends Component {
  render() {
    return (
      <>
        <h2>{`{ status: 404, message: "Document Not Found" }`}</h2>
        <p>Oops! We can't find the page you were looking for.</p>
      </>
    )
  }
}
export default Page404
