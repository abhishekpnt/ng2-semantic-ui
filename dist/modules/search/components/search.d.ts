import { AfterViewInit, EventEmitter, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { ITemplateRefContext, IFocusEvent } from "../../../misc/util/internal";
import { DropdownService } from "../../dropdown/internal";
import { ISearchLocaleValues, RecursivePartial, SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SearchService } from "../services/search.service";
import { LookupFn, FilterFn } from "../helpers/lookup-fn";
import * as ɵngcc0 from '@angular/core';
export interface IResultContext<T> extends ITemplateRefContext<T> {
    query: string;
}
export declare class SuiSearch<T> implements AfterViewInit {
    private _element;
    private _localizationService;
    dropdownService: DropdownService;
    searchService: SearchService<T, T>;
    private _menu;
    readonly hasClasses: boolean;
    readonly tabindex: number;
    get isActive(): boolean;
    hasIcon: boolean;
    private _placeholder;
    get placeholder(): string;
    set placeholder(placeholder: string);
    private _localeValues;
    localeOverrides: RecursivePartial<ISearchLocaleValues>;
    get localeValues(): ISearchLocaleValues;
    get query(): string;
    set query(query: string);
    set options(options: T[] | undefined);
    set optionsFilter(filter: FilterFn<T> | undefined);
    set optionsLookup(lookupFn: LookupFn<T> | undefined);
    set optionsField(field: string | undefined);
    private _resultFormatter?;
    get resultFormatter(): (result: T, query: string) => string;
    set resultFormatter(formatter: (result: T, query: string) => string);
    resultTemplate: TemplateRef<IResultContext<T>>;
    retainSelectedResult: boolean;
    set searchDelay(delay: number);
    get isSearching(): boolean;
    maxResults: number;
    get results(): T[];
    selectedResult?: T;
    onResultSelected: EventEmitter<T>;
    transition: string;
    transitionDuration: number;
    constructor(_element: ElementRef, renderer: Renderer2, _localizationService: SuiLocalizationService);
    ngAfterViewInit(): void;
    private onLocaleUpdate;
    select(result: T): void;
    onClick(e: MouseEvent): void;
    onFocusIn(): void;
    private open;
    onFocusOut(e: IFocusEvent): void;
    readValue(object: T): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSearch<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSearch<any>, "sui-search", never, { "hasIcon": "hasIcon"; "retainSelectedResult": "retainSelectedResult"; "searchDelay": "searchDelay"; "maxResults": "maxResults"; "transition": "transition"; "transitionDuration": "transitionDuration"; "placeholder": "placeholder"; "options": "options"; "optionsFilter": "optionsFilter"; "optionsLookup": "optionsLookup"; "optionsField": "optionsField"; "resultFormatter": "resultFormatter"; "resultTemplate": "resultTemplate"; }, { "onResultSelected": "resultSelected"; }, never, never>;
}

//# sourceMappingURL=search.d.ts.map