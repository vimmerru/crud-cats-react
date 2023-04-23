export default function FieldError({error}: {error?: string}) {    
    return (
        error ? <small className="p-error">{error}</small> :  <small className="p-error">&nbsp;</small>
    )
}