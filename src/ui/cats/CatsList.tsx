import { Card } from 'primereact/card'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useEffect } from 'react'

import { ROWS_PER_PAGE, useCatsStore } from '../../store/cats'

export function CatsList({ className }: { className: string }) {
    const { cats, catsPage, isCatsLoading, totalCats, selectedCat, loadCats, selectCat } = useCatsStore(store => ({
        cats: store.cats,
        catsPage: store.catsPage,
        isCatsLoading: store.isCatsLoading,
        totalCats: store.totalCats,
        selectedCat: store.selectedCat,
        loadCats: store.loadCats,
        selectCat: store.selectCat
    }))

    useEffect(() => { loadCats() }, [loadCats])

    return (
        <Card title='Cats' className={className}>
            <DataTable
                lazy
                paginator
                selectionMode="single"
                dataKey='id'
                selection={selectedCat}
                onSelectionChange={(e) => selectCat(e.value as any)} // TODO: seems typing bug in primereact
                value={cats}
                loading={isCatsLoading}
                onPage={loadCats}
                first={catsPage?.first}
                rows={catsPage?.rows}
                totalRecords={totalCats}
                rowsPerPageOptions={ROWS_PER_PAGE}>
                <Column field='id' header='Id'></Column>
                <Column field='name' header='Name'></Column>
                <Column field='breed.name' header='Breed'></Column>
            </DataTable>
        </Card>
    )
}