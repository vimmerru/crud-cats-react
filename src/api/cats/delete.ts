import { networkDelay } from "../../utils/delay";
import { logger } from "../../utils/logger";
import { cats } from "./data";

export async function _delete(req: DeleteRequest): Promise<DeleteResponse> {
    logger.log('delete', { req })
    
    await networkDelay()

    if (!cats.delete(req.id)) {
        const err = Error('Not found')
        logger.log('delete', { err })
        throw err
    }

    logger.log('delete', { cats })

    const res = {}
    logger.log('delete', { res })
    return res
}

export interface DeleteRequest {
    id: string
}

export interface DeleteResponse {
}