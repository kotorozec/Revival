import {createClient} from "contentful";
import Head from "next/head";
import Image from "next/image";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton
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
            redirect: {
                destination: "/blog/404",
                permanent: false
            }
        }
    }
    return {
        props: {post: items[0]},
        revalidate: 1
    }
}

export default function Post({post}) {
    if (!post) return <Loading/>
    const {metaDescription, postTitle, postImage, postContent, slug, metaTitle, dateofpublication} = post.fields

    const handleTimeToReadPost = () => {
        const timeValue = ((postContent.content
            .map(el => el.content)
            .map(x => x.map(el => el.value))
            .flat()
            .toString()
            .split(" ")
            .filter(word => word !== '').length) / 220).toFixed() * 1

        if (timeValue === 1) {
            return `Ten tekst przeczytasz w ${timeValue} minutę.`
        } else if (timeValue >= 2 < 5) {
            return `Ten tekst przeczytasz w ${timeValue} minuty.`
        } else {
            return `Ten tekst przeczytasz w ${timeValue} minut.`
        }
    }


    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription}/>
            </Head>
            <main className="w-full p-6 flex justify-center ">
                <article className={"bg-white flex-col max-w-4xl rounded-2xl px-10 shadow-2xl py-4"}>
                    <div className={"w-100 md:flex md:justify-end md:items-center"}>
                        <div className={"md:w-1/2 pb-4"}>
                            <h1 className={"text-left text-3xl font-semibold text-[#ffa500]"}>{postTitle}</h1>
                            <p className={"text-gray-600 pt-2"}> Data publikacji: {dateofpublication}</p>
                            <p className={"font-semibold text-gray-700"}>
                                {handleTimeToReadPost()}
                            </p>
                        </div>
                        <Image
                            src={`http:${postImage.fields.file.url}`}
                            width={200}
                            height={200}
                            className={"hidden md:block w-1/2 aspect-video rounded-t-xl object-cover"}
                            alt={postTitle}
                        />
                    </div>
                    <div className={"text-gray-700"}>
                        {documentToReactComponents(postContent)}
                    </div>
                    <div className={"block md:flex justify-end items-center gap-3 py-4"}>
                        <h5 className={"font-semibold dark:text-gray-800"}>Podoba Ci się nasz artykuł? Podziel się nim
                            ze znajomymi:</h5>
                        <div className={"mt-2"}>
                            <FacebookShareButton
                                url={`https://revival-mu.vercel.app/blog/${slug}`}>
                                <FacebookIcon size={32} round className={"mr-2"}/>
                            </FacebookShareButton>
                            <RedditShareButton
                                url={`https://revival-mu.vercel.app/blog/${slug}`}>
                                <RedditIcon size={32} round className={"mr-2"}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={`https://revival-mu.vercel.app/blog/${slug}`}>
                                <LinkedinIcon size={32} round className={"mr-2"}/>
                            </LinkedinShareButton
                            >
                        </div>

                    </div>
                </article>
            </main>


        </>
    )
}
