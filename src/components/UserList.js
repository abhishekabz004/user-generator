import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeUser,
  setVisibilityFilter
} from "../actions/actionCreator";
import { SHOW_ALL} from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import './UserList.css'


class UserList extends Component {
  render() {
    return (
      <div style={{ marginTop: "0px" }} className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12" onLoad={() => this.props.setVisibilityFilter(SHOW_ALL)}>
        
        {this.props.users.length !== 0 ? (
          <div>
            {this.props.users.map(user => (
              <center key={user.id} style={{ marginTop: "40px" }}>                
                <div className="box">
                  <div className="power">☮</div>
                  <div className="userbox">
                    <div className="pic"><img src={user.pic}/></div>
                  </div>
                  <p> 
                    <span className="user" style={{fontSize: "15pt"}}>{user.name} </span>
                    <span className="user" style={{fontSize: "9pt"}}>{user.location} </span>
                    <span
                        className="fas fa-minus-circle power corner"
                        onClick={() => this.props.removeUser(user.id)}
                        style={{
                          color: "white",
                          fontSize: "20pt",
                          marginRight: "20px",
                        }}
                    />
                  </p>
                </div>
              </center>
            ))}
          </div>
        ) : (
          <div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-danger" role="alert">
              User List is empty. Generate a user first.
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return users;
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return {
    users: getVisibleUsers(state.users, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeUser,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
