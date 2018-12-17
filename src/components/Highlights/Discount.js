import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';

export default class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }


    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }



    render() {
        return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                    onReveal={()=> this.porcentage()}
                >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
            
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 31st MARCH.</h3>
                        <p> Nullam sit amet libero pellentesque, condimentum arcu quis, luctus felis.Suspendisse potenti.Nulla vitae fermentum turpis, nec eleifend ex.Pellentesque placerat commodo mauris, a feugiat dui pretium vel.Morbi gravida erat a nisl placerat, quis semper lectus gravida.Aenean ex felis, maximus sit amet felis ut, scelerisque ultricies arcu.Vestibulum scelerisque magna sodales quam ultrices, blandit congue sem feugiat.</p>

                        <MyButton
                            text="Purchase tickets"
                            bck="#ffa800"
                            color="#fff"
                            link="http://google.com"
                        />

                    </div>
                </Slide>
            </div>
        </div>
        )
    }
}