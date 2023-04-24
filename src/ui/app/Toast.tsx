import { Toast as PrimeToast } from 'primereact/toast'
import { useEffect, useRef } from 'react'

import { useToastsStore } from '../../store/toasts'

export function Toast() {

  const { toast } = useToastsStore(store => ({
    toast: store.toast,
  }))

  const toastRef = useRef<PrimeToast>(null)
  useEffect(() => { if (toast) { toastRef.current?.show(toast) } }, [toast])
  
  return (
    <PrimeToast ref={toastRef} position='top-right'></PrimeToast>
  )
}