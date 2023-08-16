import { CardPost } from '../../components/CardPost'
import { UserProfile } from '../../components/UserProfile'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto'>
        <UserProfile />

        <div className='flex flex-col gap-3 mt-[72px]'>
          <div className='flex items-center justify-between'>
            <strong className='text-lg font-bold text-base-subtitle'>Publicações</strong>

            <span className='text-sm text-base-span'>4 publicações</span>
          </div>

          <input className='p-4 w-full rounded-md border border-base-border outline-none bg-base-brand focus:border-brand placeholder:text-base-label text-base-text' type="text" placeholder='Buscar conteúdo' />
        </div>

        <div className='mt-12 grid gap-x-8 gap-y-8 grid-cols-3'>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </main>
  )
}