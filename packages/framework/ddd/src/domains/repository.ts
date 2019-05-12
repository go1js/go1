export interface Repository<T> {
    find(item: T): Promise<T[]>;
    find(id: string | number): Promise<T>;
    create(item: T): Promise<boolean>;
    delete(id: string | number): Promise<boolean>;
    update(id: string | number, item: T): Promise<boolean>;
    load(id: string | number): Promise<T>;
    save(item: T): Promise<T>;
    archive(id: string | number): Promise<boolean>;
}