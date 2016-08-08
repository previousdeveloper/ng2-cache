export declare class CacheService {
    get(key: string): any;
    set(key: string, value: any): void;
    _clearCache(key: any, timeout: any): void;
    _clearAllCache(): void;
}
