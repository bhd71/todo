export function getFullDate(date: string): string {
    if (date.length === 1) {
        return '0' + date
    }
    return date
}