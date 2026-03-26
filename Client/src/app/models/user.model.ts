export interface User {
    id: number;
    nume: string;
    email: string;
    parola: string;
    rol: 'angajator' | 'candidat';
}

export interface LoginCredentials {
    email: string;
    parola: string;
}