// Section 9 — short footer. Address, hours, FAQ link, copyright.
// No social, no newsletter, no accordion.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <p className="text-caption uppercase text-ink-muted font-halbfett">Visit</p>
          <p className="mt-3 font-serif text-body text-ink">
            12 Main Street, Suite 2<br />
            Boonton, NJ 07005
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="text-caption uppercase text-ink-muted font-halbfett">Hours</p>
          <p className="mt-3 font-serif text-body text-ink">
            Tuesday &ndash; Saturday<br />
            9am &ndash; 5pm Eastern
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="text-caption uppercase text-ink-muted font-halbfett">More</p>
          <p className="mt-3 font-serif text-body text-ink">
            <a href="/faq">Frequently asked questions</a>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-24 max-w-content text-tiny text-ink-muted">
        &copy; {year} Techmonium. Made by hand in Boonton, New Jersey.
      </p>
    </footer>
  );
}
