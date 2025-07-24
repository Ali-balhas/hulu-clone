import { useRouter } from "next/router";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import "tailwind-scrollbar-hide/v4";
import Results from "@/components/Reults"; // Fix typo here if any
import requests from "@/utils/requests";

export default function Home({ results }) {
  const router = useRouter();
  const genre = router.query.genre;

  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />
      <Nav />
      {/* Pass key based on genre to force remount on genre change */}
      <Results key={genre || "trending"} results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results || [],
    },
  };
}
