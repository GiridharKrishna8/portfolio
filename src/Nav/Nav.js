import React, { Component } from 'react';
import '../css/style.css';
import LOGO from '../images/logo.png';
import {Link} from "react-scroll";

class Nav extends Component {
    toggler = () => {
        this.state.navState ? this.setState({
            navState:false,
            navClass:"collapse navbar-collapse"
        }) : this.setState({
            navState:true,
            navClass:"collapse navbar-collapse show"
        })
    }

    constructor() {
        super();
        this.state = {
            scrolled : false,
            navState:false,
            navClass:"collapse navbar-collapse ",
            menus: [{
                id:1,
                text:"Home",
                url:'home',
            },{
                id:2,
                text:"About",
                url:'About',
            },{
                id:3,
                text:"Skills",
                url:'Skills',
            },{
                id:4,
                text:"Project's",
                url:'Project',
            },{
                id:4,
                text:"Contact",
                url:'Contact',
            }]
            };
        }
    componentDidMount() {
        window.addEventListener('scroll',() => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({scrolleda : true});
            } 
            else
            {
                this.setState({scrolleda : false});
            }
        });
    }
        componentWillUnmount() {
            window.removeEventListener('scroll');
        }
    render() {
        return (
                <nav className={this.state.scrolleda ? 'navbar navbar-expand-sm bg-theme text-white scrolled' :'navbar navbar-expand-sm bg-theme text-white'}>
                <Link to="/" className="navbar-brand ml-5">
                <img src={LOGO} className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.toggler} >
                    <span className="text-white"><i className="fa fa-bars"></i></span>    
                </button>
                <div className={this.state.navClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu => {
                            return(
                                <li key={menu.id} className="nav-item mr-5">
                                <Link
                                activeClass="active"
                                 to={menu.url}
                                 spy={true}
                                 smooth={true}
                                 offset={-70}
                                 duration= {500}
                                 className="nav-link text-white"> {menu.text}</Link>
                                </li>
                                                               
                              //  <a href={menu.url} className="mav-link text-white">{menu.text}</a>
                            );
                        })}
                    </ul>    
                </div>                
            </nav>
        )
    }
}
export default Nav;