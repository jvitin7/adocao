import { Request, Response } from "express";

import { Dog } from "../models/Dog";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (request: Request, response: Response) => {
  let list = Dog.getAll();

  response.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos",
      background: "banner-all.png",
    },
    list,
  });
};

export const male = (request: Request, response: Response) => {
  let list = Dog.getFromGender("Macho");

  response.render("pages/page", {
    menu: createMenuObject("male"),
    banner: {
      title: "Macho",
      background: "banner-male.png",
    },
    list,
  });
};

export const female = (request: Request, response: Response) => {
  let list = Dog.getFromGender("Fêmea");

  response.render("pages/page", {
    menu: createMenuObject("female"),
    banner: {
      title: "Fêmea",
      background: "banner-female.png",
    },
    list,
  });
};
