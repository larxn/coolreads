import debounce from 'lodash/debounce'
import { Book } from '@/lib/models/content'
import { books } from '@/database/fixtures/books'

export function useBookSearch(results: Ref<Book[]>) {
  return {
    searchBooks: debounce((rawQuery: string) => {
      const query = rawQuery.trim().toLowerCase()

      if (!query) {
        results.value = []
        return
      }

      results.value = books.filter((book) => {
        return (
          book.title.toLowerCase().includes(query) ||
          book.authors.some((author) => author.toLowerCase().includes(query))
        )
      })
    }, 500),
  }
}
