export function getAPIURL(): string {
    if (process.env.NEXT_PUBLIC_API_URL === undefined) {
        return ""
    }
    return process.env.NEXT_PUBLIC_API_URL
}

export function getAuthHeader(): string {
    if (process.env.NEXT_PUBLIC_API_USER === undefined || process.env.NEXT_PUBLIC_API_PASSWORD === undefined) {
        return ""
    }
    return "Basic "+btoa(process.env.NEXT_PUBLIC_API_USER+":"+process.env.NEXT_PUBLIC_API_PASSWORD)
}