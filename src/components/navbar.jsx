import React, { Component } from 'react';
class Navbar extends Component {
    
    render() { 
        return (
        
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar<spam className="badge m-6 badge-primary "> {this.props.totalcounters}</spam></a>
                    
                </div>
            </nav>
        
           
          );
    }
}
 
export default Navbar;