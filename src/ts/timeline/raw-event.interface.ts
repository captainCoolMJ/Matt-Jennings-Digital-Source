export interface TimelineRawEventInterface {
    from: string;
    to: string;
    action: string;
    category: 'work' | 'life';
    details: string;
}