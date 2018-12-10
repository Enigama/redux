import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Page} from '../components/Page'
import {User} from '../components/User'
import {setYear} from "../actions/PageActions";
import '../App.css'
import {store} from "../store/configureStore";

class App extends Component {
  render() {
    const {user, page} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name}/>
        <Page year={page.year} photos={page.photos} setYear={setYearAction}/>
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
