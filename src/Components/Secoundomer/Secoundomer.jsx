import React, { Component } from 'react'

export default class  extends Component {

    state={
        hour: 0,
        minute: 0,
        secound:0,
        interval:[],
        intervalStart:''
    }


    start =()=>{
      let {hour, minute, secound,intervalStart}= this.state
      intervalStart = setInterval(() => {
        if(secound <= 59){
          secound++
          this.setState({
            secound: secound,
            intervalStart:intervalStart
          });
          if(secound === 60){
            minute++
            secound = 0
            this.setState({
              minute:minute,
              secound: secound,
              intervalStart:intervalStart
            });
            if(minute === 60){
              hour++
              minute = 0
              secound =0
              this.setState({
                hour:hour,
                minute: minute,
                secound:secound,
                intervalStart:intervalStart
              });
            }
          }
          
        }

      }, 100)
    }
    stop = () => {
        let {intervalStart} = this.state


        clearInterval(intervalStart)


    }
    reset = ()=>{
      let {hour, minute, secound}= this.state
      this.setState({
        hour:0,
        minute: 0,
        secound:0,

      });
      

    }
    interval =()=>{
      let {hour, minute, secound, interval}= this.state;
      let obj={
        hour: hour,
        minute: minute,
        secound:secound
      };
      interval.push(obj)
      console.log(obj);
      this.setState({
        interval: interval
      })
    }

  render() {
    const {hour, minute, secound}= this.state
    return (
      <div className='container'>
        <div className="wrap">
            <h1>{hour}:{minute}:{secound}</h1>
            <div className="btns">
              <button onClick={this.start}>start</button>
              <button onClick={this.stop}>stop</button>
              <button onClick={this.interval}>interval</button>
              <button onClick={this.reset}>reset</button>
            </div>
            <div className="inter">
              {this.state.interval.map((item, index)=>
                <p>{item.hour}:{item.minute}:{item.secound}</p>
              )}
            </div>
        </div>
      </div>
    )
  }
}
