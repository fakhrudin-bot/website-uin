import Link from 'next/link'
import { ArrowLeft, Calendar, User, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react'
import { news } from '@/data/dummyData'
import { formatDate } from '@/lib/utils'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import AnimatedCard from '@/components/ui/AnimatedCard'

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id.toString(),
  }))
}

export default function BeritaDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const article = news.find((n) => n.id === Number(params.id))
  const relatedNews = news.filter((n) => n.id !== Number(params.id) && n.category === article?.category).slice(0, 3)

  if (!article) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Artikel tidak ditemukan</h1>
        <Link href="/berita" className="text-uin-primary hover:underline mt-4 inline-block">
          Kembali ke berita
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Article Header */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/berita" className="inline-flex items-center gap-2 text-gray-500 hover:text-uin-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>

          <div>
            <span className="inline-block px-3 py-1 bg-uin-50 dark:bg-uin-900/50 text-uin-primary dark:text-uin-400 text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="rounded-2xl overflow-hidden">
          <img
  src={article.image}
  alt={article.title}
  className="aspect-video w-full object-cover"
/>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
            {article.excerpt}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {article.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <span className="text-sm text-gray-500">Bagikan:</span>
          <div className="flex gap-2">
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Berita Terkait</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item, index) => (
                <AnimatedCard key={item.id} delay={index * 0.1}>
                  <Link href={`/berita/${item.id}`} className="block group">
                    <div className="relative overflow-hidden">
                      <ImagePlaceholder className="aspect-[4/3] w-full" label={item.category} />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-uin-primary dark:group-hover:text-uin-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
