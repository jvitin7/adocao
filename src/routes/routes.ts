import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/male", PageController.male);
router.get("/female", PageController.female);
router.get("/search", SearchController.search);

export default router;
