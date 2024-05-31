export interface IExperience {
    id: number;
    startDate: Date;
    endDate: Date;
    company: string;
    fr: {
        place: string;
        function: string;
        details: string;
    };
    en: {
        place: string;
        function: string;
        details: string;
    };
    es: {
        place: string;
        function: string;
        details: string;
    };
}
