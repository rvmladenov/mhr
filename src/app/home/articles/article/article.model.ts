export interface Article {
    id: number,
    title: string,
    text?: string, // Will not hold this in the store since we do not need it but it needs to be there
    likes?: number // Holds the number of likes an article could have
}