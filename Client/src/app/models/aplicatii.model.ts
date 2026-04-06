export interface Aplicatii {
    id: string,
    jobId: string,
    userId: string,
    data: string,
    status: "pending" | "applied" | "rejected"
}
