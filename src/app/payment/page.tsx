import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { PaymentForm } from '@/components/landing/payment-form';

export default function PaymentPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <PaymentForm />
      </main>
      <Footer />
    </div>
  );
}
