import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as playerRepository from "../repositories/playres-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    }else {
        response = await HttpResponse.noContent();
    }
    return response;
   
};

export const getPlayerByIdServer = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    }else {
        response = await HttpResponse.noContent();
    }
    return response;
};

export const creatPlayerService = async (player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0) {
        await playerRepository.insertPlayer(player);
        response = HttpResponse.created();  
    }else{
        response = await HttpResponse.badRequest();         
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted =  await playerRepository.deleteOnePlayer(id);

    if(isDeleted) {
        response = await HttpResponse.ok({menssage: "deleted"});
    }else {
        response = await HttpResponse.badRequest();
    }   

    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    
    const data = await playerRepository.findAndModifyPlayer(id, statistics);
    let response = null;

    if(Object.keys(data).length === 0){
        response = HttpResponse.badRequest();
    }else {

        response = await HttpResponse.ok(data);
    }
    return response;
};