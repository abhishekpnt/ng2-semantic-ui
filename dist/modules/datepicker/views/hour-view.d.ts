import { Renderer2 } from "@angular/core";
import { CalendarView } from "./calendar-view";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as ɵngcc0 from '@angular/core';
export declare class CalendarRangeHourService extends CalendarRangeService {
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarHourView extends CalendarView {
    get date(): string;
    constructor(renderer: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCalendarHourView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiCalendarHourView, "sui-calendar-hour-view", never, {}, {}, never, never>;
}

//# sourceMappingURL=hour-view.d.ts.map