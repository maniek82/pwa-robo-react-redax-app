import React, { Component } from "react";
import { connect } from 'react-redux'

import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

class App extends Component {



  render() {
    return (
      <MainPage {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    users: state.request.users,
    isPending: state.request.isPending,
    error: state.request.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value))
    },
    onRequestUsers: () => {
      dispatch(requestRobots())
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
