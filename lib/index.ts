export function cheeseNaN(value: any): boolean {
    return typeof value !== 'number' || Number.isNaN(value);
}