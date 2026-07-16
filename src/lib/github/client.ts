const GITHUB_API = 'https://api.github.com';

export const GITHUB_SOURCES = [
    { owner: 'Viral-Gajera', type: 'user' as const },
    { owner: 'ig-automation-2026', type: 'org' as const },
];

function getHeaders(): HeadersInit {
    const headers: HeadersInit = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };
    if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    return headers;
}

export interface GitHubRepo {
    name: string;
    html_url: string;
    fork: boolean;
    archived: boolean;
    updated_at: string | null;
    owner: { login: string };
}

export async function listPublicRepos(
    owner: string,
    type: 'user' | 'org'
): Promise<GitHubRepo[]> {
    const repos: GitHubRepo[] = [];
    let page = 1;

    const baseUrl =
        type === 'org'
            ? `${GITHUB_API}/orgs/${owner}/repos`
            : `${GITHUB_API}/users/${owner}/repos`;

    while (true) {
        const url = `${baseUrl}?type=public&per_page=100&page=${page}`;
        let res: Response;
        try {
            res = await fetch(url, { headers: getHeaders() });
        } catch {
            console.warn(`[github] Failed to fetch repos for ${owner}`);
            break;
        }
        if (!res.ok) break;
        const batch: GitHubRepo[] = await res.json();
        if (batch.length === 0) break;
        repos.push(...batch);
        if (batch.length < 100) break;
        page++;
    }

    return repos.filter((r) => !r.fork && !r.archived);
}

export async function fetchProjectJson(
    owner: string,
    repo: string
): Promise<unknown | null> {
    const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/project.json`;
    let res: Response;
    try {
        res = await fetch(url, { headers: getHeaders() });
    } catch {
        return null;
    }
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.content || data.encoding !== 'base64') return null;

    try {
        const decoded = Buffer.from(data.content as string, 'base64').toString('utf-8');
        return JSON.parse(decoded);
    } catch {
        return null;
    }
}
