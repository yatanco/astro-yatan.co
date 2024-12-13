import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
}

export const siteConfig: SiteConfig = {
  site: "https://www,yatan.co", // your site url
  title: "Yatan Blumenthals Blog",
  slogan: "Culture Design, Alzheimers, Mindful Leadership",
  description: "write a description here",
  social: {
    github: "https://github.com/yatanco", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/yatanblumenthal", // leave empty if you don't want to show the linkedin
    email: "", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  }
};
