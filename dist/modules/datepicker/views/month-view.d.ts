import { Renderer2 } from "@angular/core";
import { CalendarView } from "./calendar-view";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as ɵngcc0 from '@angular/core';
export declare class CalendarRangeMonthService extends CalendarRangeService {
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarMonthView extends CalendarView {
    get year(): string;
    constructor(renderer: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCalendarMonthView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiCalendarMonthView, "sui-calendar-month-view", never, {}, {}, never, never>;
}

//# sourceMappingURL=month-view.d.ts.map