import { create } from 'zustand'

import { immer } from 'zustand/middleware/immer'

export const useToastsStore = create<ToastsStore>()(
    immer((set) => ({
        showToast(toast) {
            set(draft => { draft.toast = toast })
        }
    })))

export function showSuccess(summary: string, detail?: string) {
    showToast({ severity: 'success', summary, detail })
}

export function showError(summary: string, e: any) {
    const detail = e instanceof Error ? e.message : JSON.stringify(e)
    showToast({ severity: 'error', summary, detail })
}

export function showToast(toast: Toast) {
    useToastsStore.getState().showToast(toast)
}

export interface ToastsStore {
    toast?: Toast,
    showToast: (toast: Toast) => void,
}

export interface Toast {
    severity: 'success' | 'info' | 'warn' | 'error'
    summary: string
    detail?: string
    life?: number
    sticky?: boolean
}