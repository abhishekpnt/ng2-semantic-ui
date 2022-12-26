import { AfterContentInit } from "@angular/core";
import { SidebarService } from "../services/sidebar.service";
import { SuiSidebar } from "./sidebar";
import { SuiSidebarSibling } from "./sidebar-sibling";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSidebarContainer implements AfterContentInit {
    service: SidebarService;
    readonly hasClasses: boolean;
    sidebar: SuiSidebar;
    sibling: SuiSidebarSibling;
    constructor();
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSidebarContainer, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSidebarContainer, "sui-sidebar-container", never, {}, {}, ["sidebar", "sibling"], ["*"]>;
}

//# sourceMappingURL=sidebar-container.d.ts.map