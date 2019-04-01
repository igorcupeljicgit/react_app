import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        ;
    }
    // onClickHandler = (props) => {
    //     return props.hendler;
    // }
    render() {
        return (




            <nav>
                <div class="nav-wrapper">

                    <span clasName="brand-logo">Bit People</span>
                    <ul class="right hide-on-med-and-down">

                        <li><a onClick={this.props.hendler} ><i class="fas fa-th"></i></a></li>
                        <li><a href="collapsible.html"><i class="fas fa-redo-alt"></i></a></li>

                    </ul>
                </div>
            </nav>




        );
    }
}

export { Header };