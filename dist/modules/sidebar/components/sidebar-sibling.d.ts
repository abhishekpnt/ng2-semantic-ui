import { ElementRef, Renderer2 } from "@angular/core";
import { SidebarService } from "../services/sidebar.service";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSidebarSibling {
    private _renderer;
    private _element;
    private _service;
    get service(): SidebarService;
    set service(service: SidebarService);
    isDimmedWhenVisible: boolean;
    get isVisible(): boolean;
    get isDimmed(): boolean;
    readonly hasClasses: boolean;
    constructor(_renderer: Renderer2, _element: ElementRef);
    private updateTransform;
    onClick(event: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSidebarSibling, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSidebarSibling, "sui-sidebar-sibling", never, { "isDimmedWhenVisible": "isDimmedWhenVisible"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=sidebar-sibling.d.ts.map