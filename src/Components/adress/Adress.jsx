import React, { Component } from 'react'

export default class Adress extends Component {

    state = {
        village: "Buxoro",
        button: "tap",
        active: true

    }
    myfun = ()=>{
      console.log("bosildi");
      if(this.state.active === true){
        this.setState({
          village: this.state.village="London",
          active: this.state.village= false

        })
      }else if(this.state.active === false ){
        this.setState({
          village: this.state.village="Buxoro",
          active: this.state.village= true
        })

      }
    }

  render() {
    return (
      <div>
        <h1>
            {this.state.village}
        </h1>
        <button className='butt'onClick={this.myfun}>{this.state.button} </button>
      </div>
    )
  }
}
