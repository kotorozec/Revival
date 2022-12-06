import {createClient} from "contentful";
import Head from "next/head";
import Image from "next/image";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';
import Loading from "../../components/Loading";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "revivalBlog"
    })
    const paths = res.items.map(item => {
        return {
            params: {
                post: item.fields.slug
            }
        }
    })

    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: "revivalBlog",
        'fields.slug': params.post
    })

    if (!items.length) {
        return {
            redirect:{
                destination:"/blog/404",
                permanent:false
            }
        }
    }
    return {
        props: {post: items[0]},
        revalidate: 5
    }
}

export default function Post({post}) {
    if (!post) return <Loading/>
    const {metaDescription, postTitle, postThumbNail, postContent, slug} = post.fields
    return (
        <>
            <Head>
                <title>{postTitle}</title>
                <meta name="description" content={metaDescription}/>
            </Head>
            <main className="w-full p-6 flex justify-center ">
                <article className={"bg-gray-800 flex-col max-w-5xl"}>
                    <Image
                        src={`http:${postThumbNail.fields.file.url}`}
                        width={100}
                        height={100}
                        className={"self-center ring-2 rounded-full ring-[#ffa500] "}
                        alt={postTitle}
                    />
                    <div>
                        {documentToReactComponents(postContent)}
                    </div>
                </article>
            </main>
            <footer>
                <FacebookShareButton
                    url={`/blog/${slug}`}>
                    <FacebookIcon size={32} round/>
                </FacebookShareButton>
                <PinterestShareButton
                    url={`/blog/${slug}`}>
                    <PinterestIcon size={32} round/>
                </PinterestShareButton>
                <RedditShareButton
                    url={`/blog/${slug}`}>
                    <RedditIcon size={32} round/>
                </RedditShareButton>
                <WhatsappShareButton
                    url={`/blog/${slug}`}>
                    <WhatsappIcon size={32} round/>
                </WhatsappShareButton>
                <LinkedinShareButton
                    url={`/blog/${slug}`}>
                    <LinkedinIcon size={32} round/>
                </LinkedinShareButton
                >
            </footer>
        </>
    )
}
