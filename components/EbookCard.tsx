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
    <div className="bg-surface border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/15 transition-colors group">
      <div className="relative h-44 bg-card flex items-center justify-center border-b border-white/[0.06]">
        {coverUrl ? (
          <Image src={coverUrl} alt={title} fill className="object-cover" />
        ) : (
          <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="text-white/20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        )}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 rounded bg-black/60 text-gray-300 text-xs font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-white font-semibold text-sm mb-1.5 line-clamp-2">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white tabular-nums">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          <Link href={`/store/${slug}`}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  )
}
