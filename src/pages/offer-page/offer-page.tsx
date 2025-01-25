import {Header} from '../../components/header/header.tsx';
import {Map} from '../../components/map/map.tsx';
import {NearPlaces} from '../../components/near-places/near-places.tsx';
import {OfferGallery} from '../../components/offer-gallery/offer-gallery.tsx';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {OfferClickType, OfferHoverType, OfferType} from '../../types/offer.ts';
import {useParams} from 'react-router';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearestOffersAction} from '../../store/data-api-actions.ts';
import {useEffect} from 'react';
import {MAX_NEAREST_OFFERS} from '../../const.ts';
import {NotFoundPage} from '../not-found-page/not-found-page.tsx';
import {Helmet} from 'react-helmet-async';
import {getCurrentCity} from '../../store/city-slice/selectors.ts';
import {getCurrentOffer, getNearestOffers} from '../../store/offers-slice/selectors.ts';

interface OfferPageProps {
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
  activeCard: OfferType | undefined;
}

export function OfferPage({onOfferClick, onOfferHover, activeCard}: Readonly<OfferPageProps>) {
  const {id: currentId} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentId) {
      dispatch(fetchCurrentOfferAction(currentId));
      dispatch(fetchCommentsAction(currentId));
      dispatch(fetchNearestOffersAction(currentId));
    }
  }, [currentId, dispatch]);

  const currentCity = useAppSelector(getCurrentCity);
  const currentOffer = useAppSelector(getCurrentOffer);
  const nearestOffers = useAppSelector(getNearestOffers).slice(0, MAX_NEAREST_OFFERS);

  if (currentOffer) {
    return (
      <div className="page">
        <Helmet>
          <title>6 cities: {currentOffer.title}</title>
        </Helmet>
        <Header/>

        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <OfferGallery images={currentOffer.images}/>
            </div>
            <div className="offer__container container">
              <OfferDetails currentOffer={currentOffer}/>
            </div>
            <section className="offer__map map">
              <Map city={currentCity} offers={[...nearestOffers, currentOffer]} activeCard={activeCard}/>
            </section>
          </section>
          <div className="container">
            <NearPlaces offers={nearestOffers} onOfferClick={onOfferClick} onOfferHover={onOfferHover} currentOffer={currentOffer}/>
          </div>
        </main>
      </div>
    );
  }

  return <NotFoundPage/>;
}
