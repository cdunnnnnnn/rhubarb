import React from 'react'
import ReactDOM from 'react-dom'
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../src/components/App'
import Header from '../src/components/Header'

enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('it renders the <Header />', () => {
    const header = enzyme.mount(<Header />)
    expect(header.length).toBe(1)
  })
})
