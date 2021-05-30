export default interface IDatabaseService {
    create(data: unknown): Promise<unknown>;

    get(data: unknown): Promise<unknown>;
}
