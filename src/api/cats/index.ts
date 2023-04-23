import { create } from "./create"
import { _delete } from "./delete"
import { find } from "./find"
import { get } from "./get"
import { listBreeds } from "./list-breeds"

export type { CreateRequest, CreateResponse } from "./create"
export type { DeleteRequest, DeleteResponse } from "./delete"
export type { FindRequest, FindResponse } from "./find"
export type { GetRequest, GetResponse } from "./get"
export type { ListBreedsRequest, ListBreedsResponse } from "./list-breeds"

export const catsApi = {
    get,
    find,
    create,
    listBreeds,
    delete: _delete,
}

export interface Cat {
    id: string
    name: string
    breedId: string
}

export interface CatInput {
    name: string
    breedId: string
}

export interface Breed {
    id: string
    name: string
}