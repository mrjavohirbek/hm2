import React, { Component, useEffect } from 'react'

const  FetchApi= (Wrapp) => {
    return class extends Component{
        state ={
            posts:[],
   
        }
     
        FetchApi(){
            const id = Math.random() * 100
            fetch(`https://jsonplaceholder.typicode.com/posts/${id.toFixed()}`).then(async(response)=>{
return await response.json()
            }).then((data)=>{
                this.setState({posts:data})
            })
        }
        render(){
      
      const Settime =      setTimeout(()=>{
             this.FetchApi()
             clearTimeout(Settime)
            },3000)
           
            return  <Wrapp data = {this.state.posts}/> 
        }
    }
  
}

export default FetchApi
