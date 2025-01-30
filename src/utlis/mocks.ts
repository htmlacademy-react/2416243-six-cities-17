import {CommentsSlice} from '../types/state.ts';
import { faker } from '@faker-js/faker';
import {CurrentOfferType, OfferType} from '../types/offer.ts';
import {Cities} from '../const.ts';
import {UserData} from '../types/user-data.ts';

export const makeFakeComments = () : CommentsSlice => ({
  comments: new Array(5).fill(null).map(() => ({
    id: faker.string.uuid(),
    date: faker.date.past().toISOString(),
    user: {
      name: faker.internet.username(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.helpers.arrayElement([true, false]),
    },
    comment: faker.lorem.paragraph(),
    rating: faker.number.int({ min: 1, max: 5 }),
  }))
});

export const makeFakeOffer = (): OfferType => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence({min: 3, max: 5}),
  type: faker.lorem.word(),
  price: faker.number.int({ min: 100, max: 5000 }),
  previewImage: faker.image.avatar(),
  city: Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)],
  location: {
    latitude: faker.number.int(),
    longitude: faker.number.int(),
    zoom: faker.number.int({ min: 11, max: 15 }),
  },
  isFavorite: faker.helpers.arrayElement([true, false]),
  isPremium: faker.helpers.arrayElement([true, false]),
  rating: faker.number.int({ min: 1, max: 5 }),
});

export const makeFakeOffers = () : OfferType[] => new Array(30).fill(null).map(() => makeFakeOffer());

export const makeFakeCurrentOffer = (): CurrentOfferType => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence({min: 3, max: 5}),
  type: faker.lorem.word(),
  price: faker.number.int({ min: 100, max: 5000 }),
  previewImage: faker.image.avatar(),
  city: Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)],
  location: {
    latitude: faker.number.int(),
    longitude: faker.number.int(),
    zoom: faker.number.int({ min: 11, max: 15 }),
  },
  isFavorite: faker.helpers.arrayElement([true, false]),
  isPremium: faker.helpers.arrayElement([true, false]),
  rating: faker.number.int({ min: 1, max: 5 }),
  images: new Array(6).fill(null).map(() => faker.image.avatar()),
  description: faker.lorem.paragraph(),
  goods: new Array(5).fill(null).map(() => faker.lorem.word()),
  host: {
    name: faker.internet.username(),
    avatarUrl: faker.image.avatar(),
    isPro: faker.helpers.arrayElement([true, false]),
  },
  bedrooms: 5,
  maxAdults: 2,
});

export const makeFakeUser = (): UserData => ({
  email: faker.internet.email(),
  token: faker.string.uuid(),
  name: faker.internet.username(),
  avatarUrl: faker.image.avatar(),
  isPro: faker.helpers.arrayElement([true, false]),
});
