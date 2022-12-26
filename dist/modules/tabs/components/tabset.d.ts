import { AfterContentInit } from "@angular/core";
import { Tab } from "../classes/tab";
import * as ɵngcc0 from '@angular/core';
export declare class SuiTabset implements AfterContentInit {
    private _tabHeaders;
    private _tabContents;
    tabs: Tab[];
    private _activeTab;
    get activeTab(): Tab;
    set activeTab(tab: Tab);
    private _barrierCount;
    constructor();
    ngAfterContentInit(): void;
    private internalComponentsUpdated;
    private loadTabs;
    private onHeaderActiveChanged;
    activateFirstTab(): void;
    activateClosestTab(tab: Tab): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiTabset, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiTabset, "sui-tabset", never, {}, {}, ["_tabHeaders", "_tabContents"], ["*"]>;
}

//# sourceMappingURL=tabset.d.ts.map