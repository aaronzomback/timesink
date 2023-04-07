import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { LOGO, OGSANS } from "~/utils/_fonts";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>TimeSink Presents</title>
        <meta name="description" content="Discover cinema" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start bg-dark-theater-primary">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1
            className={`${LOGO.variable} font-logo text-5xl text-mystery-white sm:text-[5rem]`}
          >
            TimeSink Presents
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-display-heavy p-4 text-mystery-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3
                className={`${OGSANS.variable} font-OGSans text-2xl font-bold`}
              >
                Cinema →
              </h3>
              <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Discover new films made by some of the freshest talent today.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-display-heavy p-4 text-mystery-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3
                className={`${OGSANS.variable} font-OGSans text-2xl font-bold`}
              >
                Press →
              </h3>
              <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Read articles written by our featured and guest writers
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-display-heavy p-4 text-mystery-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3
                className={`${OGSANS.variable} font-OGSans text-2xl font-bold`}
              >
                Submit film →
              </h3>
              <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Attract audiences by giving your film a chance to be featured in
                the next release!
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-display-heavy p-4 text-mystery-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3
                className={`${OGSANS.variable} font-OGSans text-2xl font-bold`}
              >
                What is this place? →
              </h3>
              <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Great question. Let us start by telling you what it is not...
              </div>
            </Link>
          </div>
          <div
            className={`${OGSANS.variable} flex flex-col items-center gap-2 font-OGSans`}
          >
            {/* <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p> */}
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-neon-blue-primary px-10 py-3 font-semibold text-dark-theater-primary no-underline transition hover:bg-neon-blue-primary"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Request membership"}
      </button>
      <div className="flex flex-col items-center justify-center text-sm text-neon-blue-primary">
        <span>Already a member?</span>
        <span className="underline">Sign in</span>
      </div>
    </div>
  );
};