import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component{
  render() {
    const {year, photos} = this.props
    return(
      <div>
        <p>У тебя {photos.length}  за {year} год</p>
      </div>
    )
  }
}

Page.propsType = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
}