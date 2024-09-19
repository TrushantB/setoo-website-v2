import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const postsDirectory = path.join(process.cwd(), "events");

export function getPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading post directory:", error);
    return [];
  }
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content: markdownContent } = matter(fileContents);

    // console.log(`Processing markdown for slug: ${slug}`);
    // console.log(
    //   "Markdown content preview:",
    //   markdownContent.slice(0, 100) + "..."
    // );

    const { tocHtml, contentHtml } = await markdownToHtml(markdownContent);
    // console.log(`TOC HTML length: ${tocHtml.length}`);
    // console.log(`Content HTML length: ${contentHtml.length}`);
    return {
      slug,
      ...data,
      tocHtml,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error processing post data for slug: ${slug}`, error);
    return {
      slug,
      tocHtml: "",
      contentHtml: "<p>Error loading post content.</p>",
    };
  }
}
