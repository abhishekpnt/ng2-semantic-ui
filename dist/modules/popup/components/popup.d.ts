import { ViewContainerRef, ElementRef, EventEmitter } from "@angular/core";
import { PositioningService, IDynamicClasses } from "../../../misc/util/internal";
import { TransitionController } from "../../transition/internal";
import { IPopup } from "../classes/popup-controller";
import { TemplatePopupConfig } from "../classes/popup-template-controller";
import * as ɵngcc0 from '@angular/core';
export declare class SuiPopup implements IPopup {
    elementRef: ElementRef;
    config: TemplatePopupConfig<any>;
    transitionController: TransitionController;
    positioningService: PositioningService;
    private _anchor;
    private _isOpen;
    closingTimeout: number;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    get isOpen(): boolean;
    private _container;
    set anchor(anchor: ElementRef);
    get direction(): string | undefined;
    get alignment(): string | undefined;
    get dynamicClasses(): IDynamicClasses;
    templateSibling: ViewContainerRef;
    readonly tabindex: number;
    constructor(elementRef: ElementRef);
    open(): void;
    toggle(): void;
    close(): void;
    onClick(event: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiPopup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiPopup, "sui-popup", never, {}, {}, never, never>;
}

//# sourceMappingURL=popup.d.ts.map