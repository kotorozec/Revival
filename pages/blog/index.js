import Head from 'next/head'
import {createClient} from "contentful";
import BlogPost from "../../components/BlogPost";

export async  function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
const res = await client.getEntries({content_type:"revivalBlog"});
    return {
        props:{
            blog:res.items
        }
    }
}

const Blog = ({blog}) => {
    return (
        <>
        <Head>
            <title>Revival - blog</title>
            <meta name="description" content="Na naszym blogu zamieszczamy ciekawe artykuły dotyczące branży, w której działamy. Opisujemy m.in. procesy związane z dezynsekcją i sprzątaniem miejsca zgonu." />
        </Head>
            <h1>Blog</h1>
        <div className={"md:grid md:grid-cols-2 md:gap-2 lg: grid lg:grid-cols-3 lg:gap-2"}>
            {blog.map(post => (
                <BlogPost key={post.sys.id} post={post}/>

            ))}

        </div>
        </>
    )
}

export default Blog