import { SuiComponentFactory } from "../../../misc/util/internal";
import { ModalConfig } from "../classes/modal-config";
import { ActiveModal } from "../classes/active-modal";
import * as ɵngcc0 from '@angular/core';
export declare class SuiModalService {
    private _componentFactory;
    constructor(_componentFactory: SuiComponentFactory);
    open<T, U, V>(modal: ModalConfig<T, U, V>): ActiveModal<T, U, V>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuiModalService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SuiModalService>;
}

//# sourceMappingURL=modal.service.d.ts.map