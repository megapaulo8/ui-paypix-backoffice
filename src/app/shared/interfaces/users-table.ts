import { ModelBase } from "./model-base";
import { InfoUsersTable } from "./info-users-table";

export interface UsersTable extends ModelBase {
    user: Array<InfoUsersTable>;
}