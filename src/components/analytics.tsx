export function AnalyticsScripts() {
  return (
    <>
      {/* TODO: Replace with your real analytics domain */}
      <script
        defer
        data-domain="seniordogsafetyrunner.com"
        src="https://plausible.io/js/script.js"
      />
      {/* TODO: Replace with your GA measurement ID */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }}
      />
    </>
  );
}
