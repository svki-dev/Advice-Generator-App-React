import React, { Component } from 'react';
import './styles/index.css';
import dice from './images/icon-dice.svg';
import divider from './images/pattern-divider-desktop.svg';


class Advice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      advice: "Hier kommt dein Spruch des Tages",
      loading: false
    }

    this.getAdvice = this.getAdvice.bind(this);
  }

  getAdvice() {
    this.setState({ loading: true });
    const id = Math.floor(Math.random() * 224) + 1;
    const baseUrl = "https://api.adviceslip.com/advice/";
    const requestUrl = `${baseUrl}${id}?t=${Date.now()}`;

    fetch(requestUrl, { cache: 'no-store' })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((advice) => {
        this.setState({
          id: advice.slip.id,
          advice: advice.slip.advice
        });
      })
      .catch(() => {
        this.setState({
          id: 0,
          advice: 'Fehler beim Laden. Bitte erneut versuchen.'
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      })
  }

  render() {
    return (
      <div className="Advice">
        <section className="Advice-section">
          <div className='Advice-advice-container'>
            <div className='Advice-advice-container-inner'>
              <p className='Advice-advice-id'>Advice # {this.state.id}</p>
              <p className='Advice-advice-text' aria-live='polite'>{this.state.advice}</p>
              <img src={divider} alt='SVG Desktop Divider' className='Advice-divider'></img>
              <button className='Advice-advice-btn' onClick={this.getAdvice} disabled={this.state.loading} aria-busy={this.state.loading} ><img src={dice} alt='Dice Icon' className='Advice-advice-btn-icon' /></button>
            </div>

          </div>
        </section>
      </div>
    );
  }
}
export default Advice;
