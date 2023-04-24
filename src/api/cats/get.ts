
import { networkDelay } from "../../utils/delay"
import { logger } from "../../utils/logger"

import { Cat } from "."
import { cats } from "./data"

export async function get(req: GetRequest): Promise<GetResponse> {
    logger.log('get', { req })
   
    await networkDelay()

    const cat = cats.get(req.id)

    if (!cat) {
        const err = Error('Cat not found')
        logger.log('get', { err })
        throw err
    }

    const res = { data: cat }
    console.log('get', { res })
    return res
}

export interface GetRequest {
    id: string
}

export interface GetResponse {
    data: Cat
}