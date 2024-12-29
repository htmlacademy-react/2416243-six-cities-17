import {MAX_IMAGES_PER_OFFER} from '../../const.ts';

interface OfferGalleryProps {
  images: string[];
}

export function OfferGallery({images}: Readonly<OfferGalleryProps>) {
  return (
    <div className="offer__gallery">
      {images.slice(0, MAX_IMAGES_PER_OFFER).map((image) => (
        <div className="offer__image-wrapper" key={image}>
          <img className="offer__image" src={image} alt="Photo studio"/>
        </div>
      ))}
    </div>
  );
}
