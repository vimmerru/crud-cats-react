export function delay(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(undefined), ms))
}

export async function networkDelay() {
    await delay(
        Math.floor(
            Math.random() * MAX_NETWORK_DELAY))
}

const MAX_NETWORK_DELAY = 300