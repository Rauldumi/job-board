export interface Aplicatii {
    id: number,
    jobId: number,
    userId: number,
    data: string,
    status: "pending" | "applied" | "rejected"
}
