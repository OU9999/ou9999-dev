import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { MineralWashBackground } from "@/components/background/mineral-wash-background";
import { Footer } from "@/components/nav/site-footer";
import { Header } from "@/components/nav/site-header";
import type { AppLocale } from "@/i18n/config";
import { cormorantGaramond, maruBuri } from "@/app/fonts";
import { cn } from "@/utils/tailwind-util";

interface SiteShellProps {
  children: ReactNode;
  locale: AppLocale;
}

const SiteShell = async ({ children, locale }: SiteShellProps) => {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={cn(
          maruBuri.variable,
          cormorantGaramond.variable,
          "min-h-dvh overflow-x-hidden bg-google-ink font-sans text-google-paper antialiased"
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MineralWashBackground />
          <Header locale={locale} />
          <div className="relative z-10">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export { SiteShell };
