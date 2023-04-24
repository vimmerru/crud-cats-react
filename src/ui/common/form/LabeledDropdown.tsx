import { Dropdown } from 'primereact/dropdown'
import { classNames } from 'primereact/utils'
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import FieldError from './FieldError'

export function LabeledDropdown<T extends FieldValues>({label, placeholder, autoFocus, options, optionLabel, optionValue, ...controllerProps }: Props<T>) {
    const { field, fieldState } = useController(controllerProps);

    return (
        <div className = 'field'>
            <Dropdown
                {...field}
                placeholder={placeholder}
                options={options}
                optionLabel={optionLabel}
                optionValue={optionValue}
                autoFocus={autoFocus}
                onChange={(e) => field.onChange(e.value)}
                className={classNames({ 'p-invalid': fieldState.error })}
            />
            <FieldError error={fieldState.error?.message} />
        </div>
    )
}

export interface Props<T extends FieldValues> extends UseControllerProps<T, FieldPath<T>> {
    label: string, // TODO: use react component
    placeholder?: string,
    autoFocus?: boolean,
    options?: any[], // TODO: better typing
    optionLabel: string,
    optionValue: string,
}
