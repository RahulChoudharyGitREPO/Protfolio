import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/RahulChoudharyGitREPO", {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ repos: null }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ repos: data.public_repos as number });
  } catch {
    return NextResponse.json({ repos: null }, { status: 500 });
  }
}
