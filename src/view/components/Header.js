import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classState: localStorage.getItem("classNameButton")
        }

    }

    switchClass = () => {
        const list = "fas fa-th-list";
        const grid = "fas fa-th";
        const cls = localStorage.setItem("classNameButton", (this.props.case) ? list : grid);

        return (this.props.case) ? list : grid
    }


    render() {
        return (


            <div>

                <nav>
                    <div className="nav-wrapper  center-align">

                        <a clasName="brand-logo" >Bit People</a>
                        <ul className="right hide-on-med-and-down">

                            <li><a onClick={this.props.hendler} ><i className={this.switchClass()}></i></a></li>
                            <li><a href="collapsible.html"><i className="fas fa-redo-alt"></i></a></li>

                        </ul>
                    </div>
                </nav >
                <form>
                    <label><i className="fas fa-search"></i></label>
                    <input onChange={this.props.filterUsr} className=" input-search" type="search" placeholder={` Search user`} />
                </form>
            </div>


        );
    }
}

export { Header };