import { StateCreator } from 'zustand'

import { Breed, CatInput, CatsStore } from '.'
import { catsApi } from '../../api/cats'
import { showError, showSuccess } from '../toasts'

export const createAddCatSlice: StateCreator<
    CatsStore,
    [["zustand/immer", never]],
    [],
    AddCatSlice
> = (set, get) => ({
    isAddCatShown: false,
    isBreedsLoading: false,

    async addCat(input) {
        try {
            await catsApi.create({ input })
            get().hideAddCat()
            showSuccess('Cat added')
            await get().loadCats()
        } catch (e) {
            showError('Unable add cat', e)
        }
    },

    showAddCat() {
        set(draft => { draft.isAddCatShown = true })
    },

    hideAddCat() {
        set(draft => { draft.isAddCatShown = false })
    },

    async loadBreeds() {
        try {
            let breeds = await catsApi.listBreeds({})
            set(draft => { draft.breeds = breeds.data })
        } catch (e) {
            showError('Unable load breeds', e)
        } finally {
            set(draft => { draft.isBreedsLoading = false })
        }
    },
})

export interface AddCatSlice {
    isAddCatShown: boolean,
    breeds?: Breed[],
    isBreedsLoading: boolean,
    addCat: (cat: CatInput) => void,
    showAddCat: () => void,
    hideAddCat: () => void,
    loadBreeds: () => Promise<void>,
}
