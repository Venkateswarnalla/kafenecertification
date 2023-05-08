import React, { Component } from 'react'
import classes from "./TopBar.module.css";
import { Link, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

// var status = localStorage.getItem("loginStatus")
class TopBar extends Component {

state={
  toggArr:["Orders","Products","Users"],
  tog:0,
 
}

HandleLine=(index)=>{
  this.setState({tog:index})
}
    render() {

let updatedArr=this.state.toggArr.map((item,index)=>{
return ( <span key={index}  onClick={()=>this.HandleLine(index)}  className={this.state.tog===index?[classes.item,classes.col].join(" "):classes.item}><Link to={`${item}`}
className={this.state.tog===index?[classes.textDecoration,classes.active].join(" "):classes.textDecoration} >{item}</Link></span>)
})

        console.log(this.props.loginStatus)
        return (
      

            <div className={classes.topbar}>

                <div className={classes.mainlogo}>

                    <img className={classes.logo} src="https://photos.angel.co/startups/i/6990381-d25ca2b850341b6fecabd4d1bd168ffa-medium_jpg.jpg?buster=1561495058" alt="" />
                    <h1>Kafene</h1>
                </div>

              
                <nav className={classes.navitems}>{updatedArr}</nav>    

  
              


                {/* <p className={classes.logout}>{this.props.loginStatus===true?"Logout ":}</p> */}
                {/* <p className={classes.logout}>{this.props.loginStatus===false?" ":<Link to="/">Logout</Link>}</p> */}



                {/* <Link to='/' className={classes.logout} onClick={this.props.handleuserLogout}>Logout</Link> : */}

                {
                    this.props.loginStatus ? <Link to="/" className={classes.logout} onClick={this.props.handleuserLogout}>Logout</Link> : 
                    <span></span>
                }


                {/* <Link to='/' className={classes.logout} onClick={this.props.handleuserLogout}>{this.state.status===true?"Logout":"login"}</Link> */}

            </div>
           
        )
    }
}

export default TopBar
