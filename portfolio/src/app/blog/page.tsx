import { redirect } from "next/navigation";

export default async function BlogPageRedirect({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page } = await searchParams;
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page) params.set("page", page);
  const query = params.toString();
  redirect(query ? `/blogs?${query}` : "/blogs");
}
