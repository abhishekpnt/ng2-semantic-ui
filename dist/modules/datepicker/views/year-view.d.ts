import { Renderer2 } from "@angular/core";
import { CalendarView } from "./calendar-view";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as ɵngcc0 from '@angular/core';
export declare class CalendarRangeYearService extends CalendarRangeService {
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarYearView extends CalendarView {
    get decadeStart(): number;
    constructor(renderer: Renderer2);
    pad(year: number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCalendarYearView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiCalendarYearView, "sui-calendar-year-view", never, {}, {}, never, never>;
}

//# sourceMappingURL=year-view.d.ts.map