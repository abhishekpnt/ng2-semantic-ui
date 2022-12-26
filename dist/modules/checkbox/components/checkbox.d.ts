import { EventEmitter } from "@angular/core";
import { ICustomValueAccessorHost, CustomValueAccessor } from "../../../misc/util/internal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiCheckbox implements ICustomValueAccessorHost<boolean> {
    readonly hasClasses: boolean;
    name: string;
    isChecked: boolean;
    onCheckChange: EventEmitter<boolean>;
    onTouched: EventEmitter<void>;
    isDisabled: boolean;
    isReadonly: boolean;
    get checkedAttribute(): string | undefined;
    get isDisabledAttribute(): string | undefined;
    private _checkboxElement;
    constructor();
    onMouseDown(event: any): void;
    onClick(e: any): void;
    onFocusOut(e: any): void;
    toggle(): void;
    writeValue(value: boolean): void;
    private focusCheckbox;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCheckbox, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiCheckbox, "sui-checkbox", ["suiCheckbox"], { "isDisabled": "isDisabled"; "isReadonly": "isReadonly"; "name": "name"; }, { "onCheckChange": "checkChange"; "onTouched": "touched"; }, never, ["*"]>;
}
export declare class SuiCheckboxValueAccessor extends CustomValueAccessor<boolean, SuiCheckbox> {
    constructor(host: SuiCheckbox);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCheckboxValueAccessor, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiCheckboxValueAccessor, "sui-checkbox", never, {}, {}, never>;
}

//# sourceMappingURL=checkbox.d.ts.map