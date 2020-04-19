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
                <div className="proj-gall">
                <div className="card" style={styles.wellaaa}>
                    <div className="card-img-top" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="hov-eff">
                            <a href="#" className="btn btn-primary"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="card" style={styles.wellaaa}>
                    <img src={P1} className="card-img-top" alt="..."/>
                     <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="hov-eff">
                            <a href="#" className="btn btn-primary"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                </div>
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