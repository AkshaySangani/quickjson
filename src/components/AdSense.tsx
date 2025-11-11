import Script from "next/script";

const AdSense = ({ pubId }: { pubId: string }) => {
    return (
        <div>
            <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pubId}`}
                crossOrigin="anonymous" strategy="afterInteractive" />
        </div>
    )
}

export default AdSense;