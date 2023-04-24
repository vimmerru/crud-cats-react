import { StateCreator } from 'zustand'

import { Cat, Breed, CatsStore, DEFAULT_FIRST, DEFAULT_ROWS, Page } from '.'
import { catsApi } from '../../api/cats'
import { showError } from '../toasts'

export const createCatsSlice: StateCreator<
    CatsStore,
    [["zustand/immer", never]],
    [],
    CatsSlice
> = (set, get) => ({
    isCatsLoading: false,

    async loadCats(page?: Page) {
        try {
            set(draft => { draft.isCatsLoading = true })

            const { first: skip, rows: limit } = page
                ?? get().catsPage
                ?? { first: DEFAULT_FIRST, rows: DEFAULT_ROWS }

            let [catsRes, breedsRes] = await Promise.all([
                catsApi.find({ skip, limit }),
                catsApi.listBreeds({}),
            ])

            const breedsMap = breedsRes.data.reduce(
                (map, breed) => ({ ...map, [breed.id]: breed }),
                {} as Record<string, Breed>
            )

            const cats = catsRes.data.map(c => ({
                id: c.id,
                name: c.name,
                breed: breedsMap[c.breedId]
            }))

            set(draft => {
                draft.cats = cats
                draft.totalCats = catsRes.pageInfo.total

                draft.catsPage = {
                    first: catsRes.pageInfo.skip,
                    rows: catsRes.pageInfo.limit,
                }
            })
        } catch (e) {
            showError('Unable load cats', e)
        } finally {
            set(draft => { draft.isCatsLoading = false })
        }
    },

    selectCat(cat) {
        set(draft => { draft.selectedCat = cat })
    },
})

export interface CatsSlice {
    cats?: Cat[],
    selectedCat?: Cat,
    totalCats?: number,
    catsPage?: Page,
    isCatsLoading: boolean,

    loadCats: (page?: Page) => Promise<void>,
    selectCat: (cat?: Cat) => void,
}
