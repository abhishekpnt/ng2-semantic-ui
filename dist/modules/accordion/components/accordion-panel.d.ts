import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { SuiAccordionService } from "../services/accordion.service";
import { TransitionController } from "../../transition/internal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiAccordionPanel {
    private _changeDetector;
    private _service;
    transitionController: TransitionController;
    set service(service: SuiAccordionService);
    isDisabled: boolean;
    private _isOpen;
    get isOpen(): boolean;
    set isOpen(value: boolean);
    get transition(): string;
    get transitionDuration(): number;
    isOpenChange: EventEmitter<boolean>;
    constructor(_changeDetector: ChangeDetectorRef);
    toggle(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiAccordionPanel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiAccordionPanel, "sui-accordion-panel", ["suiAccordionPanel"], { "isOpen": "isOpen"; "isDisabled": "isDisabled"; }, { "isOpenChange": "isOpenChange"; }, never, ["[title]", "[content]"]>;
}

//# sourceMappingURL=accordion-panel.d.ts.map