import Link from 'next/link'
import Image from 'next/image'

interface EbookCardProps {
  slug: string
  title: string
  description: string
  price: number
  coverUrl: string
  category?: string
}

export default function EbookCard({ slug, title, description, price, coverUrl, category }: EbookCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all hover:scale-[1.02] group">
      <div className="relative h-48 bg-gradient-to-br from-violet-900/50 to-blue-900/40">
        {coverUrl ? (
          <Image src={coverUrl} alt={title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">📚</span>
          </div>
        )}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-violet-600/80 text-white text-xs font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-white font-semibold mb-1.5 line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          <Link href={`/store/${slug}`}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  )
}
