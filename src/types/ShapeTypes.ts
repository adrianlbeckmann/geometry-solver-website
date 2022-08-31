export interface Quadrat {
    a: number | null;
    u: number | null;
    f: number | null;
}

export interface Dreieck {
    a: number | null;
    b: number | null;
    c: number | null;
    h: number | null;
    u: number | null;
    f: number | null;
}

export type ShapeVariant = Quadrat | Dreieck;

export interface ShapeData<T> {
    name: string;
    data: T;
    calculate: () => void;
}