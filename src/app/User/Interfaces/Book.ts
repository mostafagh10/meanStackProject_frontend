import { Author } from "./Author";
import { Category } from "./Category";

export interface Book {
  _id: String,
  photo: String,
  bookName: String,
  categoryId: Category,
  authorId: Author,
}