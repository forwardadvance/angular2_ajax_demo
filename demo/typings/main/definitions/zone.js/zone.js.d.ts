// Compiled using typings@0.6.10
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/zone.js/zone.js.d.ts
declare module 'zone.js' {
// Type definitions for Zone.js
// Project: https://github.com/angular/zone.js
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

class Zone {
    constructor(parentZone: Zone, data: any);

    fork(locals?: {[key: string]: any}): Zone;
    bind(fn: Function, skipEnqueue?: boolean): void;
    bindOnce(fn: Function): any;
    run(fn: Function, applyTo?: any, applyWith?: any): void;
    isRootZone(): boolean;

    static bindPromiseFn<T extends () => Promise<any>>(fn: T): T;

    static longStackTraceZone: {[key: string]: any};
}
}