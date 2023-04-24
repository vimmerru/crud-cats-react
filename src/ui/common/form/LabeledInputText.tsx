import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

import FieldError from './FieldError';

export function LabeledInputText<T extends FieldValues>({ label, placeholder, autoFocus, ...controllerProps }: Props<T>) {
    const { field, fieldState } = useController(controllerProps);

    return (
        <div className='field'>
            <label htmlFor={field.name} className='font-bold'>{label}</label>
            <InputText
                {...field}
                placeholder = {placeholder}
                autoFocus={autoFocus}
                className={classNames({ 'p-invalid': fieldState.invalid })} />
            <FieldError error={fieldState.error?.message} />
        </div>
    )
}

export interface Props<T extends FieldValues> extends UseControllerProps<T, FieldPath<T>> {
    label: string, // TODO: use react component
    placeholder: string,
    autoFocus?: boolean,
}



