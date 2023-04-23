import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { useCatsStore, CatInputSchema, CatInput } from '../../store/cats'
import { LabeledInputText } from '../common/form/LabeledInputText'
import { LabeledDropdown } from '../common/form/LabeledDropdown';
import { useEffect, useRef } from 'react';
import { delay } from '../../utils/delay';


export function AddCat() {
    const { breeds, isAddCatShown, addCat, hideAddCat } = useCatsStore(store => ({
        breeds: store.breeds,
        isAddCatShown: store.isAddCatShown,
        addCat: store.addCat,
        hideAddCat: store.hideAddCat,
        showAddCat: store.showAddCat,
    }))

    const {
        control,
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<CatInput>({
        resolver: zodResolver(CatInputSchema),
        defaultValues: {
            name: "",
            breedId: "",
        }
    })

    useEffect(() => {
        if (!isAddCatShown) {
            delay(100).then(() => reset()) // TODO: Think how to properly reset form after close animation
        }
    }, [isAddCatShown, reset])

    const toast = useRef<Toast>(null); // TODO: should it be global?

    return (
        <div>
            <Toast ref={toast} position='bottom-right'></Toast>
            <Dialog
                header='Add Cat'
                modal
                className='p-fluid col-4'
                visible={isAddCatShown}
                onHide={hideAddCat}
                footer={
                    <>
                        <Button label='Cancel' icon='pi pi-times' outlined onClick={hideAddCat} className='p-button-text' />
                        <Button label='Create' icon='pi pi-check' onClick={handleSubmit(cat => addCat(cat))} loading={isSubmitting} />
                    </>
                }
            >
                <form className='pt-2'>
                    <LabeledInputText label='Name*' placeholder='Enter name' autoFocus control={control} name='name' />
                    <LabeledDropdown label='Breed*' placeholder='Select breed' options={breeds} optionLabel='name' optionValue='id' control={control} name='breedId' />
                </form>
            </Dialog>
        </div>
    )
}
