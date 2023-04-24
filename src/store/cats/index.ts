import { z } from "zod"
import { create } from "zustand"
import { immer } from 'zustand/middleware/immer'

import { CatsSlice, createCatsSlice } from "./cats"
import { AddCatSlice, createAddCatSlice } from "./add"
import { DeleteCatSlice, createDeleteCatSlice } from "./delete"

// TODO: move to common place
export const ROWS_PER_PAGE = [3, 5, 10, 25]
export const DEFAULT_FIRST = 0
export const DEFAULT_ROWS = 10

export const useCatsStore = create<CatsStore>()(
    immer((...a) => ({
        ...createCatsSlice(...a),
        ...createAddCatSlice(...a),
        ...createDeleteCatSlice(...a),
    })))

export interface CatsStore extends CatsSlice, AddCatSlice, DeleteCatSlice {}

export interface Cat {
    id: string
    name: string
    breed: Breed
}

export interface Breed {
    id: string
    name: string
}

export interface Page {
    first: number
    rows: number
}

export type CatInput = z.infer<typeof CatInputSchema>

export const CatInputSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    breedId: z.string().min(1, { message: 'Breed is required' }),
})