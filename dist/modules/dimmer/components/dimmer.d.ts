import { EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiTransition } from "../../transition/internal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiDimmer extends SuiTransition {
    readonly hasClasses: boolean;
    private _transitionController;
    private _isDimmed;
    get isDimmed(): boolean;
    set isDimmed(value: boolean);
    isDimmedChange: EventEmitter<boolean>;
    isClickable: boolean;
    transition: string;
    transitionDuration: number;
    wrapContent: boolean;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiDimmer, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiDimmer, "sui-dimmer", never, { "isClickable": "isClickable"; "wrapContent": "wrapContent"; "isDimmed": "isDimmed"; "transition": "transition"; "transitionDuration": "transitionDuration"; }, { "isDimmedChange": "isDimmedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=dimmer.d.ts.map