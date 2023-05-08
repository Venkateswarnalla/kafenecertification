import React, { Component } from 'react'

import axios from "axios"
import classes from '../ProductPage/ProductPage.module.css'

 class ProductPage extends Component {
    state={
        data : [],
        productData:[],
        expiryDate:true,
        stock:true,
        resArr:[],
        count:100
    }

    componentDidMount() {
      axios.get("https://5f8724ee49ccbb00161770a7.mockapi.io/moduleTopicsPage")
      .then(response=>{
          this.setState({data : [...response.data],
                         productData:[...response.data]})

      })  
      .catch(err=>{
          console.log("error")
      })
    }



    HandleSelection = (e)=>{   
        this.state[e.target.name]=e.target.checked
        console.log("expiry"+this.state.expiryDate)
        console.log("stock"+this.state.stock)
            let newArr=[];
     
      for(let i=0;i<this.state.productData.length;i++){
        if(!this.state.stock && !this.state.expiryDate){
            this.setState({data:this.state.productData})
            this.setState({count:this.state.productData.length})
            return;
        }
          else if(this.state.stock && !this.state.expiryDate){
              if(this.state.productData[i].stock<100){
                newArr.push(this.state.productData[i]);
              }
          }
        else if(this.state.expiryDate && !this.state.stock){
             let cur=new Date();
             let exp=new Date(this.state.productData[i].expiryDate)
             if(cur>exp){
                 newArr.push(this.state.productData[i])
             }
         }
        else if(this.state.stock && this.state.expiryDate){
            let cur=new Date();
            let exp=new Date(this.state.productData[i].expiryDate)
            if(this.state.productData[i].stock<100 || cur>exp ){
                newArr.push(this.state.productData[i])
                this.setState({count:newArr.length})
            }
         }
        this.setState({data:newArr})
        this.setState({count:newArr.length})
      }
            
       }    
     

    
    
    render() {
        var cardsData = this.state.data.map(item=>{
            return(
                <tr className={classes.tablerow} >
                <td className={classes.id }>{item.id}</td>
                <td className={classes.productname}>{item.medicineName}</td>
                <td className={classes.productbrand}>{item.medicineBrand}</td>
                <td className={classes.expirydate}>{item.expiryDate}</td>
                <td className={classes.unitprice}>${item.unitPrice}</td>
                <td className={classes.stock}>{item.stock}</td>
                </tr> 
            )
        })

        return (
            <main className={classes.mainpage}>
            
            <section className={classes.leftsection}>
            
            <div className={classes.leftwrapper}>
            <h1 className={classes.product}>Products</h1>
            <p className={classes.filters}>Filters</p>
            <p>count:{this.state.count}</p>
            
            <div className={classes.checkedboxes} onChange={this.HandleSelection}>
            <input type="checkbox" name="expiryDate" className={classes.expiry}/><span>Expired</span><br/>
            <input className={classes.lowstock} type="checkbox" name="stock" /><span>Low Stock</span>
            </div>
            
            </div>
            
            </section>
            
            <section className={classes.rightsection}>
            
            <div className={classes.rightwrapper}>
            <table className={classes.table}>
            <tr className={classes.tablerow} >
            <th className={[classes.bold,classes.id].join(" ")} >ID</th>
            <th className={[classes.bold,classes.productname].join(" ")}>Product Name</th>
            <th className={[classes.bold,classes.productbrand].join(" ")}>Product Brand</th>
            <th className={[classes.bold,classes.expirydate].join(" ")}>Expiry Date</th>
            <th className={[classes.bold,classes.unitprice].join(" ")}>Unit Price</th>
            <th className={[classes.bold,classes.stock].join(" ")}>Stock</th>
            </tr>
            
           
            {cardsData}
            
            </table>
            </div>

</section>


</main>


       
        )
           
                
}
 }

export default ProductPage
