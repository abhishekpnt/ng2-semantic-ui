import { Component } from "@angular/core";
import { SuiModal, ComponentModalConfig, ModalSize } from "ng2-semantic-ui";

interface IAlertModalContext {
    message:string;
    title?:string;
}

@Component({
    selector: "demo-modal-alert",
    template: `
<div class="actions">
    <button class="ui green button" (click)="modal.approve(undefined)" autofocus>OK</button>
</div>
`
})
export class AlertModalComponent {
    constructor(public modal:SuiModal< void, void>) {}
}

export class AlertModal extends ComponentModalConfig<IAlertModalContext, void, void> {
    constructor(message:string, title?:string) {
        super(AlertModalComponent, { message, title });

        this.transitionDuration = 200;
        this.size = ModalSize.Small;
    }
}
