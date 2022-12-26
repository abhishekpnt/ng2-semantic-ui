import { AfterContentInit, ElementRef } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class SuiRadioManager<T> implements AfterContentInit {
    element: ElementRef;
    isNested: boolean;
    private _subManagers;
    private _renderedRadios;
    private _radioSubs;
    constructor(element: ElementRef);
    ngAfterContentInit(): void;
    private updateNesting;
    private updateRadios;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiRadioManager<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiRadioManager<any>, "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]", never, {}, {}, ["_subManagers", "_renderedRadios"]>;
}

//# sourceMappingURL=radio-manager.d.ts.map