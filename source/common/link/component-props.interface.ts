export interface LinkComponentPropsInterface {
    to: string;
    title?: string;
    open?:boolean;
    onClick?: (e) => void;
}