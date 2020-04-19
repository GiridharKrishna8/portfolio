import React, { Component } from 'react';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            scrolled : false,
          
            };
        }
    componentDidMount() {
        window.addEventListener('scroll',() => {
            const isTop = window.scrollY < 580;
            if(isTop !== true){
                this.setState({scrolledf : true});
            } 
            else
            {
                this.setState({scrolledf : false});
            }
        });
    }
        componentWillUnmount() {
            window.removeEventListener('scroll');
        }
    
    render() {
        return (
            <div id="About">
                <div className={this.state.scrolledf ? 'About-Hero-Img ' :'About-Hero-Img ani-about'}></div>
                <div className="About-data">
                <h1 className={this.state.scrolledf ? 'about-head ani' :'about-head'}>About Me</h1>
                <h3 className={this.state.scrolledf ? 'About-text-main ania' :'About-text-main'}>HI I Am  <span style={{'color': 'red' }}>Giridhar Krishna Kolavasi</span> Fugiat qui anim ex do veniam elit dolor consectetur. Ad deserunt irure sunt consectetur non deserunt quis sunt voluptate aute ea elit. Duis enim eiusmod laboris occaecat cupidatat ad est culpa deserunt qui pariatur est.Dolore fugiat elit nisi ea dolor Lorem culpa. Minim nulla aliquip tempor culpa et pariatur qui eu aute sit proident. Aliquip culpa non sunt incididunt sit duis cupidatat. Occaecat quis ut cupidatat aliquip sint quis consectetur elit nostrud eu ut. Adipisicing ex sint ea tempor nisi aute. Quis elit et quis culpa.</h3>
                </div>
            </div>
        )
    }
}
