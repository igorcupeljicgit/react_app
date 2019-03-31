import React, {Component} from 'react';

class Header  extends Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(){
        console.log("CLICKED");
    }
    render(){
        return (
            
            <header className="page-footer">
            
                <div className="col l6 s12">
                  <h5 className="white-text">Bit People</h5>
                </div>
            </header>
               
                 
        );
    }
}

export {Header};