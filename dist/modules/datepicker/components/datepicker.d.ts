import { CalendarService } from "./../services/calendar.service";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import * as ɵngcc0 from '@angular/core';
export declare type DatepickerMode = "year" | "month" | "date" | "datetime" | "time";
export declare const DatepickerMode: {
    Year: "time" | "month" | "year" | "date" | "datetime";
    Month: "time" | "month" | "year" | "date" | "datetime";
    Date: "time" | "month" | "year" | "date" | "datetime";
    Datetime: "time" | "month" | "year" | "date" | "datetime";
    Time: "time" | "month" | "year" | "date" | "datetime";
};
export declare class SuiDatepicker {
    readonly hasClasses: boolean;
    service: CalendarService;
    constructor(localizationService: SuiLocalizationService);
    onMouseDown(e: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiDatepicker, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiDatepicker, "sui-datepicker", never, {}, {}, never, never>;
}

//# sourceMappingURL=datepicker.d.ts.map