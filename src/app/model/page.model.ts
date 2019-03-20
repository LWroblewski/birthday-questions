export interface Page {
  index: string;
  title?: string;
  text?: string[];
  picture?: Picture;
  question: string;
  answers?: Answer[];
  theme?: string;
}

export interface Picture {
  path: string;
  width: number;
}

export interface Answer {
  label: string;
  redirect: string;
}
