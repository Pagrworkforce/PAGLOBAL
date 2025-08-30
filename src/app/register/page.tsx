import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { RegistrationForm } from '@/components/landing/registration-form';

export default function RegisterPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
