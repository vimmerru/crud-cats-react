import { Breed } from "."
import { networkDelay } from "../../utils/delay"
import { logger } from "../../utils/logger"

export async function listBreeds(req: ListBreedsRequest): Promise<ListBreedsResponse> {
    logger.log('listBreeds', { req })
    
    await networkDelay()

    const res = {
        data: [{
            id: '1',
            name: 'Scottish Fold'
        }, {
            id: '2',
            name: 'Persian'
        }]
    }

    logger.log('listBreeds', { res })
    return res
}

export interface ListBreedsRequest {
}

export interface ListBreedsResponse {
    data: Breed[]
}