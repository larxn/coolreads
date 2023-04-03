export type User = {
  id: string
  fullName: string
  username: string
  avatarUrl: string
}

export type Notification = {
  id: string
  subject: Omit<User, 'bio'>
  predicate: string
  timestamp: string
  isRead?: boolean
}
