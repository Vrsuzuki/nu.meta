// /lib/getMarkdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdown(slug: string) {
  const filePath = path.join(process.cwd(), "app/blog", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    author: data.author,
    date: data.date,
    image: data.image, 
    content,
  };
}
