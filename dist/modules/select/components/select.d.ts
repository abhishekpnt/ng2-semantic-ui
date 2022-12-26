import { EventEmitter, ElementRef } from "@angular/core";
import { ICustomValueAccessorHost, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
import { SuiSelectOption } from "./select-option";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSelect<T, U> extends SuiSelectBase<T, U> implements ICustomValueAccessorHost<U> {
    selectedOption?: T;
    private _writtenOption?;
    private _optionTemplateSibling;
    selectedOptionChange: EventEmitter<U>;
    private _placeholder;
    get placeholder(): string;
    set placeholder(placeholder: string);
    constructor(element: ElementRef, localizationService: SuiLocalizationService);
    protected optionsUpdateHook(): void;
    protected queryUpdateHook(): void;
    selectOption(option: T): void;
    writeValue(value: U): void;
    protected initialiseRenderedOption(option: SuiSelectOption<T>): void;
    private drawSelectedOption;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSelect<any, any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSelect<any, any>, "sui-select", never, { "placeholder": "placeholder"; }, { "selectedOptionChange": "selectedOptionChange"; }, never, ["*"]>;
}
export declare class SuiSelectValueAccessor<T, U> extends CustomValueAccessor<U, SuiSelect<T, U>> {
    constructor(host: SuiSelect<T, U>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSelectValueAccessor<any, any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiSelectValueAccessor<any, any>, "sui-select", never, {}, {}, never>;
}

//# sourceMappingURL=select.d.ts.map