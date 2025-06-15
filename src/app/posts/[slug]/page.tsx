
// "use server"

// import { getPostContent } from "@/lib/getPostContent";
// import { getPostData } from "@/lib/getPostData";
// import ReactMarkdown from "react-markdown";
// import rehypePrism from "rehype-prism";
// import "prismjs";
// import "prismjs/components/prism-c.min.js";
// import "prismjs/components/prism-python.min.js";
// import "prismjs/components/prism-java.min.js";
// import "prismjs/themes/prism-tomorrow.css";
// import "./../../../styles/postPage.css"


// type Params = Promise<{slug: string}>

// export default async function PostPage(props: {params: Params}) {

//   const params = await props.params
//   const slug = params.slug

//   const content = await getPostContent(slug);
//   const post = await getPostData(slug);
  
//   return (
//     <div>
//       <div className="content-header">
//         <p className="content-category">{post.category}</p>
//         <h1 className="content-title">{post.title}</h1>
//         <p className="content-date">{post.date}</p>
//       </div>
//       <div className="md-content">
//       <ReactMarkdown rehypePlugins={[rehypePrism]}>
//           {content}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// }

// "use server"

import { getPostContent } from "@/lib/getPostContent";
import { getPostData } from "@/lib/getPostData";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism";
// import parse from "html-react-parser";
import "prismjs";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/themes/prism-tomorrow.css";
import "./../../../styles/postPage.css"

type Params = Promise<{ slug: string }>;

import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const slugs = filenames
    .filter((file) => file.endsWith(".md") || file.endsWith(".html"))
    .map((file) => ({ slug: file.replace(/\.(md|html)$/, "") }));

  return slugs;
}


export default async function PostPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  const content = await getPostContent(slug);
  const post = await getPostData(slug);

  if (!content) {
    return (
      <div className="mt-[200px]">
        <h1 className="text-center align-middle text-5xl">404 Not Found</h1>
        <p className="text-center text-2xl underline align-middle mt-[30px]"><a href="/posts">back</a></p>
      </div>
    )
  }

  return (
    <div>
      <div className="content-header">
        <p className="content-category">{post.category}</p>
        <h1 className="content-title">{post.title}</h1>
        <p className="content-date">{post.date}</p>
      </div>
      <div className="md-content">
        {post.isMarkdown ? (
          <ReactMarkdown rehypePlugins={[rehypePrism]}>{content}</ReactMarkdown>
        ) : (
          <div>
          <div dangerouslySetInnerHTML= {{ __html: content || "" }} />
          </div>
        )
      }
      </div>
    </div>
  );
}