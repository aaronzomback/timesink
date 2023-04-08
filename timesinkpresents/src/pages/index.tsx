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
        <div className="container flex flex-col items-center justify-center gap-32 px-4 py-16">
          <div className="flex items-center justify-center">
            <h1
              className={`${LOGO.variable} text-center font-logo text-5xl text-mystery-white sm:text-[5rem]`}
            >
              TimeSink Presents
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col items-center justify-center gap-4 rounded border-2 border-mystery-white bg-mystery-white p-4 text-dark-theater-primary"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className={`${OGSANS.variable} font-OGSans text-md`}>
                Cinema →
              </h3>
              {/* <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Discover new films made by some of the freshest talent today.
              </div> */}
            </Link>
            <Link
              className="flex max-w-xs flex-col items-center justify-center gap-4 rounded border-2 border-mystery-white bg-mystery-white p-4 text-dark-theater-primary drop-shadow-2xl"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className={`${OGSANS.variable} font-OGSans text-md`}>
                Press →
              </h3>
              {/* <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Read articles written by our featured and guest writers
              </div> */}
            </Link>
            <Link
              className="flex max-w-xs flex-col items-center justify-center gap-4 rounded border-2 border-mystery-white bg-mystery-white p-4 text-dark-theater-primary"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className={`${OGSANS.variable} font-OGSans text-md`}>
                Submit film →
              </h3>
              {/* <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Attract audiences by giving your film a chance to be featured in
                the next release!
              </div> */}
            </Link>
            <Link
              className="flex max-w-xs flex-col items-center justify-center gap-4 rounded border-2 border-mystery-white bg-mystery-white p-4 text-dark-theater-primary"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className={`${OGSANS.variable} font-OGSans text-md`}>
                Info →
              </h3>
              {/* <div className={`${OGSANS.variable} font-OGSans text-md`}>
                Great question. Let us start by telling you what it is not...
              </div> */}
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
        <div
          className={`${OGSANS.variable} flex flex-col items-center justify-center font-OGSans text-sm text-neon-blue-heavy`}
        >
          <span>Already a member?</span>
          <span className="underline">Sign in</span>
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
    <div className="flex flex-col items-center justify-end">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full border-2 border-neon-blue-heavy px-10 py-3 font-semibold text-neon-blue-heavy no-underline transition hover:bg-neon-blue-heavy hover:text-dark-theater-primary"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Join the waiting list"}
      </button>
    </div>
  );
};
