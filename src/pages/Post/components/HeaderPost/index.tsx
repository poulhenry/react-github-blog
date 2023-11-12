import { Link } from "react-router-dom";
import {  CalendarDays, ChevronLeft, ExternalLink, Github, MessageCircle } from "lucide-react";
import { formatDistance } from "date-fns";
import ptBr from 'date-fns/locale/pt-BR'

interface HeaderPostProps {
  title: string
  user: string
  urlGithub: string
  updatedAt: string
  comments: number
}

export function HeaderPost({ title, user,  urlGithub, comments, updatedAt}: HeaderPostProps) {

  const dateFormatted = formatDistance(new Date(updatedAt), new Date(), { 
    locale: ptBr,
    addSuffix: false
  })

  return (
    <div className="w-full h-48 -mt-20 p-8 flex flex-col bg-base-profile rounded-xl shadow-2xl">
      <div className="flex items-center justify-between">
        <Link to=".." className="flex gap-2 text-xs font-bold uppercase text-brand hover:underline"><ChevronLeft size={16}/> Voltar</Link>

        <a href={urlGithub} target="_blank" className="flex gap-2 text-xs font-bold uppercase text-brand hover:underline">Ver no Github <ExternalLink size={16} /></a>
      </div>

      <h1 className="mt-10 text-base-title text-2xl font-bold">{title}</h1>

      <div className="mt-5 flex justify-start items-center gap-6">
        <span className="flex items-center gap-1 text-base-span text-base"><Github size={16}/> {user}</span>
        <span className="flex items-center gap-1 text-base-span text-base"><CalendarDays size={16} /> {dateFormatted}</span>
        <span className="flex items-center gap-1 text-base-span text-base"><MessageCircle size={16} /> {comments} Comentários</span>
      </div>
    </div>
  )
}