import { EventEmitter, Renderer2, ElementRef } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSelectSearch {
    private _renderer;
    private _element;
    readonly hasClasses: boolean;
    readonly autoComplete: string;
    set query(query: string);
    onQueryUpdated: EventEmitter<string>;
    onQueryKeyDown: EventEmitter<KeyboardEvent>;
    constructor(_renderer: Renderer2, _element: ElementRef);
    updateQuery(query: string): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSelectSearch, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiSelectSearch, "input[suiSelectSearch]", never, {}, {}, never>;
}

//# sourceMappingURL=select-search.d.ts.map