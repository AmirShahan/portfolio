import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (


    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Amir's Blogs
      </h1>
      <p className="mb-4">
        {`I am an ambivert andI have started to learn coding `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>



  )
}
