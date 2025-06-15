// import fs from 'fs';
// import path from 'path';
// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getPostList() {
//   return fs.readdirSync(postsDirectory)
//     .filter(file => file.endsWith('.md'))
//     .sort((a, b) => b.localeCompare(a))
//     .map(file => {
//       const filePath = path.join(postsDirectory, file);
//       const fileContents = fs.readFileSync(filePath, "utf8");
//       const { data } = matter(fileContents);
      
//       return {
//         slug: file.replace(/\.md$/, ""),
//         title: data.title,
//         date: data.date,
//         category: data.category || "미분류",
//       };
//     })
// }

import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostList() {
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md') || file.endsWith('.html')) // md와 html 파일 포함
    .sort((a, b) => b.localeCompare(a))
    .map(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");

      let title = "";
      let date = "";
      let category = "미분류";
      if (file.endsWith('.md')) {
        const { data } = matter(fileContents);
        title = data.title || "";
        date = data.date || "";
        category = data.category || "미분류";
      } else if (file.endsWith('.html')) {
        const htmlContent = fs.readFileSync(filePath, "utf8");
        const commentMatch = htmlContent.match(/<!--(.*?)-->/);
        if (commentMatch) {
          const commentContent = commentMatch[0].trim();
          const [extractedTitle, extractedDate, extractedCategory] = commentContent.split('//');

          title = extractedTitle.split('--')[1] || filePath;
          date = extractedDate || "미상";
          category = extractedCategory.split('--')[0] || "미분류";
        }
      }

      return {
        slug: file.replace(/\.(md|html)$/, ""),
        title,
        date,
        category,
        isMarkdown: file.endsWith('.md'), // MD 여부 체크
      };
    });
}