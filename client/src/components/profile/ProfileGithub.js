import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientID: "b445f6628685097311ad",
      clientSecret: "9e115b2f5c1c44abe3bf4c7d72b5b9a972984d28",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  //make request to github api
  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientID, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>TODO</h1>
      </div>
    );
  }
}

export default ProfileGithub;
