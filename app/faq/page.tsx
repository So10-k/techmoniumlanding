import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequently asked questions — Techmonium",
};

// Stub. Real FAQ content lives here, set as a long readable document — not
// an accordion. Wide single column, Tiempos body, Söhne headings.
export default function FAQ() {
  return (
    <>
      <main className="px-6 pt-24 md:px-12 md:pt-48">
        <div className="mx-auto w-full max-w-content">
          <p className="text-caption uppercase tracking-[0.08em] text-ink-muted font-halbfett">
            <a href="/" className="no-underline hover:text-accent">&larr; Techmonium</a>
          </p>
          <h1 className="mt-12 font-sans font-halbfett text-ink text-[44px] leading-[52px] tracking-[-0.015em] md:text-section">
            Frequently asked questions.
          </h1>

          <div className="mt-24 max-w-[60ch] space-y-16">
            <section>
              <h2 className="font-sans font-halbfett text-subhead text-ink">
                Do I need to bring anything?
              </h2>
              <p className="mt-4 font-serif text-body text-ink">
                Whatever&rsquo;s giving you trouble. The phone, the laptop, the printer if
                you can carry it. The notebook of passwords if you keep one.
              </p>
            </section>
            <section>
              <h2 className="font-sans font-halbfett text-subhead text-ink">
                What if I&rsquo;m not sure what&rsquo;s wrong?
              </h2>
              <p className="mt-4 font-serif text-body text-ink">
                That&rsquo;s a fine place to start. Bring the device and tell us what it does
                that you wish it didn&rsquo;t.
              </p>
            </section>
            <section>
              <h2 className="font-sans font-halbfett text-subhead text-ink">
                Will you fix things behind the scenes?
              </h2>
              <p className="mt-4 font-serif text-body text-ink">
                Only with your permission, and we&rsquo;ll show you what we&rsquo;re doing as
                we do it.
              </p>
            </section>
          </div>
        </div>
      </main>
      <div className="mt-48">
        <Footer />
      </div>
    </>
  );
}
