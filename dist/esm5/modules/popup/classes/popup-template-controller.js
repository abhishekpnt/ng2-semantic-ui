import { __decorate, __extends, __metadata } from "tslib";
import { TemplateRef, Renderer2, ElementRef, Directive } from "@angular/core";
import { SuiPopupController } from "./popup-controller";
import { ITemplateRefContext, SuiComponentFactory, IImplicitContext } from "../../../misc/util/internal";
import { PopupConfig, IPopupConfig } from "./popup-config";
var templateRef = TemplateRef;
var TemplatePopupConfig = /** @class */ (function (_super) {
    __extends(TemplatePopupConfig, _super);
    function TemplatePopupConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TemplatePopupConfig;
}(PopupConfig));
export { TemplatePopupConfig };
var SuiPopupTemplateController = /** @class */ (function (_super) {
    __extends(SuiPopupTemplateController, _super);
    function SuiPopupTemplateController(renderer, element, componentFactory, config) {
        return _super.call(this, renderer, element, componentFactory, config) || this;
    }
    SuiPopupTemplateController.prototype.configure = function (config) {
        _super.prototype.configure.call(this, config);
        if (config) {
            this.template = config.template;
            this.context = config.context;
        }
    };
    SuiPopupTemplateController.prototype.open = function () {
        // If there is a template, inject it into the view.
        if (this.template) {
            this.popup.templateSibling.clear();
            this._componentFactory.createView(this.popup.templateSibling, this.template, {
                $implicit: this.popup,
                context: this.context
            });
        }
        _super.prototype.open.call(this);
    };
    SuiPopupTemplateController.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: SuiComponentFactory },
        { type: PopupConfig }
    ]; };
    SuiPopupTemplateController = __decorate([
        Directive(),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            SuiComponentFactory,
            PopupConfig])
    ], SuiPopupTemplateController);
    return SuiPopupTemplateController;
}(SuiPopupController));
export { SuiPopupTemplateController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtdGVtcGxhdGUtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvcG9wdXAvY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBV2hDO0lBQTRDLHVDQUFXO0lBQXZEOztJQUdBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFIRCxDQUE0QyxXQUFXLEdBR3REOztBQUdEO0lBQW1ELDhDQUFrQjtJQUlqRSxvQ0FBWSxRQUFrQixFQUNsQixPQUFrQixFQUNsQixnQkFBb0MsRUFDcEMsTUFBa0I7ZUFFMUIsa0JBQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7SUFDdEQsQ0FBQztJQUVNLDhDQUFTLEdBQWhCLFVBQWlCLE1BQStCO1FBQzVDLGlCQUFNLFNBQVMsWUFBQyxNQUFNLENBQUMsQ0FBQztRQUV4QixJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU0seUNBQUksR0FBWDtRQUNJLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3hCLENBQUMsQ0FBQztTQUNOO1FBRUQsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBN0JvQixTQUFTO2dCQUNWLFVBQVU7Z0JBQ0QsbUJBQW1CO2dCQUM3QixXQUFXOztJQVByQiwwQkFBMEI7UUFEdEMsU0FBUyxFQUFFO3lDQUthLFNBQVM7WUFDVixVQUFVO1lBQ0QsbUJBQW1CO1lBQzdCLFdBQVc7T0FQckIsMEJBQTBCLENBa0N0QztJQUFELGlDQUFDO0NBQUEsQUFsQ0QsQ0FBbUQsa0JBQWtCLEdBa0NwRTtTQWxDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyLCBJUG9wdXAgfSBmcm9tIFwiLi9wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBTdWlDb21wb25lbnRGYWN0b3J5LCBJSW1wbGljaXRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBDb25maWcsIElQb3B1cENvbmZpZyB9IGZyb20gXCIuL3BvcHVwLWNvbmZpZ1wiO1xuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPiBleHRlbmRzIElJbXBsaWNpdENvbnRleHQ8SVBvcHVwPiB7XG4gICAgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVQb3B1cENvbmZpZzxUPiBleHRlbmRzIElQb3B1cENvbmZpZyB7XG4gICAgdGVtcGxhdGU/OlRlbXBsYXRlUmVmPElUZW1wbGF0ZVBvcHVwQ29udGV4dDxUPj47XG4gICAgY29udGV4dD86VDtcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUG9wdXBDb25maWc8VD4gZXh0ZW5kcyBQb3B1cENvbmZpZyB7XG4gICAgcHVibGljIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cFRlbXBsYXRlQ29udHJvbGxlcjxUPiBleHRlbmRzIFN1aVBvcHVwQ29udHJvbGxlciB7XG4gICAgcHVibGljIHRlbXBsYXRlPzpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+O1xuICAgIHB1YmxpYyBjb250ZXh0PzpUO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgY29uZmlnOlBvcHVwQ29uZmlnKSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNvbXBvbmVudEZhY3RvcnksIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmZpZ3VyZShjb25maWc/OklUZW1wbGF0ZVBvcHVwQ29uZmlnPFQ+KTp2b2lkIHtcbiAgICAgICAgc3VwZXIuY29uZmlndXJlKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbmZpZy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKTp2b2lkIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0ZW1wbGF0ZSwgaW5qZWN0IGl0IGludG8gdGhlIHZpZXcuXG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLnRlbXBsYXRlU2libGluZy5jbGVhcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5LmNyZWF0ZVZpZXcodGhpcy5wb3B1cC50ZW1wbGF0ZVNpYmxpbmcsIHRoaXMudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMucG9wdXAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG59XG4iXX0=