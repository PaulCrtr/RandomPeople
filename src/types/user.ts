export type User = {
  gender: "male" | "female";
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  dob: {
    date: string;
  };
};
