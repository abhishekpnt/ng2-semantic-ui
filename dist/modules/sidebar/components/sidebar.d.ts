import { Renderer2, ElementRef, EventEmitter } from "@angular/core";
import { SidebarService, SidebarTransition, SidebarDirection } from "../services/sidebar.service";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSidebar {
    private _renderer;
    private _element;
    service: SidebarService;
    readonly hasClasses: boolean;
    get transition(): SidebarTransition;
    set transition(transition: SidebarTransition);
    get direction(): SidebarDirection;
    set direction(direction: SidebarDirection);
    get isVisible(): boolean;
    set isVisible(isVisible: boolean);
    get isVisibleChange(): EventEmitter<boolean>;
    get isAnimating(): boolean;
    constructor(_renderer: Renderer2, _element: ElementRef);
    private updateDimensions;
    private setClass;
    open(): void;
    close(): void;
    toggle(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSidebar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSidebar, "sui-sidebar", never, { "transition": "transition"; "direction": "direction"; "isVisible": "isVisible"; }, { "isVisibleChange": "isVisibleChange"; }, never, ["*"]>;
}

//# sourceMappingURL=sidebar.d.ts.map