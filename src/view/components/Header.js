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




            <nav>
                <div class="nav-wrapper">

                    <span clasName="brand-logo">Bit People</span>
                    <ul class="right hide-on-med-and-down">

                        <li><a onClick={this.props.hendler} ><i className={this.switchClass()}></i></a></li>
                        <li><a href="collapsible.html"><i class="fas fa-redo-alt"></i></a></li>

                    </ul>
                </div>
            </nav >




        );
    }
}

export { Header };