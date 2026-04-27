export type Lang = "mn" | "en";

export type Dict = {
  nav: {
    journeys: string;
    atelier: string;
    contact: string;
    concierge: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    nowCharting: string;
    scroll: string;
  };
  packages: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    description: string;
    departure: string;
    from: string;
    cta: string;
  };
  story: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    pillars: { n: string; title: string; body: string }[];
  };
  footer: {
    description: string;
    links: { journeys: string; philosophy: string; concierge: string; press: string; membership: string; journal: string };
    rights: string;
    cities: string;
    phoneLabel: string;
  };
  packageData: Record<
    string,
    { title: string; region: string; date: string; duration: string; blurb: string }
  >;
};

export const dictionaries: Record<Lang, Dict> = {
  mn: {
    nav: {
      journeys: "Аяллууд",
      atelier: "Ателье",
      contact: "Холбогдох",
      concierge: "Туслах →",
    },
    hero: {
      eyebrow: "Уудам · Аяллын Ателье",
      titleLine1: "Дэлхий ертөнц,",
      titleAccent: "таны төлөө",
      titleLine2: "угсрагдлаа.",
      subtitle:
        "Хувийн аяллын ателье. Нислэг бүр, өрөө бүр, чимээгүй мөч бүрийг гар аргаар зохиомжилно.",
      ctaPrimary: "Аяллыг эхлүүлэх",
      ctaSecondary: "Бидний философи",
      nowCharting: "Одоо төлөвлөж буй · Токио · Каппадокиа · Бангкок",
      scroll: "Доош гүйлгэ",
    },
    packages: {
      eyebrow: "Ателье · 2026 оны улирал",
      titleA: "Гар аргаар сонгосон",
      titleAccent: "аяллууд",
      description:
        "Чимээгүйхэн гайхалтай арван аялал. Хязгаарлагдмал суудал, хувийн хөтөч, өөрсдөө сонгосон буудал — ивээн тэтгэгчгүй.",
      departure: "Хөдлөх",
      from: "Эхлэх үнэ",
      cta: "Захиалах · хөтөлбөр үзэх",
    },
    story: {
      eyebrow: "Философи",
      titleA: "Бид зам бүрд",
      titleAccent: "амгаланг",
      titleB: "шингээдэг.",
      pillars: [
        {
          n: "01",
          title: "Зохиомжилно, захиалдаггүй.",
          body: "Аялал тус бүрийг нэг мэргэжилтэн бүтээдэг — анхны өдрөөс сүүлчийн өдрийг хүртэл танай хувийн зөвлөх.",
        },
        {
          n: "02",
          title: "Чимээгүй гайхамшигтай.",
          body: "Бид үзвэрээс зайлсхийдэг. Өрөөнийхөө цонхноос харагдах үзэмж. Зөвхөн зургаан хүнд зориулсан тогооч. Жижиг хаалгаар хүргэх хөтөч.",
        },
        {
          n: "03",
          title: "Үнэн зөв үнэ.",
          body: "Шимтгэлийн шат, далд нэмэлт байхгүй. Бид төлсөн үнэн дээр ателье төлбөрөө нэмж, тантай хуваалцана. Үргэлж.",
        },
      ],
    },
    footer: {
      description:
        "Хувийн аяллын ателье. Зөвхөн товлолоор, зөвхөн зөвлөмжөөр, зөвхөн урилгаар.",
      links: {
        journeys: "Аяллууд",
        philosophy: "Философи",
        concierge: "Туслах",
        press: "Хэвлэл",
        membership: "Гишүүнчлэл",
        journal: "Сэтгүүл",
      },
      rights: "© 2026 Уудам Аяллын Агентлаг. Анхааралтайгаар бүтээв.",
      cities: "Токио · Бангкок · Истанбул · Бээжин",
      phoneLabel: "Холбогдох утас",
    },
    packageData: {
      "fuji-blossoms": {
        title: "Фүжи уулын сакура",
        region: "Яманаши, Япон",
        date: "4-р сарын 02 — 4-р сарын 11, 2026",
        duration: "10 хоног",
        blurb:
          "Хувийн рёокан буудал, үүрээр сакурын дунд алхах, нууц цайны ёслол уулын дор.",
      },
      cappadocia: {
        title: "Каппадокиагийн нар мандал",
        region: "Анатоли, Турк",
        date: "5-р сарын 18 — 5-р сарын 25, 2026",
        duration: "8 хоног",
        blurb:
          "Үүрээр халуун агаарын бөмбөлөг, чулуунд сийлсэн агуй өрөө, шөнийн оройн зоог хадны дунд.",
      },
      "forbidden-city": {
        title: "Хорьдмол хотын нийслэл",
        region: "Бээжин, Хятад",
        date: "9-р сарын 12 — 9-р сарын 19, 2026",
        duration: "8 хоног",
        blurb:
          "Үүрийн гэгээгээр Хорьдмол хотод хувийн нэвтрэлт, хан бичгийн хичээл, Цагаан хэрмэн дээрх задгай зоог.",
      },
      tianmen: {
        title: "Тэнгэрийн үүдний мөргөл",
        region: "Тяньмэнь, Хятад",
        date: "10-р сарын 04 — 10-р сарын 12, 2026",
        duration: "9 хоног",
        blurb:
          "999 шатаар тэнгэрийн үүд хүртэл, нисдэг тэргээр уулыг тойрох, нууц уулын амралт.",
      },
      zhangjiajie: {
        title: "Аватарын уулс",
        region: "Хунан, Хятад",
        date: "6-р сарын 08 — 6-р сарын 16, 2026",
        duration: "9 хоног",
        blurb: "Пандорагийн загвар болсон хөвөгч уулсаар хувийн хөтөчтэй явганаар аялах.",
      },
      bangkok: {
        title: "Алтан Бангкок",
        region: "Бангкок, Тайланд",
        date: "11-р сарын 14 — 11-р сарын 21, 2026",
        duration: "8 хоног",
        blurb:
          "Алтан цагт хааны сүм, хувийн завиар голын зоог, Мишелин одтой гудамжны хоолны аялал.",
      },
      "glass-bridge": {
        title: "Шилэн тэнгэрийн гүүр",
        region: "Жанжяжай, Хятад",
        date: "7-р сарын 20 — 7-р сарын 27, 2026",
        duration: "8 хоног",
        blurb:
          "Хавцлын дээгүүр мянган футын өндөрт өлгөгдсөн тунгалаг гүүрэн дээгүүр алхах — толгой эргэх ба гайхамшгийн зэрэгцээ.",
      },
      tokyo: {
        title: "Неон Токиогийн шөнө",
        region: "Токио, Япон",
        date: "3-р сарын 06 — 3-р сарын 13, 2026",
        duration: "8 хоног",
        blurb:
          "Омакасэ амтлал, шөнийн Шибүяа, Цүкижигийн өглөөний дуудлагад хувийн оролцоо.",
      },
      chongqing: {
        title: "Кибэр Чунцин",
        region: "Чунцин, Хятад",
        date: "8-р сарын 22 — 8-р сарын 29, 2026",
        duration: "8 хоног",
        blurb:
          "Тэнгэр баганадсан буудал, тэнгэр баганадсан байшингаар нэвтрэх монорейл, дэлхийн хамгийн халуун нь хотпот.",
      },
      shanghai: {
        title: "Бундын шөнө",
        region: "Шанхай, Хятад",
        date: "12-р сарын 02 — 12-р сарын 09, 2026",
        duration: "8 хоног",
        blurb:
          "Голын эрэг дэх хувийн өрөө, арт-деко нууц баар, Хуанпу мөрнөөр нар жаргалын аялал.",
      },
    },
  },

  en: {
    nav: {
      journeys: "Journeys",
      atelier: "Atelier",
      contact: "Contact",
      concierge: "Concierge →",
    },
    hero: {
      eyebrow: "Uudam · Atelier of Journeys",
      titleLine1: "The world,",
      titleAccent: "assembled",
      titleLine2: "for you.",
      subtitle:
        "A private travel atelier. Every flight, every stay, every quiet moment — composed by hand.",
      ctaPrimary: "Begin a journey",
      ctaSecondary: "Our philosophy",
      nowCharting: "Now charting · Tokyo · Cappadocia · Bangkok",
      scroll: "Scroll",
    },
    packages: {
      eyebrow: "The Atelier · 2026 Season",
      titleA: "Hand-curated",
      titleAccent: "journeys",
      description:
        "Ten quietly extraordinary itineraries. Limited departures, private guides, and accommodations chosen, never sponsored.",
      departure: "Departure",
      from: "From",
      cta: "Reserve · view itinerary",
    },
    story: {
      eyebrow: "The Philosophy",
      titleA: "We design",
      titleAccent: "stillness",
      titleB: "into every mile.",
      pillars: [
        {
          n: "01",
          title: "Composed, not booked.",
          body: "Each itinerary is assembled by a single specialist — the same one you speak with on day one and day fourteen.",
        },
        {
          n: "02",
          title: "Quietly extraordinary.",
          body: "We avoid spectacle. The view from the room. The chef who only cooks for six. The guide who knows the back gate.",
        },
        {
          n: "03",
          title: "Honest pricing.",
          body: "No commission tiers, no hidden upgrades. What you pay is what we paid, plus our atelier fee. Always.",
        },
      ],
    },
    footer: {
      description:
        "A private travel atelier. By appointment, by referral, and by invitation only.",
      links: {
        journeys: "Journeys",
        philosophy: "Philosophy",
        concierge: "Concierge",
        press: "Press",
        membership: "Membership",
        journal: "Journal",
      },
      rights: "© 2026 Uudam Travel Agency. Crafted with care.",
      cities: "Tokyo · Bangkok · Istanbul · Beijing",
      phoneLabel: "Call us",
    },
    packageData: {
      "fuji-blossoms": {
        title: "Cherry Blossoms of Fuji",
        region: "Yamanashi, Japan",
        date: "Apr 02 — Apr 11, 2026",
        duration: "10 days",
        blurb:
          "Private ryokan stays, sakura at first light, and a hidden tea ceremony beneath the mountain.",
      },
      cappadocia: {
        title: "Sunrise over Cappadocia",
        region: "Anatolia, Turkey",
        date: "May 18 — May 25, 2026",
        duration: "8 days",
        blurb:
          "Hot air balloons at dawn, cave suites carved into stone, and twilight dinners in fairy chimneys.",
      },
      "forbidden-city": {
        title: "The Imperial Capital",
        region: "Beijing, China",
        date: "Sep 12 — Sep 19, 2026",
        duration: "8 days",
        blurb:
          "Private access to the Forbidden City at sunrise, calligraphy lessons, and a Great Wall picnic.",
      },
      tianmen: {
        title: "The Heaven's Gate Pilgrimage",
        region: "Tianmen, China",
        date: "Oct 04 — Oct 12, 2026",
        duration: "9 days",
        blurb:
          "999 steps to the gate, helicopter scenic flight, and a secluded mountain retreat.",
      },
      zhangjiajie: {
        title: "Avatar Mountains",
        region: "Hunan, China",
        date: "Jun 08 — Jun 16, 2026",
        duration: "9 days",
        blurb:
          "Private guided treks through the floating pillars that inspired Pandora.",
      },
      bangkok: {
        title: "Golden Bangkok",
        region: "Bangkok, Thailand",
        date: "Nov 14 — Nov 21, 2026",
        duration: "8 days",
        blurb:
          "Royal temples at golden hour, private long-tail river dining, and Michelin-starred street food crawls.",
      },
      "glass-bridge": {
        title: "The Glass Sky Bridge",
        region: "Zhangjiajie, China",
        date: "Jul 20 — Jul 27, 2026",
        duration: "8 days",
        blurb:
          "Walk a transparent bridge suspended a thousand feet above the canyon — vertigo and wonder, in equal measure.",
      },
      tokyo: {
        title: "Neon Tokyo Nights",
        region: "Tokyo, Japan",
        date: "Mar 06 — Mar 13, 2026",
        duration: "8 days",
        blurb:
          "Omakase tastings, after-hours Shibuya, and a private viewing of the Tsukiji morning auction.",
      },
      chongqing: {
        title: "Cyberpunk Chongqing",
        region: "Chongqing, China",
        date: "Aug 22 — Aug 29, 2026",
        duration: "8 days",
        blurb:
          "Skyline penthouses, monorail rides through skyscrapers, and the world's spiciest hotpot.",
      },
      shanghai: {
        title: "The Bund After Dark",
        region: "Shanghai, China",
        date: "Dec 02 — Dec 09, 2026",
        duration: "8 days",
        blurb:
          "Riverside private suites, art-deco speakeasies, and a sunset cruise along the Huangpu.",
      },
    },
  },
};
