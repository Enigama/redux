import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import {User} from "../components/User";
import {Page} from "../components/page";
import {getPhotos} from "../actions/PageActions";

class App extends Component {
  render() {
    const { user, page, getPhotosAction } = this.props
    return (
      <div>
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}/>
        <User name={user.name}/>
      </div>
    )
  }
}
const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
