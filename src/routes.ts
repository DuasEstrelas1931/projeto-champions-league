import { Router } from "express";
import * as PlayersContollers from "./controllers/players-controllers";
import * as ClubsContrillers from "./controllers/clubs-controllers";
const router = Router();

router.get("/players", PlayersContollers.getPlayer);
router.post("/players", PlayersContollers.postPlayer);
router.delete("/players/:id", PlayersContollers.deletePlayer);
router.patch("/players/:id", PlayersContollers.updatePlayer);
router.get("/players/:id", PlayersContollers.getPlayerById );

router.get("/clubs", ClubsContrillers.getClubs)

export default router;
