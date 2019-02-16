import { TimelineStoreStateInterface } from "./state.interface";

export const timelineStoreGetInitialState = (): TimelineStoreStateInterface => ({
    readyState: null,
    items: []
});