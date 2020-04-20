import React, { Component } from 'react';
import P1 from '../images/p1.png';
export default class Project extends Component {
    constructor() {
        super();
        this.state = {
            scrolledva : false,
          
            };
        }
    componentDidMount() {
        window.addEventListener('scroll',() => {
            const isTop = window.scrollY < 2001;
            if(isTop !== true){
                this.setState({scrolledva : true});
            } 
            else
            {
                this.setState({scrolledva : false});
            }
        });
    }
        componentWillUnmount() {
            window.removeEventListener('scroll');
        }

    render() {
        return (
            <div id="Project">
                <h1 className={this.state.scrolledva ? 'project-title pr-ani' :'project-title'}>Project's</h1>
                {/*End Of Project's */}
                <center>
                <div className="gal">
                <div className="proj-gall-1">
                <div className={this.state.scrolledva ? 'card' :'card pr-cad-ani'} style={styles.wellaaa}>
                    <div className="card-img-top-1" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">VIHUNG-2K18</h5>
                        <div className="hov-eff">
                        <p className="card-text">A Fest Website Designed By Using PHP, MYSQL, JAVASCRIPT, HTML, CSS</p>
                            <a href="https://github.com/Giridhar456/VIHUNG2K18" target="_blank" className="btn btn-primary "><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className={this.state.scrolledva ? 'card' :'card pr-cad-ani'} style={styles.wellaaa}>
                    <div className="card-img-top-2" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">Blockathon-2K19</h5>
                        <div className="hov-eff">
                        <p className="card-text">A National Level Hackathon Website For My College.Designed By Using HTML, CSS, JS,JQUERY</p>
                            <a href="https://github.com/Giridhar456/blockathon2k19.com" target="_blank" className="btn btn-primary "><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="proj-gall-1">
                <div className={this.state.scrolledva ? 'card' :'card pr-cad-ani'} style={styles.wellaaa}>
                    <div className="card-img-top-3" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">AVIATION-DAPP</h5>
                        <div className="hov-eff">
                        <p className="card-text">AviationSafety Application DevelopedUsing Ethereum BlockChain(DAPP)</p>
                            <a href="https://github.com/Giridhar456/Aviation-Safety-DAPP" target="_blank" className="btn btn-primary "><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className={this.state.scrolledva ? 'card' :'card pr-cad-ani'} style={styles.wellaaa}>
                    <div className="card-img-top-4" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">SUPPLYCHAIN-DAPP</h5>
                        <div className="hov-eff">
                        <p className="card-text">A Blockchain Enabled Supply Chain Management System For Dairy</p>
                            <a href="https://github.com/Giridhar456/Dairy-DAPP" target="_blank" className="btn btn-primary "><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="proj-gall-1">
                <div className={this.state.scrolledva ? 'card' :'card pr-cad-ani'} style={styles.wellaaa}>
                    <div className="card-img-top-5" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">CMS</h5>
                        <div className="hov-eff">
                        <p className="card-text">Application To Share Information & Material's Between Student,Faculty And Management </p>
                            <a href="http://ecempes.rf.gd/" target="_blank" className="btn btn-primary "><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className={this.state.scrolledva ? 'card' :'card pr-cad-ani'} style={styles.wellaaa}>
                    <div className="card-img-top-6" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                        <div className="hov-eff">
                        <p className="card-text">Affiliate-Marketing-Websites Developed For Fun</p>
                            <a href="https://github.com/Giridhar456/Affiliate-Marketing-Websites" target="_blank" className="btn btn-primary "><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </center>
                {/*End Of Project's */}
            
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