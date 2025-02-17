import Head from 'next/head';
import Script from 'next/script';

const SEO = () => {
  return (
    <Head>
      {/* campaign dataLayer */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: 'oceans',
            gBasket: 'sanctuaries',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        請即捐款讓全球 30% 海洋納入保護區 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="請即捐款讓全球 30% 海洋納入保護區 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！"
      />
      <meta
        property="og:description"
        content="海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/8122f00d-gp01wpp.jpg"
      />
    </Head>
  );
};

export default SEO;
