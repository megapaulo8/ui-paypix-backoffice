import { ActionExport } from "./action-export";
import { ModelBase } from "./model-base";

export interface Export extends ModelBase {
    downloaded: boolean;
    action: ActionExport;
}