export const requiredValueValidator = (value: string): string | undefined =>
    !value ? 'field requires a value' : undefined

export const maxLength = (length: number): (str: string) => string | undefined => (str: string) => {
    if (str && str.length > length) return `max length is ${length} symbols`;
    return undefined;
}