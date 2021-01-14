export interface QuestionAnswer {
  id: number;
  question: string;
  questionType: string;
  answer: string;
  sort: number;
  answerExtra?: any;
}

export interface SessionSpeaker {
  id: string;
  name: string;
}

export interface CategoryItem {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  categoryItems: CategoryItem[];
  sort: number;
}

export interface Session {
  questionAnswers: QuestionAnswer[];
  id: string;
  title: string;
  description: string;
  startsAt?: any;
  endsAt?: any;
  isServiseSession: boolean;
  isPlenumSession: boolean;
  speakers: SessionSpeaker[];
  categories: Category[];
  roomId?: any;
  room?: any;
}
