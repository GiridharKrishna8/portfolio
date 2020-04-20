import React, { Component } from 'react'

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            scrolledva : false,
          
            };
        }
    componentDidMount() {
        window.addEventListener('scroll',() => {
            const isTop = window.scrollY < 2550;
            if(isTop !== true){
                this.setState({scrolledvaa : true});
            } 
            else
            {
                this.setState({scrolledvaa : false});
            }
        });
    }
        componentWillUnmount() {
            window.removeEventListener('scroll');
        }


    render() {
        return (
            <div id="Contact">
                <h1 className={this.state.scrolledvaa ? 'project-title pr-ani' :'project-title'}>Contact Me</h1>
                    <div className="pos-ico-1">
                        <a href="https://www.linkedin.com/in/kolavasi-giridharkrishna-21041998/" target="_blank" className="social-icon-1"><i class="fa fa-envelope fa-x" aria-hidden="true"></i><span className="mail">k.giridharkrishna@gmail.com</span></a>
                    </div>
                    <center>
                    <div class="alig">
                     <div className="pos-ico-2">
                        <a href="https://www.linkedin.com/in/kolavasi-giridharkrishna-21041998/" target="_blank" className="social-icon-2"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                    <div className="pos-ico-3">
                        <a href="https://www.linkedin.com/in/kolavasi-giridharkrishna-21041998/" target="_blank" className="social-icon-3"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div className="pos-ico-4">
                        <a href="https://www.linkedin.com/in/kolavasi-giridharkrishna-21041998/" target="_blank" className="social-icon-3"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </div>
                    <div className="pos-ico-5">
                        <a href="https://www.linkedin.com/in/kolavasi-giridharkrishna-21041998/" target="_blank" className="social-icon-3 ins"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    </div>
                    </center>
            </div>
        )
    }
}
