import { AppRootStoreStateInterface } from "./state.interface";
import { StoreInjectedPropsType } from "../../helper/store/types";

export type AppRootStoreInjectedPropsType<
    K extends keyof AppRootStoreStateInterface, 
    C extends boolean = false
> = StoreInjectedPropsType<AppRootStoreStateInterface, K, C>;