export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  comments: [{ text: string; username: string }];
  created_at: string;
  updated_at: string;
}