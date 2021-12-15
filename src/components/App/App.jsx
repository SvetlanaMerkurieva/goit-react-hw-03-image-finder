import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMoreBtn } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    imgName: '',
    showModal: false,
  };
  handleFormSubmit = imgName => {
    this.setState({ imgName });
    console.log(imgName);
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        <ImageGallery imgName={this.state.imgName} />
        <LoadMoreBtn />
      </div>
    );
  }
}

export default App;
