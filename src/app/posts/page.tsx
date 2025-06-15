import Link from "next/link";
import { getPostList } from '@/lib/getPostList';
import "./../../styles/listPage.css"

export default function Home() {
  const posts = getPostList();
  // 카테고리별로 그룹화
  // const categories = [...new Set(posts.map(post => post.category))];

  return (
    <div className="postList">
      {/* <h2>카테고리</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link href={`/posts/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul> */}
  
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <div className="listElement" id="link">
            <Link href={`/posts/${post.slug}`}>
            <p id="list-category">{post.category}</p>
            <p id = "list-title">{post.title}</p>
            <p id="list-date">{post.date}</p>
            </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}