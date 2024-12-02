import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: "Amir Shahan's Blog",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Amir's Blogs</h1>
      <BlogPosts />
    </section>
  )
}
