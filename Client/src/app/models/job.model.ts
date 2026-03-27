export interface Job {
    id: number;
    titlu: string;
    descriere: string;
    companie: string;
    dataPostarii: string;
    esteActiv: boolean;
    angajatorId: number;
}