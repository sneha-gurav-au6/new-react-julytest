import React, { Component } from "react";
import { Register } from "../redux/actions/actionState";
import { connect } from "react-redux";
export class Registers extends Component {
    async componentDidMount() {}

    handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        this.props.Register({ name: name, email: email, password: password });
    };
    render() {
        console.log(this.props.user)
        if(this.props.user!==null){
            alert("Register Successfully")
        }
        return (
            <div className="container-fluid">
                <h1>Register </h1>
                <form onSubmit={this.handleRegister} style={{ background: "#a29bfe", width: "500px" }}>
                    <div className="form-group" style={{ width: "300px", marginLeft: "70px" }}>
                        <label for="exampleInputEmail1"> Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                        />
                        <label for="exampleInputEmail1" style={{ width: "300px", marginLeft: "70px" }}>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                        />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" style={{ width: "300px", marginLeft: "70px" }}>Password</label>
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
                    <button type="submit" className="btn btn-primary" style={{ marginLeft: "170px" }}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }                                                                                           0
}
const mapStateToProps = (state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps, { Register })(Registers);
