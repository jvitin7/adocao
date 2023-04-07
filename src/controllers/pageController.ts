import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (request: Request, response: Response) => {
  response.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos",
      background: "banner-all.png",
    },
  });
};

export const male = (request: Request, response: Response) => {
  response.render("pages/page", {
    menu: createMenuObject("male"),
    banner: {
      title: "Macho",
      background: "banner-male.png",
    },
  });
};

export const female = (request: Request, response: Response) => {
  response.render("pages/page", {
    menu: createMenuObject("female"),
    banner: {
      title: "Fêmea",
      background: "banner-female.png",
    },
  });
};
