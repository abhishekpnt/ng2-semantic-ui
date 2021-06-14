import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ViewContainerRef, ElementRef, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { PositioningService } from "../../../misc/util/internal";
import { TransitionController, TransitionDirection, Transition } from "../../transition/internal";
let SuiPopup = class SuiPopup {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    get isOpen() {
        return this._isOpen;
    }
    set anchor(anchor) {
        this._anchor = anchor;
    }
    // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
    get direction() {
        // We need to set direction attribute before popper init to allow correct positioning
        return this.config.placement.split(" ").shift();
    }
    // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
    get alignment() {
        return this.config.placement.split(" ").pop();
    }
    get dynamicClasses() {
        const classes = {};
        if (this.direction) {
            classes[this.direction] = true;
        }
        if (this.alignment) {
            classes[this.alignment] = true;
        }
        if (this.config.isInverted) {
            classes.inverted = true;
        }
        if (this.config.isBasic) {
            classes.basic = true;
        }
        if (this.config.isFlowing) {
            classes.flowing = true;
        }
        if (this.config.size) {
            classes[this.config.size] = true;
        }
        if (this.config.width) {
            classes[this.config.width] = true;
        }
        return classes;
    }
    open() {
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(() => {
                this.positioningService = new PositioningService(this._anchor, this._container.element, this.config.placement, ".dynamic.arrow");
                this.positioningService.hasArrow = !this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, () => {
                // Focus any element with [autofocus] attribute.
                const autoFocus = this.elementRef.nativeElement.querySelector("[autofocus]");
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(() => autoFocus.focus(), 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(() => autoFocus.focus(), this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    }
    toggle() {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    }
    close() {
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(() => this.onClose.emit(), this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    }
    onClick(event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    }
};
SuiPopup.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    ViewChild("container", { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], SuiPopup.prototype, "_container", void 0);
__decorate([
    ViewChild("templateSibling", { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], SuiPopup.prototype, "templateSibling", void 0);
__decorate([
    HostBinding("attr.tabindex"),
    __metadata("design:type", Number)
], SuiPopup.prototype, "tabindex", void 0);
__decorate([
    HostListener("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], SuiPopup.prototype, "onClick", null);
SuiPopup = __decorate([
    Component({
        selector: "sui-popup",
        template: `
<div class="ui popup"
     [ngClass]="dynamicClasses"
     [suiTransition]="transitionController"
     [attr.direction]="direction"
     #container>

    <ng-container *ngIf="!config.template && (!!config.header || !!config.text)">
        <div class="header" *ngIf="config.header">{{ config.header }}</div>
        <div class="content">{{ config.text }}</div>
    </ng-container>
    <div #templateSibling></div>

    <sui-popup-arrow *ngIf="!config.isBasic"
                     [placement]="config.placement"
                     [inverted]="config.isInverted"></sui-popup-arrow>
</div>
`,
        styles: [`
.ui.popup {
    /* Autofit popup to the contents. */
    right: auto;
    margin: 0;
}

.ui.animating.popup {
    /* When the popup is animating, it may not initially be in the correct position.
       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.
       Setting pointer-events to none while animating fixes this bug. */
    pointer-events: none;
}

.ui.popup::before {
    /* Hide the Semantic UI CSS arrow. */
    display: none;
}

/* Offset popup by 0.75em above and below when placed 'vertically'. */
.ui.popup[direction="top"],
.ui.popup[direction="bottom"] {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

/* Offset popup by 0.75em either side when placed 'horizontally'. */
.ui.popup[direction="left"],
.ui.popup[direction="right"] {
    margin-left: 0.75em;
    margin-right: 0.75em;
}
`]
    }),
    __metadata("design:paramtypes", [ElementRef])
], SuiPopup);
export { SuiPopup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBMERsRyxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFRO0lBMEVqQixZQUFtQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQWpFRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQU1ELElBQVcsTUFBTSxDQUFDLE1BQWlCO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRCxxRkFBcUY7SUFDckYsSUFBVyxTQUFTO1FBQ2hCLHFGQUFxRjtRQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMs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RSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQzlDLGdCQUFnQjs0Q0FBQztBQTZDcEM7SUFEQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUNoRCxnQkFBZ0I7aURBQUM7QUFHeEM7SUFEQyxXQUFXLENBQUMsZUFBZSxDQUFDOzswQ0FDRztBQTZFaEM7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7O3FDQUNiLFVBQVU7O3VDQUc5QjtBQXhKUSxRQUFRO0lBdERwQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJiO2lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdDWjtLQUNBLENBQUM7cUNBMkVnQyxVQUFVO0dBMUUvQixRQUFRLENBeUpwQjtTQXpKWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UsIElEeW5hbWljQ2xhc3NlcyB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wb3B1cFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgcG9wdXBcIlxuICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgICNjb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbmZpZy50ZW1wbGF0ZSAmJiAoISFjb25maWcuaGVhZGVyIHx8ICEhY29uZmlnLnRleHQpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiAqbmdJZj1cImNvbmZpZy5oZWFkZXJcIj57eyBjb25maWcuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgY29uZmlnLnRleHQgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG5cbiAgICA8c3VpLXBvcHVwLWFycm93ICpuZ0lmPVwiIWNvbmZpZy5pc0Jhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW52ZXJ0ZWRdPVwiY29uZmlnLmlzSW52ZXJ0ZWRcIj48L3N1aS1wb3B1cC1hcnJvdz5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkucG9wdXAge1xuICAgIC8qIEF1dG9maXQgcG9wdXAgdG8gdGhlIGNvbnRlbnRzLiAqL1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnVpLmFuaW1hdGluZy5wb3B1cCB7XG4gICAgLyogV2hlbiB0aGUgcG9wdXAgaXMgYW5pbWF0aW5nLCBpdCBtYXkgbm90IGluaXRpYWxseSBiZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICBUaGlzIGZpcmVzIGEgbW91c2UgZXZlbnQsIGNhdXNpbmcgdGhlIGFuY2hvcidzIG1vdXNlbGVhdmUgdG8gZmlyZSAtIG1ha2luZyB0aGUgcG9wdXAgZmxpY2tlci5cbiAgICAgICBTZXR0aW5nIHBvaW50ZXItZXZlbnRzIHRvIG5vbmUgd2hpbGUgYW5pbWF0aW5nIGZpeGVzIHRoaXMgYnVnLiAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWkucG9wdXA6OmJlZm9yZSB7XG4gICAgLyogSGlkZSB0aGUgU2VtYW50aWMgVUkgQ1NTIGFycm93LiAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gYWJvdmUgYW5kIGJlbG93IHdoZW4gcGxhY2VkICd2ZXJ0aWNhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJ0b3BcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGVpdGhlciBzaWRlIHdoZW4gcGxhY2VkICdob3Jpem9udGFsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImxlZnRcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cCBpbXBsZW1lbnRzIElQb3B1cCB7XG4gICAgLy8gQ29uZmlnIHNldHRpbmdzIGZvciB0aGlzIHBvcHVwLlxuICAgIHB1YmxpYyBjb25maWc6VGVtcGxhdGVQb3B1cENvbmZpZzxhbnk+O1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgIHB1YmxpYyBwb3NpdGlvbmluZ1NlcnZpY2U6UG9zaXRpb25pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2FuY2hvcjpFbGVtZW50UmVmO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgcG9wdXAgaXMgb3BlbiBpbnRlcm5hbGx5LlxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHBvcHVwIGNsb3NlLlxuICAgIHB1YmxpYyBjbG9zaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBvcGVucyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25PcGVuOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBjbG9zZXMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uQ2xvc2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBgRWxlbWVudFJlZmAgZm9yIHRoZSBwb3NpdGlvbmluZyBzdWJqZWN0LlxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9jb250YWluZXI6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2FuY2hvciA9IGFuY2hvcjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gKGB0b3BgLCBgbGVmdGAsIGByaWdodGAsIGBib3R0b21gKSBvZiB0aGUgY3VycmVudCBwbGFjZW1lbnQuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCBkaXJlY3Rpb24gYXR0cmlidXRlIGJlZm9yZSBwb3BwZXIgaW5pdCB0byBhbGxvdyBjb3JyZWN0IHBvc2l0aW9uaW5nXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgYWxpZ25tZW50IChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmRpcmVjdGlvbl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFsaWdubWVudCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmFsaWdubWVudF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0ludmVydGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLmludmVydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNCYXNpYykge1xuICAgICAgICAgICAgY2xhc3Nlcy5iYXNpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzRmxvd2luZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5mbG93aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLndpZHRoKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuY29uZmlnLndpZHRoXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBvcGVuIGlmIGN1cnJlbnRseSBjbG9zZWQuXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBvc2l0aW9uaW5nIHNlcnZpY2UgYWZ0ZXIgYSBicmllZiBkZWxheS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nU2VydmljZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5jaG9yLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250YWluZXIuZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50LFxuICAgICAgICAgICAgICAgICAgICBcIi5keW5hbWljLmFycm93XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLmhhc0Fycm93ID0gIXRoaXMuY29uZmlnLmlzQmFzaWM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBvcGVuaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIG9wZW4uXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gY2xvc2UgaWYgY3VycmVudGx5IG9wZW4uXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBjbG9zaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBjbG9zaW5nIHRpbWVyLCB0aGF0IGZpcmVzIHRoZSBgb25DbG9zZWAgZXZlbnQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uQ2xvc2UuZW1pdCgpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIGNsb3NlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIHBvcHVwIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cbiJdfQ==