import React, { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./MainPage.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import Header from '../components/Header';

class MainPage extends Component {


  componentDidMount() {
    this.props.onRequestUsers()
  }

filterRobots = () => {
    return this.props.users.filter(users => {
        return users.name
          .toLowerCase()
          .includes(this.props.searchField.toLocaleLowerCase());
      });
  
}
  render() {
    const { onSearchChange, isPending } = this.props;
    
    return isPending ? (
      <h1 className="f1 tc"> Loading... </h1>
    ) : (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList users={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}


export default MainPage;
