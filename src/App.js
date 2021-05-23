import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 3 },
        { id: 3, value: 2 },
        { id: 4, value: 1 }
    ]
}
onIncrement=(counter)=>{
    
    const counters=[...this.state.counters]
    const index=counters.indexOf(counter)
   
    counters[index]={...counter}
   
   
    counters[index].value++
    this.setState({counters})
   
    
   
   

}
handleReset=()=>{
    const counted=this.state.counters.map(c=>{
         c.value=0
         return c
         
    })
    this.setState({counters:counted})
}
hadledelete=counterid =>{
    const newcount = this.state.counters.filter(c =>
        c.id!==counterid
    )
    this.setState({counters:newcount})
    
 
}


  
  render() { 
    return ( 
     <React.Fragment>
      <Navbar totalcounters={this.state.counters.filter(c=>{
        return c.value>0
      }).length}/>
        <main className="container">
          <Counters
            ondelete={this.hadledelete}
            onReset={this.handleReset}         
            handleIncrement={this.onIncrement}
            counters={this.state.counters}         
          />
        </main>

     
      </React.Fragment>
     );
  }
}
 
export default App;