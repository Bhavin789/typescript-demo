export default interface FeedProps {
  title: string;
  description: string;
  likes: number;
  author: string;
  ageGroup: "all" | "teen";
  comment?: string;
}
