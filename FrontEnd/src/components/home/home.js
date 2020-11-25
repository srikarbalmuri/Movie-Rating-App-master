import React, { Component } from 'react'
import './home.css'
import axios from 'axios'
import Head from '../header/head'
import Populatemovies from '../Login/Populatemovies'



export class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
             search : '',
             output : []
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    searchValue=()=>{
        axios.get('http://localhost:1200/search?search=' + this.state.search).then(response => {
            this.setState({
              output : response.data.info
            })

            console.log(this.state.output)
            this.props.history.push("/movie",{result: this.state.output})

        }).catch(error => {
          console.log(error)
        })
    }
    

    render() {
        const {search,output} = this.state
        return (
        <>
            <Head/>
            <div id="total">
                <div class="container">
                    <div class="row">
                        <div class="layout">
                            <button onClick={this.searchValue} class="btn search-btn"><i class="fas fa-search fa-1x" id="awe"></i></button>
                            <input type="text" className="form-control" id="search" name = "search" value = {search} aria-describedby="emailHelp" placeholder="         Search Any Movies" onChange={this.changeHandler}></input>
                        </div>
                    </div>
                </div>
            
                             
                        
                          
            </div>
        </>
        )
    }
}

export default home
