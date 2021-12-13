import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { Modal } from '../Modal/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
      </div>
    );
  }
}

export default App;
