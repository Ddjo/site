export interface IAboutContent {
    firstName: string;
    lastName: string;
    fr: IAboutTexts;
    en: IAboutTexts;
    es: IAboutTexts;
}

export interface IAboutTexts {
    intro: {
        hi: string;
        presentationWord1: string;
        presentationWord2: string;
        presentationWord3: string;
    };
}
