import { ElementRef, Type, Renderer2 } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { SuiPopupController } from "./popup-controller";
import { PopupConfig } from "./popup-config";
import * as ɵngcc0 from '@angular/core';
export declare class SuiPopupComponentController<T> extends SuiPopupController {
    private _component;
    private _contentComponentRef?;
    get componentInstance(): T | undefined;
    constructor(renderer: Renderer2, element: ElementRef, componentFactory: SuiComponentFactory, _component: Type<T>, config: PopupConfig);
    open(): void;
    protected cleanup(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiPopupComponentController<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SuiPopupComponentController<any>, never, never, {}, {}, never>;
}

//# sourceMappingURL=popup-component-controller.d.ts.map