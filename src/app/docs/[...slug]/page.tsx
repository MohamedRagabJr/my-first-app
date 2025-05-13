export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        View Docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>View Docs for concept {slug[0]}</h1>;
  } else {
    return (
      <h1>
        View Docs for feature {slug[0]} and concept {slug[1]} and {slug[2]}
      </h1>
    );
  }
}
