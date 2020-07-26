import React, { Component } from "react";
import { Register, Login } from "../redux/actions/actionState";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
export class Logink extends Component {
    async componentDidMount() {}

    handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        this.props.Login({ email: email, password: password });
        alert("Login Successfully, Refresh Page ");
    };
    render() {
        console.log(this.props.login);
        return (
            <div className="container-fluid">
                <h2>Login Here!! </h2>
                <form onSubmit={this.handleLogin} style={{ background:"#a29bfe",width:"500px"}}>
                    <div className="form-group"style={{width:"300px",marginLeft:"70px"}}>
                        <label for="exampleInputEmail1"><b>Email</b> </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                        />
                       
                    </div>
                    <div className="form-group" style={{ width: "300px", marginLeft: "70px" }}>
                        <label for="exampleInputPassword1"><b>Password</b></label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginLeft: "170px"}}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login: state,
    };
};

export default connect(mapStateToProps, { Login })(Logink);
