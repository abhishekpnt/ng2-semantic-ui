import { OnChanges, EventEmitter } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class SuiPagination implements OnChanges {
    readonly hasClasses: boolean;
    pageCount: number;
    pageChange: EventEmitter<number>;
    private _maxSize?;
    private _collectionSize;
    private _page;
    private _pages;
    private _hasNavigationLinks;
    get maxSize(): number | undefined;
    set maxSize(value: number | undefined);
    pageSize: number;
    get collectionSize(): number;
    set collectionSize(value: number);
    get hasNavigationLinks(): boolean;
    set hasNavigationLinks(value: boolean);
    hasBoundaryLinks: boolean;
    canRotate: boolean;
    hasEllipses: boolean;
    get page(): number;
    set page(value: number);
    get pages(): number[];
    constructor();
    hasPrevious(): boolean;
    hasNext(): boolean;
    setPage(newPage: number): void;
    ngOnChanges(): void;
    private updatePages;
    private applyPagination;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiPagination, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiPagination, "sui-pagination", never, { "pageSize": "pageSize"; "hasNavigationLinks": "hasNavigationLinks"; "hasBoundaryLinks": "hasBoundaryLinks"; "canRotate": "canRotate"; "hasEllipses": "hasEllipses"; "maxSize": "maxSize"; "collectionSize": "collectionSize"; "page": "page"; }, { "pageChange": "pageChange"; }, never, never>;
}

//# sourceMappingURL=pagination.d.ts.map