export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  emailVerified: boolean;
  image: string;
};

export type ApartmentType = {
  _id: string;
  title: string;
  description: {
    details: string;
    adults: number;
    duration: string;
    rooms: number;
  };
  location: {
    address: string;
    city: string;
    country: string;
  };
  price: number;
  images: string[];
  hostId: string;
  rating: number;
  numReviews: number;
};
