import { Header } from './header';
import { Footer } from './shared';
import { copy, type Locale } from '@/content/site';
import { getResumes } from '@/lib/resumes';
import '@/app/globals.css';

export function Document({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return <html lang={locale}><body><a href="#content" className="skip-link">{copy.skip[locale]}</a><Header locale={locale} resumes={getResumes()}/>{children}<Footer locale={locale}/></body></html>;
}
