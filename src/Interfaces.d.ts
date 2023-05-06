export interface ITextByLanguage {
  en: string;
  es: string;
  ca: string;
  de: string;
}

export interface IProject {
  id: number;
  path: string;
  title: string;
  year: number;
  category: ITextByLanguage;
  pointOfInterest: { x: number; y: number };
  textColor: string;
  backgroundColor: string;
  width: number;
  pathToImg: string;
  tags: string[];
  invisibleTags?: string[];
  madeFor?: ITextByLanguage;
  description: ITextByLanguage;
  githubLink?: string;
  figmaLink?: string;
  npmComand?: string;
  npmLink?: string;
  link: string;
  relevant: boolean;
}

export interface CardInterface {
  index?: number;
  allData?: Array<IProject>;
  project: IProject;
  mobile: boolean;
}

export interface HeaderTextInterface {
  title: string;
  description: string;
}
export interface FooterTextInterface {
  greeting: string;
  curriculum: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}
export interface IErrorOnSearch {
  title: string;
  description: string;
  action: string;
}
export interface ILanguagesData {
  en: string;
  es: string;
  ca: string;
}

export interface ICardText {
  madeFor: string;
  tags: string;
  description: string;
  githubLink: string;
  link: string;
  linkButton: string;
}
export interface InavTexts {
  placeholder: string;
}
export interface InavTextsLanguages {
  en: InavTexts;
  es: InavTexts;
  ca: InavTexts;
}

export interface ICardDataLanguages {
  en: CardTextInterface;
  es: CardTextInterface;
  ca: CardTextInterface;
}

export interface FooterDataInterface {
  en: FooterTextInterface;
  es: FooterTextInterface;
  ca: FooterTextInterface;
}
export interface HeaderDataInterface {
  en: HeaderTextInterface;
  es: HeaderTextInterface;
  ca: HeaderTextInterface;
}
export interface IErrorLanguages {
  en: IErrorOnSearch;
  es: IErrorOnSearch;
  ca: IErrorOnSearch;
}
export interface ILanguagesDataLanguages {
  en: ILanguagesData;
  es: ILanguagesData;
  ca: ILanguagesData;
}

export interface IMadeForText {
  en: IMadeForTextOneLanguage;
  es: IMadeForTextOneLanguage;
  ca: IMadeForTextOneLanguage;
  de: IMadeForTextOneLanguage;
}
