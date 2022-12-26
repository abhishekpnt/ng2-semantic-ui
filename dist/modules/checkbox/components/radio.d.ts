import { EventEmitter } from "@angular/core";
import { ICustomValueAccessorHost, CustomValueAccessor } from "../../../misc/util/internal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiRadio<T> implements ICustomValueAccessorHost<T> {
    readonly hasClasses: boolean;
    name: string;
    value: T;
    isChecked: boolean;
    currentValue: T;
    onCurrentValueChange: EventEmitter<T>;
    onTouched: EventEmitter<void>;
    isDisabled: boolean;
    isReadonly: boolean;
    private _radioElement;
    get checkedAttribute(): string | undefined;
    get isDisabledAttribute(): string | undefined;
    constructor();
    onMouseDown(e: MouseEvent): void;
    onClick(): void;
    onFocusOut(): void;
    update(): void;
    writeValue(value: T): void;
    private focusRadio;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiRadio<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiRadio<any>, "sui-radio-button", never, { "isDisabled": "isDisabled"; "isReadonly": "isReadonly"; "name": "name"; "value": "value"; }, { "onCurrentValueChange": "currentValueChange"; "onTouched": "touched"; }, never, ["*"]>;
}
export declare class SuiRadioValueAccessor<T> extends CustomValueAccessor<T, SuiRadio<T>> {
    constructor(host: SuiRadio<T>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiRadioValueAccessor<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiRadioValueAccessor<any>, "sui-radio-button", never, {}, {}, never>;
}

//# sourceMappingURL=radio.d.ts.map