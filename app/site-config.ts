const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  configuredSiteUrl ??
    (vercelProductionHost ? `https://${vercelProductionHost}` : "https://packlinsa.com.ar"),
);

export const isPreviewDeployment = process.env.VERCEL_ENV === "preview";