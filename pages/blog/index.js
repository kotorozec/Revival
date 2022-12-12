import Head from 'next/head'
import {createClient} from "contentful";
import BlogPost from "../../components/BlogPost";
import {useState} from "react";

export async  function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
const res = await client.getEntries({content_type:"revivalBlog"});
    return {
        props:{
            blog:res.items,
            revalidate:5
        }
    }
}

const Blog = ({blog}) => {
    const [ postNum, setPostNum] = useState(3);
    const handleLoadMore = () => {
        setPostNum(prevPostNum => prevPostNum + 3)
    }
    return (
        <>
        <Head>
            <title>Revival - blog</title>
            <meta name="description" content="Na naszym blogu zamieszczamy ciekawe artykuły dotyczące branży, w której działamy. Opisujemy m.in. procesy związane z dezynsekcją i sprzątaniem miejsca zgonu." />
        </Head>
            <h1 className={"dark:text-white"}>Blog</h1>
        <div className={"md:grid md:grid-cols-2 md:gap-2 lg: grid lg:grid-cols-3 lg:gap-2 max-w-8xl"}>
            {blog.slice(0, postNum).map(post => (
                <BlogPost key={post.sys.id} post={post}>
                </BlogPost>
            ))}
        </div>
            <div className={"max-w-8xl flex justify-center py-4"}>
                <button onClick={handleLoadMore} className={"bg-[#ffa500] px-4 py-2 rounded-lg text-white shadow-xl hover:scale-90 duration-300"}>Load More</button>
            </div>

        </>
    )
}

export default Blog