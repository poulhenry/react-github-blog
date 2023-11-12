import { useParams } from "react-router-dom";
import { HeaderPost } from "./components/HeaderPost";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import Markdown from "react-markdown";

interface PostData {
  id: number
  title: string
  user: string
  url: string
  body: string
  comments: number
  updatedAt: string
}

export default function Post() {
  const { idPost } = useParams()

  const { data } = useQuery<PostData>({
    queryKey: ['postIssue'],
    queryFn: async () => {
      const response = await api.get(`/repos/poulhenry/react-github-blog/issues/${idPost}`)

      const { html_url, title, user, number, body, comments, updated_at } = response.data

      const post = {
        id: number,
        title,
        user: user.login,
        url: html_url,
        body,
        comments,
        updatedAt: updated_at
      }

      return post
    }
  })

  return (
    <>
      {data && (
        <HeaderPost urlGithub={data.url} title={data.title} user={data.user} comments={data.comments} updatedAt={data.updatedAt}  />
      )}

      <div className="w-full mt-10">
        <article className="max-w-none text-base-text prose prose-slate lg:prose-xl prose-a:text-brand">
          <Markdown>
            {data?.body}
          </Markdown>
        </article>
      </div>
    </>
  )
}