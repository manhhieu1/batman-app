export interface ICardItem {
  name: string;
  description: string;
  image: string;
  age?: number;
  gender: string
}
export interface User {
  birthday: string
  fullName: string
  gender: 'male' | 'female'
  url: string
  userId: string
}

export interface ErrorResponse {
  error: {
    errors: Array<{
      message: string
    }>
    message?: string
  }
}
