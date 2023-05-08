// import classes from './userListing.module.css'
import React, { Component } from 'react'
import classes from "./UserListing.module.css"

import axios from "axios"

class UserListing extends Component {
    constructor(props){
        super(props);
    
    this.state = {
        data : [],
        userList:[],
        userinput:""
    }
    this.inputRef = React.createRef()
    }
    componentDidMount() {
        
      axios.get("https://5fef8dbcba7b3f0017faeeaa.mockapi.io/Userlisting")
      .then(response=>{
          console.log(response.data)
          this.setState({data : [...response.data], userList : [...response.data]})
          this.inputRef.current.focus()
      })  
      .catch(err=>{
          console.log("error")
      })
    }
    HandleInput = (e)=>{
        console.log(e.target.value)
        this.setState({userinput:e.target.value})
        if(e.target.value<=2){
            alert("Please enter at least 2 characters")
            this.setState({data:this.state.userList})
        }else{
            var resArr=[]
            for(var i = 0; i < this.state.userList.length; i++){
                
                if(this.state.userList[i].fullName.toLowerCase().includes(e.target.value.toLowerCase())){
                    resArr.push(this.state.userList[i])
                    console.log(this.state.userList[i])
                }
            }
            this.setState({data:resArr})
        }
        
    }
    HandleReset=(e)=>{
        this.setState({userinput:""})
 this.setState({data:this.state.userList})
 
    }

    render() {
console.log(this.state.resArr)
        var createCards = this.state.data.map((item,index)=>{
            let itemId=item.id;
            return(
                <tr className={classes.itemId} >
                <td className={classes.id} >{item.id}</td>
                <td className={classes.productname}><img className={classes.img} src={item.profilePic} alt={item.id}/></td>
                <td className={classes.productbrand}>{item.fullName}</td>
                <td className={classes.expirydate}>{item.dob}</td>
                <td className={classes.unitprice}>{item.gender}</td>
                <td className={classes.stock}>{item.currentCity},{item.currentCountry}</td>
            </tr> 
            )
        })
        return (
            
                <div className={classes.mainpage}>
             <div className={classes.mainwrapper}>

             

            <section className={classes.topsection}>
                <h1 className={classes.heading}>Users</h1>

                <div className={classes.inputreset}>
                    <input onChange={this.HandleInput} name="user" value={this.state.userinput} type="search" ref={this.inputRef} className={classes.searchinput} placeholder="search by name"/>
                    <button className={classes.resetbutton} onClick={this.HandleReset}>Reset</button>
                </div>

            </section>

            <section className={classes.bottomsection}>

                <div className={classes.rightwrapper}>
                    <table className={classes.table}>
                        <tr className={[classes.tablerow,classes.bold].join(" ")} >
                            <td className={[classes.bold,classes.id].join(" ")} >ID</td>
                            <td className={[classes.bold,classes.productname].join(" ")}>User Avatar</td>
                            <td className={[classes.bold,classes.productbrand].join(" ")}>Full Name</td>
                            <td className={[classes.bold,classes.expirydate].join(" ")}>DoB</td>
                            <td className={[classes.bold,classes.unitprice].join(" ")}>Gender</td>
                            <td className={[classes.bold,classes.stock].join(" ")}>Current Location</td>
                        </tr>
{/* <!-- 
                        <tr id="table-row" >
                            <td class="  id" >ID</td>
                            <td class=" product-name"><img class="img" src="" alt=""/></td>
                            <td class=" product-brand">Full Name</td>
                            <td class=" expiry-date">DoB</td>
                            <td class=" unit-price">Gender</td>
                            <td class=" stock">Current Location</td>
                        </tr> --> */}
                        {createCards}
                   </table>
            

               </div>
            </section>
         </div>
         </div>
            
        )
    }
}


export default UserListing
