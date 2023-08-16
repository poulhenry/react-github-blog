export function CardPost() {
  return (
    <a href="#" className="w-[416px] h-64 rounded-xl bg-base-post p-8 flex flex-col overflow-hidden border border-base-post hover:border-base-label">
      <div className="flex items-start justify-between">
        <h2 className="w-3/4 text-left text-xl leading-8 font-bold text-base-title">JavaScript data types and data structures</h2>
        <span className="text-sm text-base-span">Há 1 dia</span>
      </div>

      <p className="text-base text-base-text mt-5">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties...</p>
    </a>
  )
}