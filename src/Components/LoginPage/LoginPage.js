// import React from 'react'
import classes from "./LoginPage.module.css"
import React, { Component } from 'react'
// localStorage.setItem("loginStatus",false)
class LoginPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.username.value)
        console.log(e.target.password.value)
        if(e.target.username.value === e.target.password.value){
            alert("Login Successful")
          
         localStorage.setItem("loginStatus",true)
         this.props.handleuserLogin();
         this.props.history.push("/Orders")
        }else{
            alert("Please enter valid credentials!")
            localStorage.setItem("loginStatus",false)
            return;

        }


    }

    render() {
        return (
            <div>
                <form className={classes.LoginPage} onSubmit={this.handleSubmit}>

                    <h1 className={classes.heading}>Sign In</h1>
                    <input className={classes.inputField} type="text" name="username" placeholder="Enter Username" /><br />
                    <input className={classes.inputField} type="password" name="password" placeholder="Enter Password" /><br />
                    {/* <input className={classes.submitBtn} type="submit" value="Login" /> */}
                    <button className={classes.submitBtn}>Login</button>


                </form>
            </div>
        )
    }
}

export default LoginPage



