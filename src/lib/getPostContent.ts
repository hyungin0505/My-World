import fs, { existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostContent(slug: string) {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const htmlPath = path.join(postsDirectory, `${slug}.html`);
  let content = "표시할 내용이 없습니다";
  let title = slug;
  
  if (!fs.existsSync(mdPath) && !fs.existsSync(htmlPath)) {
    return null;
  }

  if (fs.existsSync(mdPath)) {
    const fileContent = fs.readFileSync(mdPath, "utf-8");
    const { data, content:mdContent } = matter(fileContent);
    content = mdContent;
    title = data.title;
  }
  else if (fs.existsSync(htmlPath)) {
    const fileContent = fs.readFileSync(htmlPath, "utf-8");
    content = fileContent;
  }

  return content;
}