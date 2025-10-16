import TopNav from "./components/topnav/page";
import Hero from "./components/hero/page";
import Cards from "./components/cards/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 text-white">
      <TopNav />
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <Hero />
        <Cards />
      </section>
      <Footer />
    </main>
  );
}
