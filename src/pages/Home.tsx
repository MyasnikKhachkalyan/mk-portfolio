export function Home() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-accent">Hello, I&apos;m</p>
        <h1 className="mt-2 text-5xl font-bold text-text-primary md:text-7xl">
          Myasnik Khachkalyan
        </h1>
        <p className="mt-4 text-xl text-text-secondary md:text-2xl">
          Senior Software Engineer
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-text-muted">
          Building scalable platforms, distributed systems, and real-time
          applications for 8+ years.
        </p>
      </div>
    </section>
  );
}
