import React, { Component } from 'react';
import './styles/index.css';
import dice from './images/icon-dice.svg';
import divider from './images/pattern-divider-desktop.svg';


class Advice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      advice: "Hier kommt dein Spruch des Tages"
    }

    this.getAdvice = this.getAdvice.bind(this);
  }

  getAdvice() {

    const randomNumber = Math.round(Math.random() * 225);
    const url = "https://api.adviceslip.com/advice/";

    fetch(url + randomNumber)
      .then(res => res.json())
      .then(
        (advice) => {
          this.setState({
            id: advice.slip.id,
            advice: advice.slip.advice
          });
        }
      )

  }

  render() {
    return (
      <div className="Advice">
        <section className="Advice-section">
          <div className='Advice-advice-container'>
            <div className='Advice-advice-container-inner'>
              <p className='Advice-advice-id'>Advice # {this.state.id}</p>
              <p className='Advice-advice-text'>{this.state.advice}</p>
              <img src={divider} alt='SVG Desktop Divider' className='Advice-divider'></img>
              <button className='Advice-advice-btn' onClick={this.getAdvice} ><img src={dice} alt='Dice Icon' className='Advice-advice-btn-icon' /></button>
            </div>

          </div>
        </section>
      </div>
    );
  }
}
export default Advice;
