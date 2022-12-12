import Image from "next/image";
import Link from "next/link";

const BlogPost = ({post}) => {
    const {postTitle, slug, postThumbNail, metaDescription} = post.fields
    return (
        <div className={"max-w-3xl p-6 group"}>
            <article
                    className={"flex-col justify-center p-6 bg-gray-800 text-white rounded-lg dark:text-gray-800 dark:bg-white group-hover:scale-105 duration-300 group-hover:shadow-lg group-hover:shadow-gray-600 "}>
                <div className={"w-full flex justify-center items-center"}>
                    <Image
                        src={`http:${postThumbNail.fields.file.url}`}
                        width={200}
                        height={200}
                        className={"self-center ring-2 rounded-full ring-[#ffa500]"}
                        alt={postTitle}
                    />
                </div>
                <div className={""}>
                    <h4 className={"text-lg pt-3 pb-2"}>{postTitle}</h4>
                    <h5 className={"text-md pt-2 pb-4"}>{metaDescription}</h5>
                </div>
                <div className={"w-full flex justify-end duration-500"}>
                    <Link href={`/blog/${slug}`} className={"bg-[#ffa500] px-3 py-2 rounded-lg self-end group-hover:bg-white group-hover:text-gray-800 dark:text-white dark:group-hover:bg-gray-800 dark:group-hover:text-white"}>Zobacz więcej</Link>
                </div>
            </article>
        </div>

    )
}

export default BlogPost