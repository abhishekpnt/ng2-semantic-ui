import { Renderer2 } from "@angular/core";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarView } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as ɵngcc0 from '@angular/core';
export declare class CalendarRangeDateService extends CalendarRangeService {
    calcStart(start: Date): Date;
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarDateView extends CalendarView {
    get days(): string[];
    get date(): string;
    constructor(renderer: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCalendarDateView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiCalendarDateView, "sui-calendar-date-view", never, {}, {}, never, never>;
}

//# sourceMappingURL=date-view.d.ts.map