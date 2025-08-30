const partners = [
  'GrowthBarrel Ltd',
  'Solmos Realty',
  'Metalike Construction',
  'Krystal Filmworks',
  'Bitmoore Group',
];

export function PartnersSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by Forward-Thinking Businesses
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-lg font-medium text-muted-foreground"
            >
              {partner}
            </span>
          ))}
          <span className="text-lg font-medium text-muted-foreground">
            ...and more.
          </span>
        </div>
      </div>
    </section>
  );
}
