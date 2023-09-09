/**
 * Title: book.interface.ts
 * Author: Tiffany Reyes
 * Date: 09 Sept 2023
 * Description: book interface
 */

// exporting book class elements
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
