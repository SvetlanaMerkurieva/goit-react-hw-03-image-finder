import { Component } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    images: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      const KEY = '24078076-056bd2e530cc19b75a9dfc811';

      this.setState({ images: [] });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imgName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }));
    }
  }
  render() {
    return (
      <>
        {this.state.images &&
          this.state.images.map(image => {
            return (
              <li className={s.imageGalleryItem} key={image.id}>
                <img src={image.webformatURL} alt={this.props.imgName} />
              </li>
            );
          })}
      </>
    );
  }
}
