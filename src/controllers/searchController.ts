import { Request, Response } from "express";

import { Dog } from "../models/Dog";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (request: Request, response: Response) => {
  let query: string = request.query.search as string;

  if (!query) {
    response.redirect("/");
    return;
  }

  let list = Dog.getFromName(query);

  response.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
