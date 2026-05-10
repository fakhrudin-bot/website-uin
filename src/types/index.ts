export interface Faculty {
  id: string
  name: string
  short: string
  description: string
  programs: Program[]
  achievements: string[]
  lecturers: number
  students: number
  image: string
}

export interface Program {
  name: string
  accreditation: string
  degree: string
}

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  author: string
  content: string
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  image: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  year: string
  message: string
  image: string
  rating: number
}

export interface Achievement {
  id: number
  title: string
  value: string
  description: string
  icon: string
}

export interface GalleryItem {
  id: number
  type: 'photo' | 'video'
  title: string
  category: string
  image?: string
  thumbnail?: string
  url?: string
}
