export interface User {
    id: string;
    nume: string;
    email: string;
    parola: string;
    rol: 'angajator' | 'candidat';
}

export interface LoginCredentials {
    email: string;
    parola: string;
}