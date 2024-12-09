import {OfferType} from '../types/offer.ts';

export const offers: OfferType [] = [
  {
    id: '1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    previewImage: 'img/apartment-01.jpg',
    rating: 4,
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    previewImage: 'img/room.jpg',
    rating: 4,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    }
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    rating: 4,
    isFavorite: false,
    isPremium: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    }
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    rating: 5,
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    }
  }
];
