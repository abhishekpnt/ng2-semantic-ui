import { __decorate, __metadata, __read } from "tslib";
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
var SuiPagination = /** @class */ (function () {
    function SuiPagination() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    Object.defineProperty(SuiPagination.prototype, "maxSize", {
        get: function () {
            return this._maxSize;
        },
        set: function (value) {
            this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "collectionSize", {
        get: function () {
            return this._collectionSize;
        },
        set: function (value) {
            this._collectionSize = Math.max(value, 0);
            this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "hasNavigationLinks", {
        get: function () {
            var maxSize = this._maxSize || this.pageCount;
            return this._hasNavigationLinks || maxSize < this.pageCount;
        },
        set: function (value) {
            this._hasNavigationLinks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this.setPage(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        enumerable: true,
        configurable: true
    });
    // Public methods
    SuiPagination.prototype.hasPrevious = function () {
        return this.page > 1;
    };
    SuiPagination.prototype.hasNext = function () {
        return this.page < this.pageCount;
    };
    SuiPagination.prototype.setPage = function (newPage) {
        var value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    };
    // Lifecycle hooks
    SuiPagination.prototype.ngOnChanges = function () {
        this.updatePages();
    };
    // Private methods
    SuiPagination.prototype.updatePages = function () {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        var _a = __read(this.applyPagination(), 2), start = _a[0], end = _a[1];
        this._pages = Array(end - start)
            .fill(start + 1)
            .map(function (s, i) { return s + i; });
    };
    SuiPagination.prototype.applyPagination = function () {
        var maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        var page = Math.ceil(this.page / maxSize) - 1;
        var start = 0;
        var end = this.pageCount;
        if (this.canRotate) {
            var leftOffset = Math.floor(maxSize / 2);
            var rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    };
    __decorate([
        HostBinding("class.ui"),
        HostBinding("class.pagination"),
        HostBinding("class.menu"),
        __metadata("design:type", Boolean)
    ], SuiPagination.prototype, "hasClasses", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SuiPagination.prototype, "pageChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuiPagination.prototype, "maxSize", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SuiPagination.prototype, "pageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuiPagination.prototype, "collectionSize", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SuiPagination.prototype, "hasNavigationLinks", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SuiPagination.prototype, "hasBoundaryLinks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SuiPagination.prototype, "canRotate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SuiPagination.prototype, "hasEllipses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SuiPagination.prototype, "page", null);
    SuiPagination = __decorate([
        Component({
            selector: "sui-pagination",
            template: "\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(1)\" [class.disabled]=\"page===1\">\n    <span><i class=\"angle double left icon\"></i></span>\n</a>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page-1)\" [class.disabled]=\"!hasPrevious()\">\n    <span><i class=\"angle left icon\"></i></span>\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"item\" (click)=\"setPage(1)\" *ngIf=\"pages[0] !== 1\">\n        <span>1</span>\n    </a>\n    <a class=\"disabled item\" *ngIf=\"pages[0] > 2\">...</a>\n</ng-container>\n<a *ngFor=\"let p of pages\" class=\"item\" [class.active]=\"p===page\" (click)=\"setPage(p)\">\n    {{ p }}\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"disabled item\" *ngIf=\"pages[pages.length - 1] < pageCount - 1\">...</a>\n    <a class=\"item\" (click)=\"setPage(pageCount)\" *ngIf=\"pages[pages.length - 1] !== pageCount\">\n        <span>{{ pageCount }}</span>\n    </a>\n</ng-container>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page+1)\" [class.disabled]=\"!hasNext()\">\n    <span><i class=\"angle right icon\"></i></span>\n</a>\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(pageCount)\" [class.disabled]=\"page===pageCount\">\n    <span><i class=\"angle double right icon\"></i></span>\n</a>\n",
            styles: ["\n:host .item {\n    transition: none;\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], SuiPagination);
    return SuiPagination;
}());
export { SuiPagination };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVDL0Y7SUEwRUk7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQWpFRCxzQkFBVyxrQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBbUIsS0FBd0I7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDOzs7T0FKQTtJQVVELHNCQUFXLHlDQUFjO2FBQXpCO1lBQ0ksT0FBTyxJ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SUE3SUQ7UUFIQyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3ZCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQixXQUFXLENBQUMsWUFBWSxDQUFDOztxREFDUztJQU1uQztRQURDLE1BQU0sRUFBRTtrQ0FDUyxZQUFZO3FEQUFTO0lBVXZDO1FBREMsS0FBSyxFQUFFOzs7Z0RBR1A7SUFPRDtRQURDLEtBQUssRUFBRTs7bURBQ2U7SUFHdkI7UUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtJQVFEO1FBREMsS0FBSyxFQUFFOzs7MkRBSVA7SUFPRDtRQURDLEtBQUssRUFBRTs7MkRBQ3dCO0lBR2hDO1FBREMsS0FBSyxFQUFFOztvREFDaUI7SUFHekI7UUFEQyxLQUFLLEVBQUU7O3NEQUNtQjtJQUczQjtRQURDLEtBQUssRUFBRTs7OzZDQUdQO0lBaEVRLGFBQWE7UUFyQ3pCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGd6Q0E0QmI7cUJBQ1ksNkNBSVo7U0FDQSxDQUFDOztPQUNXLGFBQWEsQ0FtSnpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5KRCxJQW1KQztTQW5KWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcGFnaW5hdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PTFcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlLTEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNQcmV2aW91cygpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBsZWZ0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiAqbmdJZj1cInBhZ2VzWzBdICE9PSAxXCI+XG4gICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbMF0gPiAyXCI+Li4uPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIGNsYXNzPVwiaXRlbVwiIFtjbGFzcy5hY3RpdmVdPVwicD09PXBhZ2VcIiAoY2xpY2spPVwic2V0UGFnZShwKVwiPlxuICAgIHt7IHAgfX1cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gPCBwYWdlQ291bnQgLSAxXCI+Li4uPC9hPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdICE9PSBwYWdlQ291bnRcIj5cbiAgICAgICAgPHNwYW4+e3sgcGFnZUNvdW50IH19PC9zcGFuPlxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nSWY9XCJoYXNOYXZpZ2F0aW9uTGlua3NcIiBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlKzEpXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFoYXNOZXh0KClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKHBhZ2VDb3VudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicGFnZT09PXBhZ2VDb3VudFwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIHJpZ2h0IGljb25cIj48L2k+PC9zcGFuPlxuPC9hPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdCAuaXRlbSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBhZ2luYXRpb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdpbmF0aW9uXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubWVudVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICAvLyBQdWJsaWMgbWVtYmVyc1xuICAgIHB1YmxpYyBwYWdlQ291bnQ6bnVtYmVyO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHBhZ2VDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICAvLyBQcml2YXRlIG1lbWJlcnNcbiAgICBwcml2YXRlIF9tYXhTaXplPzpudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvblNpemU6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2U6bnVtYmVyO1xuICAgIHByaXZhdGUgX3BhZ2VzOm51bWJlcltdO1xuICAgIHByaXZhdGUgX2hhc05hdmlnYXRpb25MaW5rczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heFNpemUoKTpudW1iZXJ8dW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhTaXplKHZhbHVlOm51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tYXhTaXplID0gKHZhbHVlICE9IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgMSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGFnZVNpemU6bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb25TaXplKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25TaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29sbGVjdGlvblNpemUodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TaXplID0gTWF0aC5tYXgodmFsdWUsIDApO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTmF2aWdhdGlvbkxpbmtzKCk6Ym9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSB0aGlzLl9tYXhTaXplIHx8IHRoaXMucGFnZUNvdW50O1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzTmF2aWdhdGlvbkxpbmtzIHx8IG1heFNpemUgPCB0aGlzLnBhZ2VDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhhc05hdmlnYXRpb25MaW5rcyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0JvdW5kYXJ5TGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNhblJvdGF0ZTpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzRWxsaXBzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwYWdlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYWdlKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLnNldFBhZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFnZXMoKTpudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IDEwO1xuICAgICAgICB0aGlzLl9wYWdlID0gMTtcbiAgICAgICAgdGhpcy5fcGFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSAxO1xuICAgICAgICB0aGlzLmhhc05hdmlnYXRpb25MaW5rcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQm91bmRhcnlMaW5rcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhblJvdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0VsbGlwc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBoYXNQcmV2aW91cygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlID4gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmV4dCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2UobmV3UGFnZTpudW1iZXIpOnZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZTpudW1iZXIgPSAoTnVtYmVyLmlzSW50ZWdlcihuZXdQYWdlKSkgPyBNYXRoLm1pbihNYXRoLm1heChuZXdQYWdlLCAxKSwgdGhpcy5wYWdlQ291bnQpIDogMTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLl9wYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExpZmVjeWNsZSBob29rc1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlcygpOnZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLl9jb2xsZWN0aW9uU2l6ZSAvIHRoaXMucGFnZVNpemUpKTtcblxuICAgICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLmFwcGx5UGFnaW5hdGlvbigpO1xuXG4gICAgICAgIHRoaXMuX3BhZ2VzID0gQXJyYXk8bnVtYmVyPihlbmQgLSBzdGFydClcbiAgICAgICAgICAgIC5maWxsKHN0YXJ0ICsgMSlcbiAgICAgICAgICAgIC5tYXAoKHMsIGkpID0+IHMgKyBpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5UGFnaW5hdGlvbigpOltudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gKHRoaXMubWF4U2l6ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5taW4odGhpcy5tYXhTaXplLCB0aGlzLnBhZ2VDb3VudCkgOiB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBjb25zdCBwYWdlID0gTWF0aC5jZWlsKHRoaXMucGFnZSAvIG1heFNpemUpIC0gMTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMucGFnZUNvdW50O1xuXG4gICAgICAgIGlmICh0aGlzLmNhblJvdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE9mZnNldCA9IE1hdGguZmxvb3IobWF4U2l6ZSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRPZmZzZXQgPSBtYXhTaXplICUgMiA9PT0gMCA/IGxlZnRPZmZzZXQgLSAxIDogbGVmdE9mZnNldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8PSBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgZW5kID0gbWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlQ291bnQgLSB0aGlzLnBhZ2UgPCBsZWZ0T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnBhZ2VDb3VudCAtIG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlIC0gbGVmdE9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5wYWdlICsgcmlnaHRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCA9IHBhZ2UgKiBtYXhTaXplO1xuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBtYXhTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtzdGFydCwgTWF0aC5taW4oZW5kLCB0aGlzLnBhZ2VDb3VudCldO1xuICAgIH1cbn1cbiJdfQ==