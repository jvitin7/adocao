type DogGender = "Male" | "Female";

type Dog = {
  gender: DogGender;
  image: string;
  name: string;
  color: string;
};

const data: Dog[] = [
  {
    gender: "Male",
    image: "",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
  },
  {
    gender: "Male",
    image: "",
    name: "Labrador-retriever",
    color: "Branco",
  },
  {
    gender: "Female",
    image: "",
    name: "Zwergspitz",
    color: "Amarelo",
  },
  {
    gender: "Male",
    image: "",
    name: "Husky Siberiano",
    color: "Branco e Preto",
  },
  {
    gender: "Male",
    image: "",
    name: "Golden Retriever",
    color: "Amarelo",
  },
  {
    gender: "Female",
    image: "",
    name: "Poodle",
    color: "Branco",
  },
  {
    gender: "Male",
    image: "",
    name: "Bulldog",
    color: "Branco e Amarelo",
  },
];

export const Dog = {
  // Get all dogs
  getAll: (): Dog[] => {
    return data;
  },

  // Filter dogs by gender
  getFromType: (type: DogGender): Dog[] => {
    return data.filter((item) => item.gender === type);
  },

  // Filter dog by name
  getFromName: (name: string): Dog[] => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};
