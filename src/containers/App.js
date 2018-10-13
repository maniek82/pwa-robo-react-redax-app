import React, { Component } from "react";
import { connect } from 'react-redux'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

class App extends Component {


  componentDidMount() {
    this.props.onRequestUsers()
  }


  render() {
    const { searchField, onSearchChange, users, isPending } = this.props;
    const filteredRobots = users.filter(users => {
      return users.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return isPending ? (
      <h1 className="f1 tc"> Loading </h1>
    ) : (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList users={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
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
