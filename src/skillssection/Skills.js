import React, { Component } from 'react';
import HTML from '../images/HTML5.png';
import CSS from '../images/css.png';
import PHP from '../images/php.png';
import JQ from '../images/JQ.png';
import MYSQL from '../images/mysql.png';
import JS from '../images/js.png';
import BS from '../images/BS.png';
import RJ from '../images/react.png';
import C from '../images/c.png';
import PY from '../images/py.png';
import PS from '../images/ps.svg';
import XD from '../images/xd.png';
import DW from '../images/dw.png';
import AE from '../images/ae.svg';
import SOL from '../images/sol.png';
export default class Skills extends Component {
    constructor() {
        super();
        this.state = {
            scrolled : false,
          
            };
        }
    componentDidMount() {
        window.addEventListener('scroll',() => {
            const isTop = window.scrollY < 1290;
            if(isTop !== true){
                this.setState({scrolledv : true});
            } 
            else
            {
                this.setState({scrolledv : false});
            }
        });
    }
        componentWillUnmount() {
            window.removeEventListener('scroll');
        }

    render() {
        
        return (
            <div id="Skills">
                <h1 className={this.state.scrolledv ? 'skills-title sk-ani' :'skills-title'}>Skills</h1>
                <div className="skills-a-a-a-a">
                <div className={this.state.scrolledv ? 'skills-row-1' :'skills-row-1 roe-title'}>
                <div className="container" >
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={HTML} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={CSS} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={PHP} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={MYSQL} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div> 
                </div> 
                <div className={this.state.scrolledv ? 'skills-row-2 ' :'skills-row-2 roe-title'}>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={JS} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={JQ} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={BS} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa " style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={RJ} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div> 
                </div> 
                <div className={this.state.scrolledv ? 'skills-row-3' :'skills-row-3 roe-title'}>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx" >
                        <img src={C} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked" ></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={PY} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={PS} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={XD} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div> 
                </div> 
                <div className={this.state.scrolledv ? 'skills-row-4' :'skills-row-4 roe-title'}>
                <div className="container" >
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={AE} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={DW} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={SOL} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
               {/* <div className="container">
                    <div className="cardaa" style={styles.wellaaa}>
                        <div className="imgBx">
                        <img src={JQ} alt="Hii" className="card-imgaa"></img>
                        </div>
                        <div className="contentBX">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
        </div>*/} 
                </div> 
                </div>
                {/**Card ends*/}
            </div>
        )
    }
}
const styles = {

    wellaaa:{
      webkitBoxShadow: "1px 3px 1px #9E9E9E",
      mozBoxShadow: "1px 3px 1px #9E9E9E",
      boxShadow: "0 -15px 15px  rgba(255,255,255,0.05),inset 0 -15px 15px rgba(225,225,225,0.05), 0 15px 15px  rgba(0,0,0,0.3),inset 0 15px 15px rgba(0,0,0,0.3)"
  
    }
  
  };