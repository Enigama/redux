import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component{
  render() {
    const { name } = this.props
    return(
      <div className='ib user'>
        <p>Привет, { name }</p>
      </div>
    )
  }
}

User.propsType = {
  name: PropTypes.string.isRequired,
}