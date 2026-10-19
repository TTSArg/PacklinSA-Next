# Packlin S.A.

Sitio institucional de Packlin S.A., construido con Next.js.

## Desarrollo

```bash
npm install
npm run dev
```

Verificación local antes de publicar:

```bash
npm run lint
npm run build
```

## Vercel y dominio

El proyecto está vinculado localmente al proyecto de Vercel `packlin-sa`. Con la integración Git habilitada en Vercel y `main` configurada como Production Branch, cada push a `main` publica una nueva versión de producción; los pushes a otras ramas generan previews.

El dominio canónico es `https://packlinsa.com.ar`. La variable opcional `NEXT_PUBLIC_SITE_URL` puede sobrescribirlo en **Settings → Environment Variables** para **Production**, **Preview** y **Development**; se usa para canonical, Open Graph, sitemap y datos estructurados.

## Medición de contactos

Configurar `NEXT_PUBLIC_GTM_ID` con el ID del contenedor (formato `GTM-XXXXXXX`) en **Settings → Environment Variables** de Vercel. Los clics en WhatsApp, teléfono y email envían el evento `contact_click` a `dataLayer`, con los parámetros `contact_method`, `contact_placement` y `link_url`. Crear en GTM un activador de evento personalizado para `contact_click` y asociarlo a la conversión correspondiente. Sin el ID configurado, los enlaces siguen funcionando, pero los eventos no se envían a Google Tag Manager.

Para conectar el dominio comprado, agregar `packlinsa.com.ar` y `www.packlinsa.com.ar` en **Settings → Domains** del proyecto, configurar en el proveedor los registros DNS que indique Vercel y redirigir `www` al dominio raíz. Mantener el dominio `*.vercel.app`: sirve como URL técnica y respaldo, aunque el dominio propio sea el principal.
