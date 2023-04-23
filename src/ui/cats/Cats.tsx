import { useEffect } from 'react'

import { useCatsStore } from '../../store/cats'
import { AddCat } from './AddCat'
import { CatDetails } from './CatDetails'
import { CatsList } from './CatsList'
import { CatsToolbar } from './CatsToolbar'


export function Cats() {
    const { loadBreeds } = useCatsStore(store => ({
        loadBreeds: store.loadBreeds,
    }))

    useEffect(() => { loadBreeds() }, [loadBreeds])

    return (
        <div>
            <CatsToolbar className="mb-2" />
            <div className='flex justify-content-between gap-2'>
                <CatsList className="flex-grow-1" />
                <CatDetails className="w-4 fadeinright" />
            </div>
            <AddCat />
        </div>
    )
}