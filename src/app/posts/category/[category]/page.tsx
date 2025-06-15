import { getPostList } from "@/lib/getPostList";
import Link from "next/link"

type Params = Promise<{category: string}>


import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  // 파일에서 카테고리 추출
  const categories = new Set<string>();

  filenames.forEach((file) => {
    if (file.endsWith(".md") || file.endsWith(".html")) {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");

      // 마크다운 파일이면 frontmatter에서 category 추출
      if (file.endsWith(".md")) {
        const { data } = matter(fileContents);
        if (data.category) {
          categories.add(data.category);
        }
      }

      // HTML 파일이면 주석에서 category 추출 (이전 코드 참고)
      if (file.endsWith(".html")) {
        const match = fileContents.match(/<!--.*\/\/\d{4}\.\d{2}\.\d{2}\/\/(.*?)-->/);
        if (match && match[1]) {
          categories.add(match[1].trim());
        }
      }
    }
  });

  return Array.from(categories).map((category) => ({ category }));
}


export default async function CategoryPage(props: {params: Params}) {

  const parmas = await props.params
  const category = parmas.category

  const posts = getPostList();
  const filteredPosts = posts.filter(post => post.category === category);

  return (
    <div>
      <h1>카테고리: {category}</h1>
      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <p>이 카테고리에 해당하는 글이 없습니다.</p>
        )}
      </ul>
      <Link href="/posts">← 글 목록으로 돌아가기</Link>
    </div>
  );
}