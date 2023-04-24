import { StateCreator } from 'zustand'

import { catsApi } from '../../api/cats'
import { showError } from '../toasts'

import { CatsStore } from '.'

export const createDeleteCatSlice: StateCreator<
    CatsStore,
    [["zustand/immer", never]],
    [],
    DeleteCatSlice
> = (set, get) => ({
   async deleteCat() {
    try {
        await catsApi.delete({ id: get().selectedCat!.id })
        set(draft => {draft.selectedCat = undefined})
        await get().loadCats()
    } catch(e) {
        showError('Unable delete cat', e)
    }
   }
})

export interface DeleteCatSlice {
    deleteCat: () => Promise<void>,
}
