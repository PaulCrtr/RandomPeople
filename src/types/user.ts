export type User = {
  localCustomId?: number;
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
  age: number;
};

export type UsersSort = {
  byAge: () => void;
  byGender: () => void;
  byABC: () => void;
};
