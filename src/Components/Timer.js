import React, { Component } from 'react'
import Number from './Number';

export default class Timer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        // update every second
        this.interval = setInterval(() => {
          const date = this.calculateCountdown(this.props.date);
          date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    
        // clear countdown when date is reached
        if (diff <= 0) return false;
    
        const timeLeft = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0
        };
    
        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
          timeLeft.years = Math.floor(diff / (365.25 * 86400));
          diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
          timeLeft.days = Math.floor(diff / 86400);
          diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
          timeLeft.hours = Math.floor(diff / 3600);
          diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
          timeLeft.min = Math.floor(diff / 60);
          diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        timeLeft.days = this.addLeadingZeros(timeLeft.days)
        timeLeft.hours = this.addLeadingZeros(timeLeft.hours)
        timeLeft.min = this.addLeadingZeros(timeLeft.min)
        timeLeft.sec = this.addLeadingZeros(timeLeft.sec)
    
        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
          value = '0' + value;
        }
        return value;
    }
    render() {
        const {days, hours, min, sec} = this.state;
        const {width, height, className, style, titleElement} = this.props;
        return (
        <div 
            className={`timerContainer ${className}`}
            style={{
                width,
                ...style
            }}
            >
            <div>
                {
                    titleElement
                }
            </div>
            <div className="timeContainer">
                <Number height={height} number={days} text="Tage" />
                <div style={{fontSize: height}} className="doublePoints">:</div>
                <Number height={height} number={hours} text="Stunden" />
                <div style={{fontSize: height}} className="doublePoints">:</div>
                <Number height={height} number={min} text="Minuten" />
                <div style={{fontSize: height}} className="doublePoints">:</div>
                <Number height={height} number={sec} text="Sekunden" />
            </div>
        </div>
        )
    }
}

const getCurrentYear = () => {
    const currentDate = new Date()
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return year
}

Timer.defaultProps = {
    date: `${getCurrentYear()}-05-03T00:00:00`,
    height: "10vw",
    width: "",
    className: "",
    style: {},
    titleElement: <div></div>
}