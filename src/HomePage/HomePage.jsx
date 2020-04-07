import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Widget } from "rasa-webchat";
import { userActions } from "../_actions";
import ChatBotWidget from "../ChatBot/ChatBotWidget";
import styled from "styled-components";

const Margin = styled.p`
  margin-top: 20px;
`;

const Error = styled.p`
  flex: 1;
  background-color: red;
`;

const Right = styled.div`
  width: 200;
  background-color: blue;
`;

// export let ADDRESS = 'http://69.164.210.77:5005'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      addressChated: this.props.user.username,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: "" });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.address) {
      this.setState({ error: "Please enter an address" });
      return;
    }

    localStorage.clear();
    this.setState({ addressChated: this.state.address, address: "" });

    // const { username, password } = this.state;
    // if (username && password) {
    //     this.props.login(username, password);
    // }
  }

  render() {
    const { address } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <div>
          <div>
            <h1>Hi !</h1>
            <p>You're logged in Chatbot!!</p>
            {this.state.addressChated && (
              <p>Connected: {this.state.addressChated}</p>
            )}

            <Margin>
              <Link to="/login">Logout</Link>
            </Margin>
          </div>

          {this.state.addressChated && (
            <div>
              <ChatBotWidget address={this.state.addressChated} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
