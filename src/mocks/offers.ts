import {Offer} from '../types/offer.ts';

export const offers: Offer [] = [
  {
    id: '1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    image: 'img/apartment-01.jpg',
    rating: 4,
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    image: 'img/room.jpg',
    rating: 4,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    image: 'img/apartment-02.jpg',
    rating: 4,
    isFavorite: false,
    isPremium: false,
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    image: 'img/apartment-02.jpg',
    rating: 5,
    isFavorite: false,
    isPremium: true,
    city: {
      name: 'Amsterdam'
    }
  }
];
