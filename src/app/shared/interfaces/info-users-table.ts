import { Button } from "./button";

export interface InfoUsersTable {
    type: string;
    text?: string;
    email?: string;
    color?: string;
    button?: Button;
    username?: string;
    document?: string;
    userPhoto?: string;
    documentText?: string;
}