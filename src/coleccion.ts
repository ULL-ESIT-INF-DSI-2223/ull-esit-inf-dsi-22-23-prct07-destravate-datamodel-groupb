export interface Coleccion<T> {
    add(item: T): void;
    remove(index: number): void;
    modify(index: number, item: T): void;
}
