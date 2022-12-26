import { Renderer2 } from "@angular/core";
import { CalendarView } from "./calendar-view";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as ɵngcc0 from '@angular/core';
export declare class CalendarRangeMinuteService extends CalendarRangeService {
    calcStart(start: Date): Date;
    calcDates(start: Date): Date[];
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarMinuteView extends CalendarView {
    get date(): string;
    constructor(renderer: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiCalendarMinuteView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiCalendarMinuteView, "sui-calendar-minute-view", never, {}, {}, never, never>;
}

//# sourceMappingURL=minute-view.d.ts.map