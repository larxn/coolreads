import user from './user'
import { books } from './books'

export const review = {
  user,
  book: {
    id: '1',
    title: 'Last Evening on Earth',
    authors: ['Roberto Bolaño'],
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Fleoe.webp?alt=media',
  },
  review: {
    rating: 4.5,
    comment:
      '"The melancholy folklore of exile", as Roberto Bolano once put it, pervades these fourteen haunting stories. Bolano\'s narrators are usually writers grappling with private (and generally unlucky) quests, who typically speak in the first person, as if giving a deposition, like witnesses to a crime.',
  },
  meta: {
    publishedAt: '3m',
    comments: ['Lorem', 'Lorem', 'Lorem', 'Lorem'],
    likes: 108,
  },
}

export const quote = {
  user,
  book: {
    id: '1',
    title: 'Last Evening on Earth',
    authors: ['Roberto Bolaño'],
  },
  quote:
    'The girl replies that she was dreaming about her mother, who died not long ago. The dead are at peace, thinks B stretching out in the bed. As if she had read his mind, the girls says that no one who has passed through this world is at peace. Not anymore, not ever, she says with total conviction.',
  meta: {
    publishedAt: '5h',
    comments: ['Lorem', 'Lorem'],
    likes: 3,
  },
}

export const list = {
  user,
  books,
  name: 'Anti-hero’s journey',
  meta: {
    publishedAt: '2w',
    comments: [],
    likes: 0,
  },
}
