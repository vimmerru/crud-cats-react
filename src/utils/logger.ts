import { APP_ENV } from "./environment"
import { assertUnreachable } from "./exhaustive"

export interface Logger {
    readonly log: LogFn
    readonly warn: LogFn
    readonly error: LogFn
}

export interface LogFn {
    (message?: any, ...optionalParams: any[]): void
}

export type LogLevel = 'log' | 'warn' | 'error'

const NO_OP: LogFn = () => { }

export const consoleLogger = (options?: { level?: LogLevel }): Logger => {
    const { level = 'error' } = options ?? {}

    switch (level) {
        case 'error': return {
            error: console.error.bind(console),
            warn: NO_OP,
            log: NO_OP,
        }
        case 'warn': return {
            error: console.error.bind(console),
            warn: console.warn.bind(console),
            log: NO_OP,
        }
        case 'log': return {
            error: console.error.bind(console),
            warn: console.warn.bind(console),
            log: console.log.bind(console),
        }
        default:  assertUnreachable(level)
    }
}

export const logger = consoleLogger({level: APP_ENV === 'production' ? 'warn' : 'log'})
