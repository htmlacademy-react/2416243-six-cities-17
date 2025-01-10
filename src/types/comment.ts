export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type CommentType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type CommentToSendType = {
  offerId: string;
  comment: string;
  rating: number;
}
