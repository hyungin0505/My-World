// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getPostData(slug: string) {
//   const fullPath = path.join(postsDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   const { data, content } = matter(fileContents);

//   return {
//     title: data.title,
//     date: data.date,
//     category: data.category,
//     content,
//   };
// }

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(slug: string) {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const htmlPath = path.join(postsDirectory, `${slug}.html`);

  let content = "표시할 내용이 없습니다.";
  let title = slug;
  let date = "미상";
  let category = "미분류";
  let isMarkdown = false;

  if (fs.existsSync(mdPath)) {
    // Markdown 파일을 읽고 처리
    const fileContents = fs.readFileSync(mdPath, "utf8");
    const { data, content: mdContent } = matter(fileContents);
    
    content = mdContent;
    title = data.title || slug;
    date = data.date || "미상";
    category = data.category || "미분류";
    isMarkdown = true;
  } else if (fs.existsSync(htmlPath)) {
    isMarkdown = false;
    const htmlContent = fs.readFileSync(htmlPath, "utf8");

    const commentMatch = htmlContent.match(/<!--(.*?)-->/);
    if (commentMatch) {
      const commentContent = commentMatch[0].trim();
      const [extractedTitle, extractedDate, extractedCategory] = commentContent.split('//');

      title = extractedTitle.split('--')[1] || slug;
      date = extractedDate || "미상";
      category = extractedCategory.split('--')[0] || "미분류";
    }
  }

  return { title, date, category, content, isMarkdown };
}