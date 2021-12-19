import { Component } from 'react';

import s from '../Button/Button.module.css';

export class Button extends Component {
  state = {};

  render() {
    return (
      <button type="button" className={s.button} /*onClick={}*/>
        <span className={s.label}>Загрузить еще</span>
      </button>
    );
  }
}
