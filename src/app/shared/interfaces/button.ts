export interface Button {
    text?: string;
    type?: string;
    pathTo?: string;
    imgUrl?: string;
    iconUrl?: string;
    iconName?: string;
    disabled?: boolean;
    textSearch?: string;
    hasDropdown?: boolean;
    buttons?: Array<Button>;
}
