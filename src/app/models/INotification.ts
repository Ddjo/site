export interface INotification {
    id: number;
    fr: {
        summary: string;
        text: string;
    };
    en: {
        summary: string;
        text: string;
    };
    es: {
        summary: string;
        text: string;
    };
    new: boolean;
}
