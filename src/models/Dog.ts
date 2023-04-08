type DogGender = "Macho" | "Fêmea";

type Dog = {
  gender: DogGender;
  image: string;
  name: string;
  color: string;
};

const data: Dog[] = [
  {
    gender: "Fêmea",
    image: "border-collie.png",
    name: "Border Collie",
    color: "Preto",
  },
  {
    gender: "Macho",
    image: "",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
  },
  {
    gender: "Macho",
    image: "",
    name: "Labrador-retriever",
    color: "Branco",
  },
  {
    gender: "Fêmea",
    image: "",
    name: "Zwergspitz",
    color: "Amarelo",
  },
  {
    gender: "Macho",
    image: "",
    name: "Husky Siberiano",
    color: "Branco e Preto",
  },
  {
    gender: "Macho",
    image: "",
    name: "Golden Retriever",
    color: "Amarelo",
  },
  {
    gender: "Fêmea",
    image: "",
    name: "Poodle",
    color: "Branco",
  },
  {
    gender: "Macho",
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
  getFromGender: (type: DogGender): Dog[] => {
    return data.filter((item) => item.gender === type);
  },

  // Filter dog by name
  getFromName: (name: string): Dog[] => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};
