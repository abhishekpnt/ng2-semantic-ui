import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, HostListener } from "@angular/core";
import { CalendarService } from "./../services/calendar.service";
import { DatetimeConfig } from "../classes/calendar-config";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
export const DatepickerMode = {
    Year: "year",
    Month: "month",
    Date: "date",
    Datetime: "datetime",
    Time: "time"
};
let SuiDatepicker = class SuiDatepicker {
    constructor(localizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
        this.hasClasses = true;
    }
    onMouseDown(e) {
        e.preventDefault();
    }
};
SuiDatepicker.ctorParameters = () => [
    { type: SuiLocalizationService }
];
__decorate([
    HostBinding("class.ui"),
    HostBinding("class.active"),
    HostBinding("class.calendar"),
    __metadata("design:type", Boolean)
], SuiDatepicker.prototype, "hasClasses", void 0);
__decorate([
    HostListener("mousedown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], SuiDatepicker.prototype, "onMouseDown", null);
SuiDatepicker = __decorate([
    Component({
        selector: "sui-datepicker",
        template: `
<ng-container [ngSwitch]="service.currentView">
    <sui-calendar-year-view [service]="service" *ngSwitchCase="0"></sui-calendar-year-view>
    <sui-calendar-month-view [service]="service" *ngSwitchCase="1"></sui-calendar-month-view>    
    <sui-calendar-date-view [service]="service" *ngSwitchCase="2"></sui-calendar-date-view>    
    <sui-calendar-hour-view [service]="service" *ngSwitchCase="3"></sui-calendar-hour-view>    
    <sui-calendar-minute-view [service]="service" *ngSwitchCase="4"></sui-calendar-minute-view>    
</ng-container>
`,
        styles: [`
:host {
    user-select: none;
}
`]
    }),
    __metadata("design:paramtypes", [SuiLocalizationService])
], SuiDatepicker);
export { SuiDatepicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2RhdGVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSWxGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRztJQUMxQixJQUFJLEVBQUUsTUFBd0I7SUFDOUIsS0FBSyxFQUFFLE9BQXlCO0lBQ2hDLElBQUksRUFBRSxNQUF3QjtJQUM5QixRQUFRLEVBQUUsVUFBNEI7SUFDdEMsSUFBSSxFQUFFLE1BQXdCO0NBQ2pDLENBQUM7QUFtQkYsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVF0QixZQUFZLG1CQUEwQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksY0FBYyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUdNLFdBQVcsQ0FBQyxDQUFZO1FBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQTs7WUFWbUMsc0JBQXNCOztBQUp0RDtJQUhDLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDdkIsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUMzQixXQUFXLENBQUMsZ0JBQWdCLENBQUM7O2lEQUNLO0FBV25DO0lBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztxQ0FDakIsVUFBVTs7Z0RBRTlCO0FBakJRLGFBQWE7SUFqQnpCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7Ozs7OztDQVFiO2lCQUNZOzs7O0NBSVo7S0FDQSxDQUFDO3FDQVNrQyxzQkFBc0I7R0FSN0MsYUFBYSxDQWtCekI7U0FsQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRldGltZUNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5cbmV4cG9ydCB0eXBlIERhdGVwaWNrZXJNb2RlID0gXCJ5ZWFyXCIgfCBcIm1vbnRoXCIgfCBcImRhdGVcIiB8IFwiZGF0ZXRpbWVcIiB8IFwidGltZVwiO1xuXG5leHBvcnQgY29uc3QgRGF0ZXBpY2tlck1vZGUgPSB7XG4gICAgWWVhcjogXCJ5ZWFyXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgTW9udGg6IFwibW9udGhcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBEYXRlOiBcImRhdGVcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBEYXRldGltZTogXCJkYXRldGltZVwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIFRpbWU6IFwidGltZVwiIGFzIERhdGVwaWNrZXJNb2RlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktZGF0ZXBpY2tlclwiLFxuICAgIHRlbXBsYXRlOiBgXG48bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzZXJ2aWNlLmN1cnJlbnRWaWV3XCI+XG4gICAgPHN1aS1jYWxlbmRhci15ZWFyLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIwXCI+PC9zdWktY2FsZW5kYXIteWVhci12aWV3PlxuICAgIDxzdWktY2FsZW5kYXItbW9udGgtdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjFcIj48L3N1aS1jYWxlbmRhci1tb250aC12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLWRhdGUtdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjJcIj48L3N1aS1jYWxlbmRhci1kYXRlLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItaG91ci12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiM1wiPjwvc3VpLWNhbGVuZGFyLWhvdXItdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1taW51dGUtdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjRcIj48L3N1aS1jYWxlbmRhci1taW51dGUtdmlldz4gICAgXG48L25nLWNvbnRhaW5lcj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlciB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jYWxlbmRhclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgc2VydmljZTpDYWxlbmRhclNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gbmV3IENhbGVuZGFyU2VydmljZShuZXcgRGF0ZXRpbWVDb25maWcoKSwgbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5kYXRlcGlja2VyKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIl19