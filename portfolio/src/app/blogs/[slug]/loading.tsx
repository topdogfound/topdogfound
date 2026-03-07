export default function BlogDetailsLoading() {
  return (
    <section className="space-y-8 animate-pulse">
      <div className="h-5 w-48 bg-muted rounded-md" />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8">
        <div className="space-y-6">
          <div className="h-6 w-72 bg-muted rounded-md" />
          <div className="h-14 w-11/12 bg-muted rounded-md" />
          <div className="h-6 w-10/12 bg-muted rounded-md" />
          <div className="h-[320px] w-full bg-muted rounded-xl" />
          <div className="space-y-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="h-5 w-full bg-muted rounded-md" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-24 w-full bg-muted rounded-xl" />
          <div className="h-40 w-full bg-muted rounded-xl" />
          <div className="h-32 w-full bg-muted rounded-xl" />
        </div>
      </div>
    </section>
  );
}
