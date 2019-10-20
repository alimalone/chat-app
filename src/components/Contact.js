import React from "react";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.status
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.image} />
        <div>
          <h4 className="name">{this.props.userName}</h4>
          <div
            className="status"
            onClick={event => {
              let newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>

            <div className="status-text">
              {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
