// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import {createI18nContext, I18nContext, useI18n} from "@solid-primitives/i18n";
import {i18n} from "~/i18n/i18n";

export default function Root() {
  const value = createI18nContext(i18n, 'es')

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <I18nContext.Provider value={value}>
            <Routes>
              <FileRoutes />
            </Routes>
            </I18nContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}