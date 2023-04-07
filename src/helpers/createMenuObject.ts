type MenuOptions = "" | "all" | "male" | "female";

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    male: false,
    female: false,
  };

  if (activeMenu !== "") {
    returnObject[activeMenu] = true;
  }

  return returnObject;
};
