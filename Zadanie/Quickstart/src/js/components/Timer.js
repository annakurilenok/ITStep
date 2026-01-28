/*import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date()};
    }

        componentDidMount() {
            this.timerId = setInterval(() => {
                this.setState({
                    time: new Date(),
                    color: 'rgb(0,0,0)'
                })
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerId);
        }

        componentDidUpdate(prevProps, prevState) {
            const rand = () => {
                return Math.floor(Math.random() * 256);
            }

            let color = `rgb(${rand()}, ${rand()}, ${rand()})`;

            // let seconds = this.time.date.getSeconds();

            if(prevState.time != this.state.time) {
                this.setState({
                    color: color
                })
            }
            
        }


    render() {
        return(
            <div className="timer">
                <h3 style={{color: this.state.color}}>{this.state.time.toTimeString()}</h3>
            </div>
        )
    }
}

export default Timer;*/

import { useState, useEffect } from "react";

export default function Timer() {

    const [time, setTime] = useState(new Date());
    const [color, setColor] = useState('rgb(0,0,0)');
    let timerId;

    useEffect(() => {
        timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
    });

    useEffect((prevTime) => {
        const rand = () => {
                return Math.floor(Math.random() * 256);
            }

            let color = `rgb(${rand()}, ${rand()}, ${rand()})`;

            if(prevTime != time) {
                setColor(color);
            }
    }, [time]);

    useEffect(() => {
        return() => {
            clearInterval(timerId);
        }
    });

    return(
            <div className="timer">
                <h3 style={{color: color}}>{time.toTimeString()}</h3>
            </div>
        )
}