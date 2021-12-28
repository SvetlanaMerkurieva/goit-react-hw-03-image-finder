import { Component } from 'react';
/*import axios from 'axios';*/
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { LoaderHere } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import s from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    largeImage: '',
    page: 1,
    loading: false,
    visible: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      this.setState({ images: [], loading: true });

      const KEY = '24078076-056bd2e530cc19b75a9dfc811';
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.props.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет изображений по запросу ${this.props.imgName}`),
          );
        })
        .then(images =>
          this.setState({
            images: images.hits,
            visible: true,
          }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    if (
      prevProps.imgName === this.props.imgName &&
      prevState.page !== this.state.page
    ) {
      const KEY = '24078076-056bd2e530cc19b75a9dfc811';

      this.setState({ loading: true, visible: false });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(images =>
          this.setState(prevState => ({
            images: prevState.images.concat(images.hits),
            visible: true,
          })),
        )
        .finally(() => this.setState({ loading: false }));
    }
  }
  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  onOpenModal = imageId => {
    const currentImage = this.state.images.find(image => image.id === imageId);
    this.setState({ largeImage: currentImage.largeImageURL, showModal: true });
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, loading, visible, error } = this.state;

    return (
      <div className={s.content}>
        <ul className={s.imageGallery}>
          {error && <div>{error.message}</div>}
          {images &&
            images.map(image => (
              <ImageGalleryItem image={image} onOpenModal={this.onOpenModal} />
            ))}
        </ul>
        {visible && <Button onClick={this.onButtonClick} />}
        {loading && <LoaderHere />}
        {this.state.showModal && (
          <Modal
            imageLarge={this.state.largeImage}
            onClose={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}
/*const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '24078076-056bd2e530cc19b75a9dfc811',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});
async function fetchImages(q = '', page = 1) {
  const params = { q, page };
  try {
    const { data } = await getImages('', { params });

    return data;
  } catch (error) {
    alert(`Нет результатов по запросу ${q}`);
  }
}*/
