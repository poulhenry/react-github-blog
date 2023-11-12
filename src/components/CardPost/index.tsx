import { Link } from "react-router-dom"
import { formatDistance } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface CarPostProps {
  id: string
  title: string
  body: string
  updatedAt: string
}

export function CardPost({ id, title, body, updatedAt}: CarPostProps) {
  const dateFormatted = formatDistance(
    new Date(updatedAt), 
    new Date(), 
    { 
      locale: ptBr,
      addSuffix: false
    }
  )

  const bodyPost = body.split(' ').length >= 26 ? body.split(' ').slice(0, 26).join(' ') + '...' : body

  return (
    <Link to={`post/${id}`} className="w-[416px] h-64 rounded-xl bg-base-post p-8 flex flex-col overflow-hidden border border-base-post hover:border-base-label">
      <div className="flex gap-1">
        <h2 className="w-3/4 text-left text-xl leading-8 font-bold text-base-title overflow-hidden text-ellipsis flex-1">{title}</h2>
        <span className="text-sm text-base-span">{dateFormatted}</span>
      </div>

      <p className="text-base text-base-text mt-5 overflow-hidden text-ellipsis">{bodyPost}</p>
    </Link>
  )
}