import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiDimmerModule } from "../dimmer/internal";
import { SuiTransitionModule } from "../transition/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiModalService } from "./services/modal.service";
import { SuiModal } from "./components/modal";
import { SuiModalDimmer } from "./components/dimmer";
let SuiModalModule = class SuiModalModule {
};
SuiModalModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            SuiDimmerModule,
            SuiTransitionModule,
            SuiUtilityModule
        ],
        declarations: [
            SuiModal,
            SuiModalDimmer
        ],
        exports: [
            SuiModal
        ],
        providers: [
            SuiModalService
        ],
        entryComponents: [
            SuiModal
        ]
    })
], SuiModalModule);
export { SuiModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXVCckQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQXJCMUIsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsZ0JBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsUUFBUTtZQUNSLGNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCxRQUFRO1NBQ1g7UUFDRCxTQUFTLEVBQUU7WUFDUCxlQUFlO1NBQ2xCO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsUUFBUTtTQUNYO0tBQ0osQ0FBQztHQUNXLGNBQWMsQ0FBRztTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpRGltbWVyTW9kdWxlIH0gZnJvbSBcIi4uL2RpbW1lci9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTW9kYWxTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBTdWlNb2RhbERpbW1lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGltbWVyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aU1vZGFsLFxuICAgICAgICBTdWlNb2RhbERpbW1lclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aU1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbE1vZHVsZSB7fVxuIl19