import type { CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

export const getPostSlug = (post: BlogPost): string => {
  return post.data.slug ?? post.id;
};

export const getPostPath = (post: BlogPost): string => {
  const year = post.data.pubDate.getUTCFullYear();
  const month = String(post.data.pubDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(post.data.pubDate.getUTCDate()).padStart(2, "0");

  return `/posts/${year}/${month}/${day}/${getPostSlug(post)}`;
};

export const getPostStamp = (post: BlogPost): string => {
  const year = post.data.pubDate.getUTCFullYear();
  const month = String(post.data.pubDate.getUTCMonth() + 1).padStart(2, "0");

  return `${year}-${month}`;
};

export const formatPostDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "UTC",
  }).format(date);
};

export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort(
    (firstPost, secondPost) =>
      secondPost.data.pubDate.getTime() - firstPost.data.pubDate.getTime(),
  );
};
