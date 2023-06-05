import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Family: "",
      Password: "",
      isChecked: false,
      data: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Family, Password } = this.state;
    // Create a new data object with the updated values
    const newData = {
      ...this.state.data,
      [Name]: {
        Name,
        Family,
        Password,
      },
    };

    this.setState({ data: newData }, () => {
      console.log("Updated data object:", this.state.data);
    });
  };

  toggleChange = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    FIO[e.target.name.toLowerCase()] = e.target.value;
  };

  render() {
    const { isChecked } = this.state;
    return (
      <div className="container-fluid basis-shadow main mt-2 main">
        <form action="" className="mx-auto form">
          <span className="title d-flex justify-content-center font-space fw-bold fs-2">
            Administration Window
          </span>
          <input
            onInput={this.handleChange}
            type="text"
            name="Name"
            placeholder="Type Name..."
            className="border-0 mx-auto form-control"
            // onChange={this.handleChange}
          />
          <input
            type="text"
            name="Family"
            placeholder="Type Family..."
            className="mx-auto mt-2 form-control border-0"
            onInput={this.handleChange}
          />
          <div className="mx-auto mt-2">
            <input
              type={!isChecked ? "password" : "text"}
              name="Password"
              placeholder="Type password..."
              className="mx-auto border-0 mt-2 form-control"
              onInput={this.handleChange}
            />
          </div>
          <div className="mx-auto mt-2">
            <input
              type="checkbox"
              name="password"
              checked={isChecked}
              onChange={this.toggleChange}
              className="form-check-input"
              id="showPass"
            />
            <label className="ms-2" htmlFor="showPass">
              Show password
            </label>
          </div>
          <div className="mt-2 mx-auto">
            <Link
              to="/admin"
              className="mx-auto w-25 d-flex justify-content-center btn btn-outline-success"
            >
              <button className="btn btn-outline-success" onClick={this.handleSubmit}>Sign Up</button>
            </Link>
            <div className="clearfix py-2"></div>
          </div>
        </form>
      </div>
    );
  }
}

const FIO = {
  name: "",
  family: "",
  password: "",
};

export { Main, FIO };
