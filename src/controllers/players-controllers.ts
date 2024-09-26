import {Request, response, Response} from "express"
import * as services from "../services/players-services";
import { badRequest } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";
import { HttpResponse } from "../models/http-helper-model";



export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await services.getPlayerService();
  
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await services.getPlayerByIdServer(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
// post
export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await services.creatPlayerService(bodyValue);

  if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }else {
    const response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }

};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await services.deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
  
  };

export const updatePlayer = async (req: Request, res: Response)  => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body;
  const httpResponse  = await services.updatePlayerService(id, bodyValue);

  res.status(await httpResponse.statusCode).json(await httpResponse.body)
  
}

