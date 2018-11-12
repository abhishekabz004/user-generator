import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/actionCreator";
import { bindActionCreators } from "redux";
import axios from 'axios';

//This component generates new random user by making an api call. 

class GenerateUser extends Component {
  constructor(props) {
    super(props);
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData() {
    axios.get(`https://randomuser.me/api/`)
      .then(res => {
        if(res.data.results.error !== "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."){
          this.props.addUser(res.data.results[0]);
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            type="button"
            onClick={() => {
              this.getUserData()
            }}
            style={{ marginTop: "25px" }}
            className="btn btn-success"
          >
            Generate new User
          </button>
        </div>
      </div>
    );
  }
}

//This method is to dispatch ADD_USER action and hence the new user would be added to the store.
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addUser
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(GenerateUser);
