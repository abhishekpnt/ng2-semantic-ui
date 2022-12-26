import { EventEmitter } from "@angular/core";
import { ICustomValueAccessorHost, CustomValueAccessor } from "../../../misc/util/internal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiRating implements ICustomValueAccessorHost<number> {
    readonly hasClasses: boolean;
    value: number;
    valueChange: EventEmitter<number>;
    private _maximum;
    get maximum(): number;
    set maximum(value: number);
    isReadonly: boolean;
    get icons(): undefined[];
    hoveredIndex: number;
    constructor();
    onClick(i: number): void;
    onMouseover(i: number): void;
    onMouseout(): void;
    writeValue(value: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiRating, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiRating, "sui-rating", never, { "maximum": "maximum"; "isReadonly": "isReadonly"; }, { "valueChange": "valueChange"; }, never, never>;
}
export declare class SuiRatingValueAccessor extends CustomValueAccessor<number, SuiRating> {
    constructor(host: SuiRating);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiRatingValueAccessor, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiRatingValueAccessor, "sui-rating", never, {}, {}, never>;
}

//# sourceMappingURL=rating.d.ts.map