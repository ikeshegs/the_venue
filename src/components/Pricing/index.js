import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';

import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {

    state = {
        prices:[5000,15000,25000],
        positions:['Regular','VIP','VVIP'],
        desc:[
            'Integer tristique, nisl quis hendrerit pellentesque, libero sapien fermentum mi, ac volutpat ipsum purus nec urna. Nunc egestas nulla sit amet velit posuere gravida.',
            'Cras ornare a nisi a convallis. Suspendisse id velit id sem hendrerit interdum. Suspendisse lobortis nulla eget euismod fringilla.',
            'Fusce id felis rhoncus, dapibus felis a, accumsan diam. Etiam tempor ornare velit. Nulla eget ligula sit amet turpis vestibulum commodo a semper leo.'
        ],
        linkto: ['http://sales/r', 'http://sales/v', 'http://sales/vv'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(

            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>N{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                alt="icon_button"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
            
        ))
    )


    render() {
        return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {this.showBoxes()}
                </div>

            </div>
        </div>
        )
    }
}
