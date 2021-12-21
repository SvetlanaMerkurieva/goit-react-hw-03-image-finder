import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
/*import { LoadMoreBtn } from '../Button/Button';
import { Modal } from '../Modal/Modal';*/
import s from './App.module.css';

class App extends Component {
  state = {
    imgName: '',
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />
      </div>
    );
  }
}

export default App;
