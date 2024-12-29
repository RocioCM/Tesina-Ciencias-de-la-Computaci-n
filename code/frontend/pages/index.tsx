import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-4 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-blue-500 hover:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="bg-gray-100 border border-gray-300 rounded p-3 text-lg mb-8">
          Get started by editing{' '}
          <code className="bg-gray-200 p-2 rounded text-sm font-mono">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap justify-center max-w-4xl gap-4">
          <a
            href="https://nextjs.org/docs"
            className="p-6 border border-gray-300 rounded-lg text-left transition-colors hover:text-blue-500 hover:border-blue-500 max-w-xs"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Documentation &rarr;
            </h2>
            <p className="text-lg">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 border border-gray-300 rounded-lg text-left transition-colors hover:text-blue-500 hover:border-blue-500 max-w-xs"
          >
            <h2 className="text-2xl font-semibold mb-2">Learn &rarr;</h2>
            <p className="text-lg">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="p-6 border border-gray-300 rounded-lg text-left transition-colors hover:text-blue-500 hover:border-blue-500 max-w-xs"
          >
            <h2 className="text-2xl font-semibold mb-2">Examples &rarr;</h2>
            <p className="text-lg">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 border border-gray-300 rounded-lg text-left transition-colors hover:text-blue-500 hover:border-blue-500 max-w-xs"
          >
            <h2 className="text-2xl font-semibold mb-2">Deploy &rarr;</h2>
            <p className="text-lg">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex flex-1 items-center justify-center border-t border-gray-300 py-4">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}