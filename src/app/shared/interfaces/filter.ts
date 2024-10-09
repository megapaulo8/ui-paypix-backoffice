import { SelectOption } from "./select-option";

export interface Filter {
    page: number;
    filterBy: string;
    textSearch: string;
    totalItems?: number;
    itemsPerPage: number;
    typeAccount: SelectOption;
    keyTypeAccount: SelectOption;
}