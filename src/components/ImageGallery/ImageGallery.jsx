import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = imgName => {
  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem imgName={imgName} />
    </ul>
  );
};
