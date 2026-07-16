import { unstable_cache } from "next/cache";
import type { Project, ProjectCategory } from "@/types";
import {
  GITHUB_SOURCES,
  listPublicRepos,
  fetchProjectJson,
} from "@/lib/github/client";
import { projects as staticFallback } from "@/lib/portfolio-data";

const VALID_CATEGORIES = new Set<ProjectCategory>([
  "Personal Project",
  "Freelance Project",
  "Mini Project",
  "Web Application",
  "Mobile Application",
  "Ai/ML Project",
]);

function validateProject(data: unknown): Project | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;

  const slug =
    typeof d.slug === "string" && d.slug.trim() ? d.slug.trim() : null;
  const title =
    typeof d.title === "string" && d.title.trim() ? d.title.trim() : null;
  const shortDescription =
    typeof d.shortDescription === "string" && d.shortDescription.trim()
      ? d.shortDescription.trim()
      : null;
  const githubUrl =
    typeof d.githubUrl === "string" && d.githubUrl.startsWith("http")
      ? d.githubUrl.trim()
      : null;
  const longDescription =
    typeof d.longDescription === "string" ? d.longDescription.trim() : "";

  if (!slug || !title || !shortDescription || !githubUrl) return null;

  if (!Array.isArray(d.category) || d.category.length === 0) return null;
  const category = (d.category as unknown[]).filter(
    (c): c is ProjectCategory =>
      typeof c === "string" && VALID_CATEGORIES.has(c as ProjectCategory),
  );
  if (category.length === 0) return null;

  if (!Array.isArray(d.techStack) || d.techStack.length === 0) return null;
  const techStack = (d.techStack as unknown[]).filter(
    (t): t is string => typeof t === "string" && t.trim().length > 0,
  );
  if (techStack.length === 0) return null;

  if (!Array.isArray(d.images) || d.images.length === 0) return null;
  const images = (d.images as unknown[]).filter(
    (img): img is string => typeof img === "string" && img.startsWith("http"),
  );
  if (images.length === 0) return null;

  const liveUrl =
    typeof d.liveUrl === "string" && d.liveUrl.startsWith("http")
      ? d.liveUrl.trim()
      : undefined;

  return {
    slug,
    title,
    category,
    shortDescription,
    techStack,
    githubUrl,
    liveUrl,
    images,
    longDescription,
  };
}

async function fetchAllProjects(): Promise<Project[]> {
  try {
    const allRepos = (
      await Promise.all(
        GITHUB_SOURCES.map(({ owner, type }) => listPublicRepos(owner, type)),
      )
    ).flat();

    const results = await Promise.allSettled(
      allRepos.map(async (repo) => {
        const raw = await fetchProjectJson(repo.owner.login, repo.name);
        return validateProject(raw);
      }),
    );

    const valid = results
      .filter(
        (r): r is PromiseFulfilledResult<Project> =>
          r.status === "fulfilled" && r.value !== null,
      )
      .map((r) => r.value);

    // Dedupe by slug — first occurrence wins
    const seen = new Set<string>();
    const deduped = valid.filter((p) => {
      if (seen.has(p.slug)) return false;
      seen.add(p.slug);
      return true;
    });

    if (deduped.length === 0) {
      console.warn(
        "[getProjects] No valid project.json found, using static fallback",
      );
      return staticFallback;
    }

    return deduped.sort((a, b) => a.title.localeCompare(b.title));
  } catch (err) {
    console.error("[getProjects] Unexpected error, using static fallback", err);
    return staticFallback;
  }
}

/**
 * unstable_cache
 * @param asyncFunction The function to cache
 * @param cacheKey The key to use for caching
 * @param options Options for caching, including revalidation time
 * @returns The cached result of the async function
 */

// Cache the aggregated result for 60 seconds — served fresh on next revalidation
export const getProjects = unstable_cache(
  fetchAllProjects,
  ["github-projects"],
  {
    revalidate: 60,
    /**
     * 60 seconds = 1 minute
     * 3600 seconds = 1 hour
     * 86400 seconds = 1 day
     */
  },
);
