import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
/*import { LoadMoreBtn } from '../Button/Button';
import { Modal } from '../Modal/Modal';*/
import s from './App.module.css';
import { Modal } from '../Modal/Modal';

class App extends Component {
  state = {
    imgName: '',
    images: [],
    showModal: false,
  };

  handleImagesList = images => {
    this.setState({ images });
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
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
        <ImageGallery
          imgName={this.state.imgName}
          onChange={this.handleImagesList}
        />
        {this.state.showModal && (
          <Modal imageLarge={this.state.images.largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
