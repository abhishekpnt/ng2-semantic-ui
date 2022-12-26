import { EventEmitter, ViewContainerRef, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSelectOption<T> extends SuiDropdownMenuItem {
    changeDetector: ChangeDetectorRef;
    readonly hasClasses: boolean;
    value: T;
    onSelected: EventEmitter<T>;
    isActive: boolean;
    renderedText?: string;
    set formatter(formatter: (obj: T) => string);
    usesTemplate: boolean;
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(e: HandledEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSelectOption<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSelectOption<any>, "sui-select-option", never, { "value": "value"; }, { "onSelected": "onSelected"; }, never, never>;
}

//# sourceMappingURL=select-option.d.ts.map