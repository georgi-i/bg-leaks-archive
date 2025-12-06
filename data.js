const leaksData = [
  {
    id: 1,
    organization: "STENIK Group",
    type: "private",
    description: {
      en: "eCommerce development company database breach - 2M records",
      bg: "Пробив в базата данни на компания за уеб дизайн и eCommerce - 2М записа"
    },
    source: "https://darkforums.st/Thread-Selling-STENIK-Group-Bulgaria-Company-2M",
    images: ["images/stenik.png", "images/stenik2.png", "images/stenik3.png"],
    
  },
  {
    id: 2,
    organization: "Unknown Bulgarian Database",
    type: "private",
    description: {
      en: "Comprehensive Bulgarian database breach",
      bg: "Цялостен пробив в българска база данни"
    },
    source: "https://darkforums.st/Thread-Selling-Bulgaria-Database",
    images: ["images/unknown.png"],
    
  },
  {
    id: 3,
    organization: "DallBogg.bg",
    type: "private",
    description: {
      en: "20k Greek insurance identity records",
      bg: "20 хил. записа с гръцки застрахователни самоличности"
    },
    source: "https://darkforums.st/Thread-DallBogg-bg-20k-greece-insurance-identity",
    images: ["images/dallbogg.png"],
    
  },
  {
    id: 4,
    organization: "SpiderSport.com",
    type: "private",
    description: {
      en: "Sports retail company database breach",
      bg: "Пробив в базата данни на компания за спортни стоки"
    },
    source: "https://darkforums.st/Thread-Bulgaria-database%C2%A0-spidersport-com",
    images: ["images/spidersport.png"],
    
  },
  {
    id: 5,
    organization: "Lira.bg",
    type: "private",
    description: {
      en: "WordPress database breach",
      bg: "Пробив в WordPress база данни"
    },
    source: "https://darkforums.st/Thread-Bulgaria-lira-bg-Wordpress-Database",
    images: ["images/lira.png"],
    
  },
  {
    id: 6,
    organization: "MK Brokers Bank",
    type: "private",
    description: {
      en: "Investment company database breach - 7GB",
      bg: "Пробив в базата данни на инвестиционен посредник - 7GB"
    },
    source: "https://darkforums.st/Thread-DATABASE-7GB-MK-Brokers-Bank-Bulgaria",
    images: ["images/mkbrokers.png"],
    
  },
  {
    id: 7,
    organization: "SportVision",
    type: "private",
    description: {
      en: "Retail database breach - 1,390,766M records",
      bg: "Пробив в база данни на магазин - 1,390,766М записа"
    },
    source: "https://darkforums.st/Thread-Selling-SportVision-1-390-766M-Bulgaria",
    images: ["images/sportvision.png", "images/sportvision2.png"],
    
  },
  {
    id: 8,
    organization: "Pilini.bg",
    type: "private",
    description: {
      en: "E-commerce platform breach",
      bg: "Пробив в платформа за електронна търговия"
    },
    source: "https://darkforums.st/Thread-pilini-bg",
    images: ["images/pilini.png"],
    
  },
  {
    id: 9,
    organization: "Kasida.bg",
    type: "private",
    description: {
      en: "Online retail database breach",
      bg: "Пробив в база данни на онлайн магазин"
    },
    source: "https://darkforums.st/Thread-kasida-bg",
    images: ["images/kasida.png"],
    
  },
  {
    id: 10,
    organization: "B2B Bulgaria",
    type: "private",
    description: {
      en: "Business-to-business platform breach",
      bg: "Пробив в бизнес платформа"
    },
    source: "https://leakbase.la/threads/16198-b2b-bulgaria.33522/",
    images: ["images/unknown2.png"],
    
  },
  {
    id: 11,
    organization: "8hristo.com",
    type: "private",
    description: {
      en: "Database breach - 162 MB",
      bg: "Пробив в база данни - 162 MB"
    },
    source: "https://leakbase.la/threads/bulgaria-8hristo-com-162-mb.27792/",
    images: ["images/8hristo.png"],
    
  },
  {
    id: 12,
    organization: "Douglas.bg",
    type: "private",
    description: {
      en: "Retail database breach - 589 MB",
      bg: "Пробив в база данни на магазин - 589 MB"
    },
    source: "https://leakbase.la/threads/bulgaria-douglas-bg-589-mb.27790/",
    images: ["images/douglas.png"],
    
  },
  {
    id: 13,
    organization: "LillyDrogerie.bg",
    type: "private",
    description: {
      en: "Drugstore database breach - 413 MB",
      bg: "Пробив в база данни на аптека - 413 MB"
    },
    source: "https://leakbase.la/threads/bulgaria-shop-llillydrogerie-bg-413-mb.27787/",
    images: ["images/lillydrogerie.png"],
    
  },
  {
    id: 14,
    organization: "TransCard Bulgaria",
    type: "private",
    description: {
      en: "Payment card system breach",
      bg: "Пробив в система за платежни карти"
    },
    source: "https://leakbase.la/threads/transcard-bulgaria.31367/",
    images: ["images/transcard.png"],
    
  },
  {
    id: 15,
    organization: "iLife.bg",
    type: "private",
    description: {
      en: "E-commerce platform breach",
      bg: "Пробив в платформа за електронна търговия"
    },
    source: "https://darkforums.st/Thread-ilife-bg",
    images: ["images/ilife.png"],
    
  },
  {
    id: 16,
    organization: "ELD.bg",
    type: "private",
    description: {
      en: "DragonForce ransomware attack",
      bg: "Атака с DragonForce ransomware"
    },
    source: "https://dragonforxxbp3awc7mzs5dkswrua3znqyx5roefmi4smjrsdi22xwqd.onion/eld.bg/",
    images: ["images/eld.png"],
    
  },
  {
    id: 17,
    organization: "MKB (en.mkb.bg)",
    type: "private",
    description: {
      en: "LockBit ransomware attack on investment company",
      bg: "LockBit ransomware атака"
    },
    source: "https://lockbit7z355oalq4hiy5p7de64l6rsqutwlvydqje56uvevcc57r6qd.onion/en.mkb.bg/",
    images: ["images/mkb.png"],
    
  },
  {
    id: 18,
    organization: "Generali.bg",
    type: "private",
    description: {
      en: "Insurance company data breach",
      bg: "Пробив в данни на застрахователна компания"
    },
    source: "https://x.com/H4ckManac/status/1760969176372421015",
    images: ["images/generali.jpeg"],
    
  },
  {
    id: 19,
    organization: "iCard.bg",
    type: "private",
    description: {
      en: "Financial services breach - 1,800 individuals",
      bg: "Пробив на финансови услуги - 1,800 лица"
    },
    source: "https://bird.bg/en/hacker-breached-icard-and-published-the-personal-data-of-1800-individuals/",
    images: ["images/icard.webp"],
    
  },
  {
    id: 20,
    organization: "National Revenue Agency (NRA)",
    type: "public",
    description: {
      en: "Major government breach affecting millions",
      bg: "Голям правителствен пробив, засягащ милиони"
    },
    source: "https://haveibeenpwned.com/Breach/BulgarianNationalRevenueAgency",
    images: ["images/nra.webp", "images/nra2.jpeg"],
    
  },
  {
    id: 21,
    organization: "Videnov.bg",
    type: "private",
    description: {
      en: "Seized from breachforums.st",
      bg: "Иззето от breachforums.st"
    },
    source: "https://breachforums.hn",
    images: ["images/videnov.png"],
    
  },
  {
    id: 22,
    organization: "pod-toplina.bg",
    type: "private",
    description: {
      en: "Pension insurance company breach",
      bg: "Пробив в информационната система на пенсионно осигурително дружество"
    },
    source: "https://breachforums.hn",
    images: ["images/toplina.png"],
    
  },
  {
    id: 23,
    organization: "Alessa.bg",
    type: "private",
    description: {
      en: "E-commerce platform breach",
      bg: "Пробив в платформа за електронна търговия"
    },
    source: "https://breachforums.hn",
    images: ["images/alessa.png"],
    
  },
  {
    id: 24,
    organization: "BGTOLL",
    type: "public/private",
    description: {
      en: "Toll system database breach",
      bg: "Пробив в база данни на тол система"
    },
    source: "https://breachforums.hn",
    images: ["images/bgtoll.png"],
    
  },
  {
    id: 25,
    organization: "Sting AD",
    type: "private",
    description: {
      en: "Hunters International ransomware group attack",
      bg: "Атака от ransomware групата Hunters International"
    },
    source: "https://huntersinternational.org",
    images: ["images/huntersinternational.org.png"],
    
  },
  {
    id: 26,
    organization: "I&G Brokers",
    type: "private",
    description: {
      en: "Insurance brokers data breach",
      bg: "Пробив в данни на застрахователни брокери"
    },
    source: "https://breachforums.is",
    images: ["images/i&G_leak.png", "images/I&G_leak_2.png"],
    
  },
  {
    id: 27,
    organization: "Prosecutor's Office (prb.bg)",
    type: "public",
    description: {
      en: "Government prosecutor's office breach",
      bg: "Пробив в прокуратурата"
    },
    source: "https://darkforums.st",
    images: ["images/prb.bg.jpeg", "images/prb.bg.2.png"],
    
  },
  {
    id: 28,
    organization: "Lev Ins",
    type: "private",
    description: {
      en: "Insurance company breach",
      bg: "Пробив в застрахователна компания"
    },
    source: "https://naglite.com",
    images: ["images/levins.png"],
    
  },
  {
    id: 29,
    organization: "Econt",
    type: "private",
    description: {
      en: "Logistics company data breach",
      bg: "Пробив в данни на логистична компания"
    },
    source: "https://leakbase.la",
    images: ["images/econt.jpeg"],
    
  },
  {
    id: 30,
    organization: "Multiple Bulgarian Sites",
    type: "private",
    description: {
      en: "bezplatno.bg, bg.elmarkstore.eu, brigadiri.com, casioshop.bg, investclub.bg, comfort.bg, bgtime.tv, address.bg, stylewish.bg",
      bg: "bezplatno.bg, bg.elmarkstore.eu, brigadiri.com, casioshop.bg, investclub.bg, comfort.bg, bgtime.tv, address.bg, stylewish.bg"
    },
    source: "https://predpriemach.com",
    images: ["images/predpriemach.com.png"],
    
  },
  {
    id: 31,
    organization: "Multiple BreachForums Leaks",
    type: "private",
    description: {
      en: "A1 Telecom, baumit.bg, kasida.bg, pilini.bg, airelec.bg, bnm.bg, punto.bg, footshop.bg, districtshoes.bg, ecco.bg, myshoes.bg, ardes.bg, andrews.bg, popolo.bg, ebag.bg, mango.bg, dallbogg.bg, ilife.bg",
      bg: "A1 Telecom, baumit.bg, kasida.bg, pilini.bg, airelec.bg, bnm.bg, punto.bg, footshop.bg, districtshoes.bg, ecco.bg, myshoes.bg, ardes.bg, andrews.bg, popolo.bg, ebag.bg, mango.bg, dallbogg.bg, ilife.bg"
    },
    source: "https://breachforums.is",
    images: ["images/ransomed.vc_bulgarian_breaches.png"],
    
  },
  {
    id: 32,
    organization: "Multiple Sites by 'Soni'",
    type: "private",
    description: {
      en: "Multiple Bulgarian e-commerce breaches by threat actor 'Soni'",
      bg: "Множество пробиви в български сайтове за електронна търговия от заплахата 'Soni'"
    },
    source: "https://breachforums.is",
    images: ["images/soni_selling.png"],
    
  },
  {
    id: 33,
    organization: "A1.bg",
    type: "private",
    description: {
      en: "Telecommunications company breach",
      bg: "Пробив в телекомуникационна компания"
    },
    source: "https://breachforums.is",
    images: ["images/a1.bg.png"],
    
  },
  {
    id: 34,
    organization: "MVR.bg (Ministry of Interior)",
    type: "public",
    description: {
      en: "Ministry of Interior database breach by 'crime'",
      bg: "Пробив в база данни на МВР от потребител 'crime'"
    },
    source: "https://breachforums.is",
    images: ["images/mvr.bg.png"],
    
  },
  {
    id: 35,
    organization: "culture-mfa.bg",
    type: "public",
    description: {
      en: "Ministry of Culture and Foreign Affairs breach",
      bg: "Пробив в Министерството на културата и външните работи"
    },
    source: "https://breachforums.is",
    images: ["images/culture-mfa.bg.png"],
    
  },
  {
    id: 36,
    organization: "Multiple Sites by 'crime'",
    type: "private",
    description: {
      en: "Multiple Bulgarian breaches by threat actor 'crime'",
      bg: "Множество български пробиви от заплахата 'crime'"
    },
    source: "https://breachforums.is",
    images: ["images/crime_selling.png"],
    
  },
  {
    id: 37,
    organization: "hreu.eu",
    type: "private",
    description: {
      en: "Human resources solutions company - Funksec ransomware attack",
      bg: "Компания за човешки ресурси - Funksec ransomware атака"
    },
    source: "https://www.ransomware.live/id/aHJldS5ldUBmdW5rc2Vj",
    images: ["https://images.ransomware.live/victims/018444382cb13aadb7f41fda1abff3e6.png"],
    
  },
  {
    id: 38,
    organization: "Supreme Administrative Court (Ransomhouse)",
    type: "public",
    description: {
      en: "Supreme Administrative Court - Ransomhouse attack (January 2025)",
      bg: "Върховен административен съд - Ransomhouse атака (януари 2025)"
    },
    source: "https://www.ransomware.live/id/U3VwcmVtZSBBZG1pbmlzdHJhdGl2ZSBDb3VydCBvZiBCdWxnYXJpYUByYW5zb21ob3VzZQ==",
    images: ["images/vas_leak_ransomhouse.png"],
    
  },
  {
    id: 39,
    organization: "Smart Media Group Bulgaria",
    type: "private",
    description: {
      en: "Advertising services company - Sarcoma ransomware group attack",
      bg: "Рекламна компания - Sarcoma ransomware групова атака"
    },
    source: "https://www.ransomware.live/id/U21hcnQgTWVkaWEgR3JvdXAgQnVsZ2FyaWFAc2FyY29tYQ==",
    images: ["images/smartd.bg.png"],
    
  },
  {
    id: 40,
    organization: "intrama-bg.com",
    type: "private",
    description: {
      en: "Manufacturing company - Stormous ransomware attack",
      bg: "Производствена компания - Stormous ransomware атака"
    },
    source: "https://www.ransomware.live/id/aW50cmFtYS1iZ0BzdG9ybW91cw==",
    images: ["images/intrama-bg.png"],
    
  },
  {
    id: 41,
    organization: "Regas Energy (regasenergy.com)",
    type: "private",
    description: {
      en: "Energy sector company (Electricity, Oil & Gas) - Monti ransomware attack",
      bg: "Енергийна компания (Електричество, петрол и газ) - Monti ransomware атака"
    },
    source: "https://www.ransomware.live/id/UmVnYXMgKHJlZ2FzZW5lcmd5LmNvbSlAbW9udGk=",
    images: ["https://images.ransomware.live/victims/c1fd85be2ef64fa62605918e48ce825d.png"],
    
  },
  {
    id: 42,
    organization: "GERB Political Party (gerb.bg)",
    type: "public",
    description: {
      en: "Political party headed by former PM Boyko Borisov - LockBit3 ransomware attack",
      bg: "Политическа партия, ръководена от бившия министър-председател Бойко Борисов - LockBit3 ransomware атака"
    },
    source: "https://www.ransomware.live/id/Z2VyYi5iZ0Bsb2NrYml0Mw==",
    images: ["https://images.ransomware.live/victims/8c6504b4a9b54bd9ec67edd306bbcb34.png"],
  },
  {
    id: 43,
    organization: "varnabroker.com",
    type: "private",
    description: {
      en: "Bulgarian insurance company",
      bg: "Българска компания за застраховки"
    },
    source: "https://leakbase.la/threads/varnabroker-com.877/",
    images: ["images/varnabroker.png"],
  },
    {
    id: 44,
    organization: "bulgarianpropertyuk.com",
    type: "private",
    description: {
      en: "A real estate agency specializing in Bulgarian property sales to UK clients, offering apartments, houses, and hotels primarily in Black Sea resorts like Sunny Beach and Nessebar.",
      bg: "Агенция за недвижими имоти, специализирана в продажбата на български имоти на клиенти от Великобритания, предлагаща апартаменти, къщи и хотели предимно в черноморски курорти като Слънчев бряг и Несебър."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/bulgarianpropertyuk.com.png"],
  },
  {
    id: 45,
    organization: "autocatalog.bg",
    type: "private",
    description: {
      en: "An automotive news and information website covering car brands, models, specifications, and motorsports in Bulgarian.",
      bg: "Уебсайт за автомобилни новини и информация, обхващащ марки автомобили, модели, спецификации и моторни спортове на български."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/autocatalog.bg.png"],
  },
  {
    id: 46,
    organization: "arenabg.com",
    type: "private",
    description: {
      en: "A Bulgarian torrent tracker website for downloading movies, TV series, and other digital content.",
      bg: "Български торент тракер уебсайт за изтегляне на филми, телевизионни сериали и друго цифрово съдържание."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/arenabg.com.png"],
  },
  {
    id: 47,
    organization: "ipmart-bg.com",
    type: "private",
    description: {
      en: "Old bulgarian forum for IT stuff.",
      bg: "Стар български форум за IT."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/ipmart-bg.com.png"],
  },
  {
    id: 48,
    organization: "assoc.pension.bg",
    type: "private",
    description: {
      en: "Related to the Bulgarian Association of Supplementary Pension Security Companies, dealing with pension fund information.",
      bg: "Свързана с Българската асоциация на дружествата за допълнително пенсионно осигуряване, занимаваща се с информация за пенсионни фондове."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/pension.bg.png"],
  },
  {
    id: 49,
    organization: "bgpochivka.eu",
    type: "private",
    description: {
      en: "A Bulgarian vacation and holiday booking website.",
      bg: "Български уебсайт за резервация на ваканции и почивки."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 50,
    organization: "blog.bg",
    type: "private",
    description: {
      en: "A free Bulgarian blog hosting platform and portal where users can create and maintain personal blogs.",
      bg: "Безплатна българска платформа за блогове и портал, където потребителите могат да създават и поддържат лични блогове."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 51,
    organization: "games.portokal-bg.net",
    type: "private",
    description: {
      en: "An online gaming portal offering free flash games in various categories including puzzles, action, sports, and card games.",
      bg: "Онлайн игрален портал, предлагащ безплатни флаш игри в различни категории, включително пъзели, екшън, спортни и карти игри."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 52,
    organization: "ironmaiden-bg.com",
    type: "private",
    description: {
      en: "The official Bulgarian Iron Maiden fan club website featuring band news, discography information, and local concert announcements.",
      bg: "Официалният български фен клуб на Iron Maiden с новини за групата, дискография и обявления за местни концерти."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 53,
    organization: "sopko.tu-sofia.bg",
    type: "private",
    description: {
      en: "An e-learning platform (\"SOPKO\") for Technical University Sofia providing distance education courses.",
      bg: "Платформа за електронно обучение (\"СОПКО\") на Технически университет София, предоставяща курсове за дистанционно обучение."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 54,
    organization: "carpbg.com",
    type: "private",
    description: {
      en: "A Bulgarian fishing website focused on carp fishing, equipment, and angling community.",
      bg: "Български уебсайт за риболов, фокусиран върху шаранджийство, оборудване и риболовна общност."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 55,
    organization: "ebcbrakes.bg",
    type: "private",
    description: {
      en: "A Bulgarian distributor and online shop for EBC Brakes automotive braking systems and parts.",
      bg: "Български дистрибутор и онлайн магазин за EBC Brakes автомобилни спирачни системи и части."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 56,
    organization: "rabota.bg",
    type: "private",
    description: {
      en: "A major Bulgarian job search website featuring employment listings, resume creation, and recruitment services across Bulgaria.",
      bg: "Голям български сайт за търсене на работа с обяви за заетост, създаване на автобиография и услуги за набиране на персонал в България."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 57,
    organization: "walkersbg.org",
    type: "private",
    description: {
      en: "Website of the Bulgarian Pedestrian Foundation.",
      bg: "Уебсайт на Българската фондация за пешеходци."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 58,
    organization: "fagor.bg",
    type: "private",
    description: {
      en: "The official Bulgarian importer and distributor of Fagor, Edesa, and Cata household appliances from Spain.",
      bg: "Официален български вносител и дистрибутор на домакински уреди Fagor, Edesa и Cata от Испания."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 59,
    organization: "meloman-bg.com",
    type: "private",
    description: {
      en: "Sofia's oldest music store selling vinyl records, CDs, turntables, with thousands of titles available and custom ordering services.",
      bg: "Най-старият музикален магазин в София, продаващ винилови плочи, CD-та, грамофони с хиляди налични заглавия и услуги за поръчка по желание."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 60,
    organization: "patient.bg",
    type: "private",
    description: {
      en: "A healthcare-related website for Bulgarian patients.",
      bg: "Уебсайт, свързан със здравеопазването за български пациенти."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 61,
    organization: "trimonium-bg.com",
    type: "private",
    description: {
      en: "An international recruitment agency specializing in placing Bulgarian professionals in jobs abroad.",
      bg: "Международна агенция за набиране на персонал, специализирана в наемането на български професионалисти на работа в чужбина."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 62,
    organization: "knigabg.com",
    type: "private",
    description: {
      en: "An online Bulgarian bookstore selling books, educational materials, games, and gifts.",
      bg: "Онлайн българска книжарница, продаваща книги, образователни материали, игри и подаръци."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 63,
    organization: "esistore.bg",
    type: "private",
    description: {
      en: "e-commerce for office supplies.",
      bg: "Електронна търговия за офис консумативи."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 64,
    organization: "seajobs.bg",
    type: "private",
    description: {
      en: "A maritime employment website focused on seafaring and shipping industry jobs.",
      bg: "Уебсайт за морска заетост, фокусиран върху мореплавателни и корабоплавателни професии."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 65,
    organization: "dnt.bg",
    type: "private",
    description: {
      en: "Financial Services.",
      bg: "Финансови услуги."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 66,
    organization: "linkstar.bg",
    type: "private",
    description: {
      en: "Online store and importer of mobile phone accessories.",
      bg: "Онлайн магазин и вносител на аксесоари за мобилни телефони."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 67,
    organization: "ski.bg",
    type: "private",
    description: {
      en: "A comprehensive Bulgarian skiing and snowboarding information portal covering resorts like Bansko, Borovets, and Pamporovo with booking services.",
      bg: "Изчерпателен български информационен портал за ски и сноуборд, обхващащ курорти като Банско, Боровец и Пампорово с услуги за резервация."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 68,
    organization: "smc-bg.com",
    type: "public",
    description: {
      en: "Оld website of the Sofia Military Court.",
      bg: "Стар уебсайт на Софийския военен съд."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  },
  {
    id: 69,
    organization: "superphone.bg",
    type: "private",
    description: {
      en: "A Bulgarian mobile phone and accessories retailer offering various smartphone brands and related products.",
      bg: "Български търговец на дребно за мобилни телефони и аксесоари, предлагащ различни марки смартфони и свързани продукти."
    },
    source: "https://darkforums.st/Thread-OLD-BIG-DBS-TOTAL-OF-595-32-GB",
    images: ["images/oldbigdbs.png"],
  }
];
];
