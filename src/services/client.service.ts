import { EpicGamesMapperHelper } from "../helpers/mappers/epic-games.mapper";
import { GameCacheDocumentInterface } from "../interfaces/cache.interface";
import { Element } from "../interfaces/client.interface";

import { EpicGamesOutput } from "../outputs/epic-games/client";

import { logger } from "../config/logger";

export class ClientService {
    private epicgames: EpicGamesOutput;

    constructor() {
        this.epicgames = new EpicGamesOutput();
    }

    public async getEpicGamesData(): Promise<GameCacheDocumentInterface[] | undefined> {
        try {
            const data: Element[] = await Object(this.epicgames.getData());
            const filteredElements: Element[] = this.filterElements(data);
            const mappedElements: GameCacheDocumentInterface[] = EpicGamesMapperHelper.map(filteredElements);
            return mappedElements;
        } catch (error) {
            logger.error("Error while calling Epic Games API", error);
        }
    }

    private filterElements(data: Element[]): Element[] {
        return data.filter(filteredGame => this.isFreeGame(filteredGame));
    }

    /**
     * For each received game, check if it is free or not, by checking if the `discountPercentage` is equal to 0.
     * 
     * @param filteredGame The game to check if it's free.
     * @returns true if the game is free, false if not.
     */
    private isFreeGame(filteredGame: Element): boolean {
        // If the game is currently free, then return true.
        const isCurrentlyFree = filteredGame.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.discountSetting?.discountPercentage === 0;
        
        // If the game isn't free, with a boolean to false, then check if it'll be free in the future.
        // If is, return true, if not, return false.
        if (!isCurrentlyFree) {
            return filteredGame.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.discountSetting?.discountPercentage === 0;
        }

        // If the game is free, return true. In any case.
        return isCurrentlyFree;
    }
}