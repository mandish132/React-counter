import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     click: 0,

    //     count:this.props.counter.value ,
    //      tags: ['tag1', 2, "tag3"]



    // }
    styles = {
        margin: "10px",
        width: "100px",
        height: "40px",
        border: "1px solid black",
        display: "flex"

    }
  
    reset=() =>{
        this.setState({count:this.state.count=0})
        return document.getElementById("replace").innerHTML=`Items are reset to their orginal position`
    }


    render() {
        // console.log(this.props)


        
        return (
           


            <div>
                
                {/* <ul> */}
                    {/* {this.state.tags.length === 0 && "Please insert a new tag element"} */}
                    {/* {this.empty()} */}
                {/* </ul> */}

                <span className={this.colorsclass()}>{this.formatcount()}</span>


                <button onClick={() => this.props.handleIncrement(this.props.counter)} style={this.styles} className="btn btn-secondary btn-sm">Increment</button>
               
                {/* <button onClick={this.reset} style={this.styles} className="btn btn-secondary btn-sm">RESET</button>
                 */}
                {this.props.children}
            
                  <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
                   
                  
                        
            </div>

        )
    };
    // empty() {
    //     return this.state.tags.length > 0 ? this.state.tags.map(mapped => { return <li>{mapped}</li>; }) : "This is empty array";
    // }

    colorsclass() {
        let classes = "badge m-6 badge-";
        classes += this.props.counter.value === 0 ? "primary" : "warning"
        return classes
    }

    formatcount() {
        return this.props.counter.value === 0 ? <h1>Zero</h1> : <h1>{this.props.counter.value}</h1>


    }
    // counternumber() {
    //     return this.state.click += 1



    // }
}


export default Counter;