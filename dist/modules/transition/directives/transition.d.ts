import { Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController } from "../classes/transition-controller";
import * as ɵngcc0 from '@angular/core';
export declare class SuiTransition {
    protected _renderer: Renderer2;
    protected _element: ElementRef;
    private _changeDetector;
    private _controller;
    set suiTransition(tC: TransitionController);
    transitionClass: boolean;
    get isVisible(): boolean;
    get isHidden(): boolean;
    constructor(_renderer: Renderer2, _element: ElementRef, _changeDetector: ChangeDetectorRef);
    setTransitionController(transitionController: TransitionController): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiTransition, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiTransition, "[suiTransition]", ["transition"], { "suiTransition": "suiTransition"; }, {}, never>;
}

//# sourceMappingURL=transition.d.ts.map