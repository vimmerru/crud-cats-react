import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useCatsStore } from "../../store/cats";

export function CatDetails({className}: {className: string}) {
    const { selected, selectCat } = useCatsStore(store => ({
        selected: store.selectedCat,
        selectCat: store.selectCat
    }))

    return (
        <Card
            className='w-4 fadeinright'
            hidden={!selected}
            title={
                <div className='flex justify-content-between'>
                    <span>Details</span>
                    <Button 
                        icon="pi pi-times" severity="secondary" text aria-label="Close"
                        onClick={() => selectCat(undefined)} />
                </div>
            }>
            <p>
                <span className='font-bold'>ID</span> {selected?.id}
            </p>
            <p>
                <span className='font-bold'>Name</span> {selected?.name}
            </p>
            <p>
                <span className='font-bold'>Breed</span> {selected?.breed.name}
            </p>
        </Card>
    )
}