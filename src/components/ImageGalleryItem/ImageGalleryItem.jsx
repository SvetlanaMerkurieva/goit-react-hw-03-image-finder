import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className={s.imageGalleryItem} key={image.id}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};
