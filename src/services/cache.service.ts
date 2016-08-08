import {CacheModel} from "../model/cache.model";


export class CacheService {


    get(key: string): any {
        let result = null;

        if (CacheModel) {
            result = CacheModel[key];
        }

        return result;
    }

    set(key: string, value: any): void {
        CacheModel[key] = value;
    }

    set(key: string, value: any, expireTimeInMs: number) {
        CacheModel[key] = value;
        this._clearCache(key, expireTimeInMs);
    }


    _clearCache(key, timeout) {

        if (timeout > 0) {
            setTimeout(()=> {
                CacheModel[key] = null;
            }, timeout);
        }
    }

    _clearAllCache() {

        for (let key in CacheModel) {
            CacheModel[key] = null;

        }
    }
}
