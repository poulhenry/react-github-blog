import { useQuery } from '@tanstack/react-query'
import { CardPost } from '../../components/CardPost'
import { UserProfile } from '../../components/UserProfile'
import { api } from '../../services/api'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

interface DataProps {
  name: string
  avatar_url: string
  followers: string
  login: string
}

interface DataPost {
  id: string
  title: string
  body: string
  updatedAt: string
}

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export default function Home() {
  const [queryParam, setQueryParam] = useState('')

  const {data, isSuccess } = useQuery({
    queryKey: ['github-user'], 
    queryFn: async (): Promise<DataProps> => {
    const response = await api.get('/users/poulhenry')

    return response.data
  }, 
    refetchOnWindowFocus: false
  })

  const { data: dataIssues } = useQuery({
    queryKey: ['issues', queryParam],
    queryFn: async (): Promise<DataPost[]> => {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `repo:poulhenry/react-github-blog ${queryParam}`
        }
      })

      const posts = response.data.items?.map(post => {
        return {
          id: post.number,
          title: post.title,
          body: post.body,
          updatedAt: post.updated_at
        }
      })

      return posts
    },
    refetchOnWindowFocus: false
  })

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  const qtdPosts = dataIssues ? dataIssues.length : 0

  function handleSearchForm(data: SearchFormInput) {
    setQueryParam(data.query)
  }

  return (
    <>
      {isSuccess && (
        <UserProfile 
          name={data.name} 
          avatarUrl={data.avatar_url} 
          followers={data.followers} 
          login={data.login} 
        />
      )}

      <div className='flex flex-col gap-3 mt-[72px]'>
        <div className='flex items-center justify-between'>
          <strong className='text-lg font-bold text-base-subtitle'>Publicações</strong>

          <span className='text-sm text-base-span'>{qtdPosts} publicações</span>
        </div>

        <form onSubmit={handleSubmit(handleSearchForm)}>
          <input className='p-4 w-full rounded-md border border-base-border outline-none bg-base-brand focus:border-brand placeholder:text-base-label text-base-text' type="text" placeholder='Buscar conteúdo' {...register('query')} />
        </form>

      </div>

      <div className='mt-12 grid gap-x-8 gap-y-8 grid-cols-3 pb-8'>
        {dataIssues && dataIssues.map(issue => (
          <CardPost key={issue.id} {...issue} />
        ))}
      </div>
    </>
  )
}