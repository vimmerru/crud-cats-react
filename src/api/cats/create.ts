import { nanoid } from "nanoid";

import { networkDelay } from "../../utils/delay";
import { logger } from "../../utils/logger";

import { Cat, CatInput } from ".";
import { cats } from "./data";

export async function create(req: CreateRequest): Promise<CreateResponse> {
    logger.log('create', { req })
    
    await networkDelay()

    if (req.input.name === "error") {
        throw Error("Name shouldn't be error.")
    }

    const cat: Cat = {
        id: nanoid(),
        ...req.input,
    }

    cats.set(cat.id, cat)
    logger.log('create', { cats })

    const res = { data: cat }
    logger.log('create', { res })
    return res
}

export interface CreateRequest {
    input: CatInput,
}

export interface CreateResponse {
    data: Cat,
}