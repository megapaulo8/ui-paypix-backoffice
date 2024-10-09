import { ModelBase } from "./model-base";

export interface User extends ModelBase {
    role: string;
    email: string;
    phone: string;
    active: boolean;
    isDemo: boolean;
    document: string;
    invitedBy?: User;
    username: string;
    password?: string;
    isInviter: boolean;
    indicatedBy?: User;
    createdDate?: string;
    isAffiliate: boolean;
    isGameBlock: boolean;
    isSubAffiliate: boolean;
    isWithdrawBlock: boolean;
    permissions: Array<string>;
}