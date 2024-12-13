import {Review} from '../types/reviews.ts';

export const reviews: Review [] = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4
  },
  {
    id: '2',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Karen Russell',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5
  },
  {
    id: '3',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Emily Read',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    rating: 3
  }
];
