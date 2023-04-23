import { logger } from "../../utils/logger"
import { networkDelay } from "../../utils/delay"

import { Cat } from "."
import { cats } from "./data"

export async function find(req: FindRequest): Promise<FindResponse> {
    logger.log('find', { req })
    
    await networkDelay()
    
    const { skip = 0, limit = 5 } = req

    const res =  {
        data: [...cats.values()].slice(skip, Math.min(skip + limit, cats.size)),
        pageInfo: {
            skip,
            limit,
            total: cats.size,
        }
    }

    console.log('find', { res })
    return res
}

export interface FindRequest {
    skip?: number,
    limit?: number
}

export interface FindResponse {
    data: Cat[],
    pageInfo: {
        skip: number,
        limit: number,
        total: number,
    }
}