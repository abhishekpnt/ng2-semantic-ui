import { ViewContainerRef, TemplateRef } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { IResultContext } from "./search";
import * as ɵngcc0 from '@angular/core';
export declare class SuiSearchResult<T> {
    componentFactory: SuiComponentFactory;
    readonly hasClasses: boolean;
    value: T;
    query: string;
    formatter: (obj: T, query: string) => string;
    private _template?;
    get template(): TemplateRef<IResultContext<T>> | undefined;
    set template(template: TemplateRef<IResultContext<T>> | undefined);
    templateSibling: ViewContainerRef;
    constructor(componentFactory: SuiComponentFactory);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiSearchResult<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuiSearchResult<any>, "sui-search-result", never, { "formatter": "formatter"; "template": "template"; "value": "value"; "query": "query"; }, {}, never, never>;
}

//# sourceMappingURL=search-result.d.ts.map