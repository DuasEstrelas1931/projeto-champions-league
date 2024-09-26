import { Request, Response } from "express";
import * as services from "../services/clubs-service";


export const getClubs = async (req: Request, res: Response) => {
    const response = await services.getClubService();

    res.status(response.statusCode).json(response.body);
}