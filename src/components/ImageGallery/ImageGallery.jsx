import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { LoaderHere } from '../Loader/Loader';
import s from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      const KEY = '24078076-056bd2e530cc19b75a9dfc811';

      this.setState({ images: [] });
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(images =>
          this.setState({
            images: images.hits,
          }),
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading } = this.state;

    return (
      <ul className={s.imageGallery}>
        {images && images.map(image => <ImageGalleryItem image={image} />)}
        {images !== [] && <Button />}
        {loading && <LoaderHere />}
      </ul>
    );
  }
}
