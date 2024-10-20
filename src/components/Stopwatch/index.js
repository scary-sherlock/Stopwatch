import React, { Component } from 'react';
import './index.css';

class Stopwatch extends Component {
    state = {
        isRunning: false,
        elapsedTime: 0,
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    startStopwatch = () => {
        this.intervalId = setInterval(this.incrementTime, 1000);
        this.setState({ isRunning: true });
    };

    stopStopwatch = () => {
        clearInterval(this.intervalId);
        this.setState({ isRunning: false });
    };

    resetStopwatch = () => {
        clearInterval(this.intervalId);
        this.setState({ isRunning: false, elapsedTime: 0 });
    };

    incrementTime = () => {
        this.setState(prevState => ({ elapsedTime: prevState.elapsedTime + 1 }));
    };

    render() {
        const { isRunning, elapsedTime } = this.state;
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        const displayTime = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds
            }`;

        return (
            <div className="stopwatch">
                <h1 className="title">Stopwatch</h1>
                <div className="timer-container">
                    <img
                        src="https://cdn.icon-icons.com/icons2/1521/PNG/512/stopwatchhd_106058.png"
                        alt="stopwatch"
                        className="stopwatch-icon"
                    />
                    <h2>Timer</h2>
                </div>
                <div className="timer-display">
                    <h1 className="time">{displayTime}</h1>
                </div>
                <div className="controls">
                    <button
                        type="button"
                        className="control-button start-button"
                        onClick={this.startStopwatch}
                        disabled={isRunning}
                    >
                        Start
                    </button>
                    <button
                        type="button"
                        className="control-button stop-button"
                        onClick={this.stopStopwatch}
                        disabled={!isRunning}
                    >
                        Stop
                    </button>
                    <button
                        type="button"
                        className="control-button reset-button"
                        onClick={this.resetStopwatch}
                    >
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default Stopwatch;
