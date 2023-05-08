import React, { Component } from 'react';
import classes from "./Orders.module.css"

import axios from "axios"

 class Orders extends Component {
     state={
         data : [],
         ordersData:[],
         New:true,
         Packed:true,
         InTransit:true,
         Delivered:true,
         resultArr:[],
         count:0,
         c:100
     }

     componentDidMount(){
         axios.get("https://5ee249468b27f300160948f0.mockapi.io/PracticeArena")
         .then(response=>{
             console.log(response)
             this.setState({data : [...response.data] ,ordersData:[...response.data]})
         })
         .catch(err=>{
             console.log("Error")
         })
     }

     HandleSelection = (e) =>{
         console.log(e.target.name)
         var resArr = []
      this.state[e.target.name]=e.target.checked;
      console.log(this.state[e.target.name])
   if(!this.state[e.target.name]){
       this.state.data=this.state.data.filter(item=>{
           return e.target.name!==item.orderStatus
       })
       this.setState({data:this.state.data}) //packed deliverd
       this.setState({c:this.state.data.length})
       
       return;
   }
      for( let i = 0; i < this.state.ordersData.length; i++){ //new 
         if(this.state[e.target.name]){  //new
             if(e.target.name===this.state.ordersData[i].orderStatus){ //new
                 this.state.data.push(this.state.ordersData[i])
             }
            
         }
      }
      this.setState({data : this.state.data})
      this.setState({c:this.state.data.length})
      
    // }
     }
    render() {

        var cardsDetail = this.state.data.map((item, index)=>{
            return(
                <tr className={classes.tablerow} >
                   <td className={classes.id }>{item.id}</td>
                   <td className={classes.productname}>{item.customerName}</td>
                   <td className={classes.productbrand}>{item.orderDate}<br/><span className={classes.orderTime}>{item.orderTime}</span></td>
                   <td className={classes.expirydate}>${item.amount}</td>
                   <td className={classes.unitprice}>{item.orderStatus}</td>
                   {/* <td className={classes.stock}>{item.}</td> */}
                </tr> 
            )
        })
        return (
           
            <main className={classes.mainpage}>

             <section className={classes.leftsection}>
            
                   <div className={classes.leftwrapper}>
                    <h1 className={classes.product}>Orders</h1>
                    <p className={classes.filters}>Filters</p>
                    <p>count:{this.state.c}</p>
                   
                         <div className={classes.checkedboxes} onClick={this.HandleSelection}>
                              <input type="checkbox" name="New" className={classes.expiry} checked={this.state.New}/><span>New</span><br/>
                              <input className={classes.lowstock} type="checkbox" name="Packed"checked={this.state.Packed} /><span>Packed</span><br/>
                              <input type="checkbox" name="InTransit" className={classes.expiry} checked={this.state.InTransit} /><span>InTransit</span><br/>
                               <input className={classes.lowstock} type="checkbox" name="Delivered" checked={this.state.Delivered} /><span>Delivered</span>
                         </div>
                   
                   </div>

             </section>

             <section className={classes.rightsection}>

                <div className={classes.rightwrapper}>
                   <table className={classes.table}>
                       <tr className={classes.tablerow} >
                           <td className={[classes.bold,classes.id,classes.grey].join(" ")} >ID</td>
                           <td className={[classes.bold,classes.productname].join(" ")}>Customer</td>
                           <td className={[classes.bold,classes.productbrand].join(" ")}>Date</td>
                           <td className={[classes.bold,classes.expirydate,classes.grey].join(" ")}>Amount</td>
                           <td className={[classes.bold,classes.unitprice].join(" ")}>Status</td>
                           {/* <!-- <td class="bold stock">Stock</td> --> */}
                       </tr>
                       {cardsDetail}

                    {/* <!-- <tr className="table-row" >
                        <td class="className ">56104-020</td>
                        <td class="product-name ">Miconazole Nitrate</td>
                        <td class="product-brand">Premier Brands of America Inc.</td>
                        <td class="expiry-date">14 Aug, 2012</td>
                        <td class="unit-price">$993.01</td>
                        <td class="stock">725</td>
                 </tr> -->
                 
                    <!-- <tr className="table-row" >
                        <td class="className ">56104-020</td>
                        <td class="product-name ">Miconazole Nitrate</td>
                        <td class="product-brand">Premier Brands of America Inc.</td>
                        <td class="expiry-date">14 Aug, 2012</td>
                        <td class="unit-price">$993.01</td>
                        <td class="stock">725</td>
                 </tr> --> */}
                   </table>
                </div>

             </section>
            

         </main>
           
        )
    }
}


export default Orders
