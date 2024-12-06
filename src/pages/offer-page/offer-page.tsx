import {Header} from '../../components/header/header.tsx';
import {OfferMap} from '../../components/offer-map/offer-map.tsx';
import {NearPlaces} from '../../components/near-places/near-places.tsx';
import {OfferGallery} from '../../components/offer-gallery/offer-gallery.tsx';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {OfferType} from '../../types/offer.ts';
import {useParams} from 'react-router';

interface OfferPageProps {
  offers: OfferType[];
}

export function OfferPage({offers}: Readonly<OfferPageProps>) {
  const {id} = useParams();
  const offer = offers.find((element) => element.id === id) as OfferType;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery/>
          </div>
          <div className="offer__container container">
            <OfferDetails offer={offer}/>
          </div>
          <OfferMap/>
        </section>
        <div className="container">
          <NearPlaces/>
        </div>
      </main>
    </div>
  );
}
