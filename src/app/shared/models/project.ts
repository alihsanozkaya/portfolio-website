export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string
  liveUrl?: string;
  codeUrl?: string;
  year: number;
}
