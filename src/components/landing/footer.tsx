import { Facebook, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary/10 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="space-y-4">
          <h3 className="font-headline text-2xl font-bold text-primary">PAGR</h3>
          <p className="max-w-xs text-sm text-muted-foreground">
            Point Assiduous Global Resource (PAGR) is Africa’s first Workforce
            Infrastructure Company, dedicated to unifying, beautifying, and
            digitalizing the continent's workforce.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/platforms"
                className="text-muted-foreground hover:text-primary"
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                href="/contact#workers"
                className="text-muted-foreground hover:text-primary"
              >
                For Workers
              </Link>
            </li>
            <li>
              <Link
                href="/contact#employers"
                className="text-muted-foreground hover:text-primary"
              >
                For Employers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Lagos, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a
                href="mailto:contact@pagr.africa"
                className="text-muted-foreground hover:text-primary"
              >
                contact@pagr.africa
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} PAGR – Workforce Infrastructure Framework. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
