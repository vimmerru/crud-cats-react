import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'

import { useCatsStore } from '../../store/cats'

export function CatsToolbar({ className }: { className: string }) {
    const { selectedCat, showAddCat, deleteCat } = useCatsStore(store => ({
        selectedCat: store.selectedCat,
        showAddCat: store.showAddCat,
        deleteCat: store.deleteCat,
    }))
    
    return (
        <Toolbar
            className={className}
            left={
                <div className="flex flex-wrap gap-2">
                    <Button icon="pi pi-plus" severity="success" onClick={showAddCat}/>
                    <Button icon="pi pi-trash" severity="danger" disabled={!selectedCat} onClick={deleteCat} />
                </div>
            }
            right={
                <Button label="Export" icon="pi pi-upload" className="p-button-help" />
            }>
        </Toolbar>
    )
}