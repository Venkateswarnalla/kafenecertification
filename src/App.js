import logo from './logo.svg';
import './App.module.css';

import TopBar from "./Components/TopBar/TopBar"
import Orders from "./Components/Orders/Orders"

import LoginPage from "./Components/LoginPage/LoginPage"
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom"

import ProductPage from "./Components/ProductPage/ProductPage"

import UserListing from "./Components/UserListing/UserListing"


import React, { Component } from 'react'

export class App extends Component {
  state = {
    loginStatus: false    
  }

  handleuserLogin = () => {
    localStorage.setItem('loginStatus', true);
    // alert("true")
    this.setState({ loginStatus: true })
  }

  handleuserLogout = () => {
    localStorage.setItem('loginStatus', false);
    // alert("false")
    this.setState({ loginStatus: false })
   
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <TopBar loginStatus={this.state.loginStatus} handleuserLogout={this.handleuserLogout} />


          <Switch>
          
        {/* <Route exact to="/" render={(props)=>{
          this.state.loginStatus===true?
           <Redirect to="/productpage"/> :
          <Redirect to="/login"/>
        }}/> */}

            {/* <Route exact path="/" render={(props)=>
           
            <LoginPage  handleuserLogin={this.handleuserLogin} {...props} />
            }/> */}


<Route exact path="/"  render={(props)=>{
               return (
                this.state.loginStatus===true?
                <Redirect to="/Orders" /> :
                <LoginPage handleuserLogin={this.handleuserLogin} {...props} />
              )
            }}/>


            <Route exact path="/Products"  render={()=>{
               return (
                this.state.loginStatus===false?
                <TopBar /> :
                <ProductPage/>
              )
            }}/>


<Route exact path="/Orders"  render={()=>{
               return (
                this.state.loginStatus==true?
              <Orders/> :
                <Redirect to="/Orders"/>
              )
            }}/> 



            <Route exact path="/Orders"  render={()=>{
               return (
                this.state.loginStatus===false?
                <TopBar/> :
                <Orders/>
              )
            }} />



            <Route exact path="/Users"  render={()=>{
               return (
                this.state.loginStatus===false?
                <TopBar /> :
                <UserListing/>
              )
            }} />
          </Switch>
        </BrowserRouter>
{/* component={Orders} */}


      </div>
    )
  }
}




export default App;



{/* if true */}
{/* <Route exact path="/Products"  render={()=>{
               return (
                this.state.loginStatus===true?
                <Redirect to="/Products" /> :
                <TopBar/>
              )
            }}/> */}


{/* <Route exact path="/Orders"  render={()=>{
               return (
                this.state.loginStatus===false?
                <TopBar /> :
                <Route exact path="/Orders"  render={()=>{
                  return (
                   this.state.loginStatus===false?
                   <Redirect to="/" /> :
                   <TopBar/>
                 )
               }} />
              )
            }} />

            */}
