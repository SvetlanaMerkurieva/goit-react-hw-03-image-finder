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
      fetch(
        `https://pixabay.com/api/?key=${KEY}&q=${this.props.imgName}&per_page=12&page=${this.state.page}`,
      )
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }));
    }
    console.log(this.state.images);
  }
  render() {
    return (
      <>
        {this.state.images &&
          this.state.images.map(image => {
            return (
              <li className={s.imageGalleryItem}>
                <img src={image.webformatURL} alt={this.props.imgName} />
              </li>
            );
          })}
      </>
    );
  }
}
