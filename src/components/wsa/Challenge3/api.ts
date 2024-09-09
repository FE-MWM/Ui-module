export type User = {
  call: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {};
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: string;
  picture: {};
  registered: {};
};

export type FetchDataResponse = {
  results: User[];
};

export const fetchData = async (page: number): Promise<FetchDataResponse> => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=10`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
