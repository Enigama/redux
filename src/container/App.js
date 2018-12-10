import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Page} from '../components/Page'
import {User} from '../components/User'
import {setYear} from "../actions/PageActions";
import '../App.css'

class App extends Component {
  render() {
    const {user, page, setYearAction} = this.props
    return (
      <div className='row'>
        <Page year={page.year} photos={page.photos} setYear={setYearAction}/>
        <User name={user.name}/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store, 'store');
  return{
    user: store.user,
    page: store.page,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    setYearAction: year=> dispatch(setYear(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
