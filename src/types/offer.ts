export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: LocationType;
}

export type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  city: CityType;
  location: LocationType;
}

export type CurrentOfferType = OfferType & {
  images: string[];
  description: string;
  goods: string[];
  host: HostType;
  bedrooms: number;
  maxAdults: number;
}
