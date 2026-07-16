# Viral Gajera's Portfolio Website SPEC File

## Requirements

```
- I think manually featching data from my project README.md file is lots of work.
- Can we create system in which it will automatically look for my profile and organizations and look for public repositories and fetch the README.md file from each repository and store it in a single file.
- The README.md file will be in specific format / standard, that we can define and it will be easy to parse and extract the data from it.
- From which it will create data like `portfolio-data.ts/projects` section.
- so that we dont need to manually update the data in `portfolio-data.ts/projects` section.
```

## project.json Schema

Add a `project.json` file at the **root of any public repo** to have it automatically appear on the portfolio. The file must be valid JSON (no comments, no trailing commas).

```json
{
    "slug": "my-project",
    "title": "My Project",
    "shortDescription": "One sentence describing the project.",
    "longDescription": "Full description. Use \\n for line breaks.",
    "category": ["Personal Project", "Web Application"],
    "techStack": ["React.js", "Node.js", "TailwindCSS"],
    "githubUrl": "https://github.com/Viral-Gajera/my-project",
    "liveUrl": "https://my-project.vercel.app",
    "images": [
        "https://raw.githubusercontent.com/Viral-Gajera/my-project/main/images/1.png"
    ]
}
```

### Field Reference

| Field              | Type       | Required | Notes                                                      |
| ------------------ | ---------- | -------- | ---------------------------------------------------------- |
| `slug`             | `string`   | ✅       | URL-safe, unique across all repos (e.g. `my-project`)      |
| `title`            | `string`   | ✅       | Display name shown on the portfolio                        |
| `shortDescription` | `string`   | ✅       | One-line summary shown on the project card                 |
| `longDescription`  | `string`   | ✅       | Shown on the project details page. Use `\n` for paragraphs |
| `category`         | `string[]` | ✅       | One or more from the valid values below                    |
| `techStack`        | `string[]` | ✅       | List of technologies used                                  |
| `githubUrl`        | `string`   | ✅       | Full URL to the GitHub repository                          |
| `liveUrl`          | `string`   | ❌       | Optional live demo URL                                     |
| `images`           | `string[]` | ✅       | At least one image URL (must start with `https://`)        |

### Valid `category` Values

- `Personal Project`
- `Freelance Project`
- `Mini Project`
- `Web Application`
- `Mobile Application`
- `Ai/ML Project`

### How It Works

1. On every page load, the portfolio scans all public repos in `Viral-Gajera` and `ig-automation-2026`.
2. Repos that contain a valid `project.json` at their root are included automatically.
3. Results are cached for 60 seconds (stale-while-revalidate).
4. Forks and archived repos are skipped.
5. If GitHub API is unavailable, the hardcoded static projects in `src/lib/portfolio-data.ts` are shown as fallback.

### Setup

1. Copy `.env.example` to `.env.local`.
2. Add your GitHub token in `.env.local`.

```bash
cp .env.example .env.local
```

```bash
# .env.local
GITHUB_TOKEN=github_pat_xxxxxxxxxxxx
```

Using a token increases GitHub API limits (5000 req/hr vs 60 req/hr unauthenticated).

### How To Create GitHub Token

1. Open GitHub Settings.
2. Go to Developer settings.
3. Open Personal access tokens.
4. Click Tokens (classic) and Generate new token (classic).
5. Set an expiry date.
6. For public repositories, no scopes are required. If needed, select `public_repo` read access.
7. Click Generate token and copy the token immediately.
8. Paste it into `.env.local` as `GITHUB_TOKEN=...`.
