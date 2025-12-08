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
  },
  {
     id: 70,
     organization: "5kmrun.bg",
     type: "private",
     description: {
       en: "5kmrun.bg is Bulgaria’s biggest free weekly running community, organizing timed 5 km runs every  Saturday in parks across the country.",
       bg: "5kmrun.bg е най-голямата безплатна седмична общност за бягане в България, която организира 5 км пробези  с време всяка събота в паркове из страната."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 71,
     organization: "avtomagazin.bg",
     type: "private",
     description: {
       en: "Bulgarian automotive magazine and news website covering car reviews, auto industry news, and vehicle  specifications.",
       bg: "Български автомобилен журнал и новинарски уебсайт, обхващащ рецензии на коли, новини от автоиндустрията  и спецификации на превозни средства."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 72,
     organization: "bg-planet.com",
     type: "private",
     description: {
       en: "Bulgarian web portal and community platform.",
       bg: "Български уеб портал и общностна платформа."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 73,
     organization: "bg-sail.org",
     type: "private",
     description: {
       en: "Bulgarian sailing community and yacht club website featuring sailing events, training, and water sports  activities.",
       bg: "Уебсайт на българската общност за ветроходство и яхт клуб с ветроходни събития, обучение и водни  спортни дейности."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 74,
     organization: "bgben.co.uk",
     type: "private",
     description: {
       en: "UK-based Bulgarian media and information service providing news and content for the Bulgarian community  in Britain.",
       bg: "Базирана в Обединеното кралство българска медийна и информационна услуга, предоставяща новини и  съдържание за българската общност в Британия."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 75,
     organization: "bis.bg",
     type: "private",
     description: {
       en: "Bulgarian social networking platform and community website.",
       bg: "Българска платформа за социални мрежи и общностен уебсайт."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 76,
     organization: "boxoffice.bg",
     type: "private",
     description: {
       en: "Bulgarian cinema and movie theater ticket booking platform with film schedules and entertainment  information.",
       bg: "Българска платформа за резервация на билети за кино и кинозали с филмови програми и развлекателна  информация."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 77,
     organization: "bulgaria-shop.de",
     type: "private",
     description: {
       en: "German-based online shop selling Bulgarian products and foods to customers in Germany.",
       bg: "Базиран в Германия онлайн магазин, продаващ български продукти и храни на клиенти в Германия."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 78,
     organization: "cabinet.bg",
     type: "private",
     description: {
       en: "Bulgarian business services and consulting platform.",
       bg: "Българска платформа за бизнес услуги и консултации."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 79,
     organization: "careers.unwe.bg",
     type: "private",
     description: {
       en: "Career services portal of the University of National and World Economy (UNWE) in Sofia, connecting  students with employers.",
       bg: "Портал за кариерни услуги на Университета за национално и световно стопанство (УНСС) в София, свързващ  студенти с работодатели."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 80,
     organization: "classroom.bg",
     type: "private",
     description: {
       en: "Bulgarian educational technology platform for online learning and classroom management.",
       bg: "Българска образователна технологична платформа за онлайн обучение и управление на класни стаи."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 81,
     organization: "daxy.com",
     type: "private",
     description: {
       en: "Bulgarian website (specific services unclear from available information).",
       bg: "Български уебсайт (конкретните услуги не са ясни от наличната информация)."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 82,
     organization: "detelina-bg.com",
     type: "private",
     description: {
       en: "Bulgarian online store for seeds, agricultural products, and gardening supplies.",
       bg: "Български онлайн магазин за семена, селскостопански продукти и градински принадлежности."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 83,
     organization: "e-uard.bg",
     type: "private",
     description: {
       en: "Bulgarian electronic security and monitoring services platform.",
       bg: "Българска платформа за електронни услуги за сигурност и мониторинг."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 84,
     organization: "en.journey.bg",
     type: "private",
     description: {
       en: "Bulgarian travel and tourism website offering vacation packages, hotel bookings, and travel  information.",
       bg: "Български уебсайт за пътувания и туризъм, предлагащ ваканционни пакети, резервации на хотели и  информация за пътувания."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 85,
     organization: "forum.investor.bg",
     type: "private",
     description: {
       en: "Bulgarian investment and financial discussion forum for stock market, trading, and personal finance  topics.",
       bg: "Български форум за инвестиции и финанси, обсъждащ фондовия пазар, търговия и лични финанси."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 86,
     organization: "forumold.adv-bulgaria.com",
     type: "private",
     description: {
       en: "Bulgarian advertising and marketing industry forum (old version).",
       bg: "Български форум за рекламната и маркетингова индустрия (стара версия)."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 87,
     organization: "fpleague.bg",
     type: "private",
     description: {
       en: "Bulgarian fantasy sports league and gaming platform for football predictions.",
       bg: "Българска платформа за фантази спортни лиги и игри за футболни прогнози."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 88,
     organization: "gss.bg",
     type: "private",
     description: {
       en: "Bulgarian IT services and technology solutions provider.",
       bg: "Български доставчик на IT услуги и технологични решения."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 89,
     organization: "inoxbulgaria.com",
     type: "private",
     description: {
       en: "Bulgarian stainless steel products manufacturer and supplier.",
       bg: "Български производител и доставчик на продукти от неръждаема стомана."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 90,
     organization: "jelezaria.bg",
     type: "private",
     description: {
       en: "Bulgarian online hardware store selling construction materials and tools.",
       bg: "Български онлайн магазин за железария, продаващ строителни материали и инструменти."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 91,
     organization: "lsbg.net",
     type: "private",
     description: {
       en: "Bulgarian lifeboat and maritime safety organization website.",
       bg: "Уебсайт на българска организация за спасителни лодки и морска безопасност."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 92,
     organization: "market.bg",
     type: "private",
     description: {
       en: "Bulgarian online marketplace and classifieds platform for buying and selling goods.",
       bg: "Българска онлайн платформа за пазар и обяви за покупка и продажба на стоки."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 93,
     organization: "metal.best.bg",
     type: "private",
     description: {
       en: "Bulgarian metal industry and metalworking services website.",
       bg: "Български уебсайт за металната индустрия и услуги по металообработка."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 94,
     organization: "mining.bg",
     type: "private",
     description: {
       en: "Bulgarian mining industry news and information portal.",
       bg: "Български новинарски и информационен портал за минната индустрия."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 95,
     organization: "mushroom-bulgaria.com",
     type: "private",
     description: {
       en: "Bulgarian restaurant or food service related to mushroom cuisine.",
       bg: "Български ресторант или хранителна услуга, свързана с гъбена кухня."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 96,
     organization: "naedro.bg",
     type: "private",
     description: {
       en: "Bulgarian wholesale marketplace and B2B trading platform.",
       bg: "Българска платформа за търговия на едро и B2B търговия."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 97,
     organization: "nfp-drugs.bg",
     type: "public",
     description: {
       en: "Bulgarian National Framework for Pricing of Medicinal Products - government pharmaceutical database.",
       bg: "Национална рамка за ценообразуване на лекарствени продукти - правителствена фармацевтична база данни."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 98,
     organization: "offnews.bg",
     type: "private",
     description: {
       en: "Bulgarian news and media website.",
       bg: "Български новинарски и медиен уебсайт."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 99,
     organization: "pcmania.bg",
     type: "private",
     description: {
       en: "Bulgarian computer gaming community and forum for PC gamers.",
       bg: "Българска общност за компютърни игри и форум за PC геймъри."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 100,
     organization: "pigeon-bg.com",
     type: "private",
     description: {
       en: "Bulgarian pigeon breeding and racing community website.",
       bg: "Уебсайт на българската общност за развъждане и състезания с гълъби."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 101,
     organization: "portal-bg.com",
     type: "private",
     description: {
       en: "Bulgarian web portal providing search engine and various online services.",
       bg: "Български уеб портал, предоставящ търсачка и различни онлайн услуги."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 102,
     organization: "rechnik-bg.com",
     type: "private",
     description: {
       en: "Bulgarian online dictionary and translation service for multiple languages.",
       bg: "Български онлайн речник и преводаческа услуга за множество езици."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 103,
     organization: "shop.karta.bg",
     type: "private",
     description: {
       en: "Online shop of Karta.bg map and publishing company selling maps, atlases, and travel guides.",
       bg: "Онлайн магазин на картографска и издателска компания Karta.bg, продаващ карти, атласи и пътеводители."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 104,
     organization: "snimkionline.bg",
     type: "private",
     description: {
       en: "Bulgarian online photo printing and photography services.",
       bg: "Български онлайн услуги за печат на снимки и фотография."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 105,
     organization: "svatba-bg.net",
     type: "private",
     description: {
       en: "Bulgarian wedding planning and services portal connecting couples with wedding vendors.",
       bg: "Български портал за планиране на сватби и услуги, свързващ двойки с доставчици на сватбени услуги."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 106,
     organization: "techn0.eu.server12.host.bg",
     type: "private",
     description: {
       en: "Bulgarian hosting server or technology service platform.",
       bg: "Български хостинг сървър или технологична сервизна платформа."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 107,
     organization: "theatre.art.bg",
     type: "private",
     description: {
       en: "Bulgarian theater and performing arts information portal with show schedules and ticket sales.",
       bg: "Български информационен портал за театър и сценични изкуства с програми за представления и продажба на  билети."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 108,
     organization: "v2.offroad-bulgaria.com",
     type: "private",
     description: {
       en: "Bulgarian off-road and 4x4 vehicles community and forum.",
       bg: "Българска общност и форум за офроуд и 4x4 превозни средства."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 109,
     organization: "vestnikreklama.bg",
     type: "private",
     description: {
       en: "Bulgarian advertising newspaper and classifieds publication.",
       bg: "Български рекламен вестник и издание с обяви."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 110,
     organization: "vipoferta.bg",
     type: "private",
     description: {
       en: "Bulgarian VIP deals and special offers platform.",
       bg: "Българска платформа за VIP оферти и специални предложения."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 111,
     organization: "vsu.bg",
     type: "private",
     description: {
       en: "Website of Higher School - Lyuben Karavelov.",
       bg: "Уебсайт на Висше строително училище - Любен Каравелов."
     },
     source: "https://bezbedanbalkan.net/thread-1311.html",
     images: ["images/380BulgarianDatabases.png"],
 },
 {
     id: 112,
     organization: "shtora.bg",
     type: "private",
     description: {
       en: "Online store for blinds.",
       bg: "Онлайн магазин за щори."
     },
     source: "https://www.ransomlook.io/leaks",
     images: ["images/shtora.bg.png"],
 },
 {
     id: 113,
     organization: "bania.bg",
     type: "private",
     description: {
       en: "Store for bathroom and kitchen offering hydromassage bathtubs, cabins, sinks, and faucets.",
       bg: "Магазин за баня и кухня, предлагащ хидромасажни вани и кабини, мивки и смесители."
     },
     source: "https://data-wells.niamonx.io/?search=.bg",
     images: ["images/bania_and_dentstore.bg.png"],
 },
 {
     id: 114,
     organization: "dentstore.bg",
     type: "private",
     description: {
       en: "Specialized professional store for dentistry and dental technology.",
       bg: "Специализиран професионален магазин за стоматология и зъботехника."
     },
     source: "https://data-wells.niamonx.io/?search=.bg",
     images: ["images/bania_and_dentstore.bg.png"],
 },
 {
     id: 115,
     organization: "sladur.bg",
     type: "private",
     description: {
       en: "An old bulgarian website for dating.",
       bg: "Стар български уебсайт за онлайн запознанства."
     },
     source: "https://www.techsolvency.com/passwords/hashes-org/leaks.txt",
     images: ["images/sladur.bg.png"],
 },
 {
     id: 116,
     organization: "estore.sbs.bg",
     type: "private",
     description: {
       en: "Online store of Specialized Business Systems (SBS), a Bulgarian company that imports, exports, distributes and services PC components, systems and office equipment.",
       bg: "Oнлайн магазинът на Специализирани бизнес системи (SBS), българска компания, която внася, изнася, дистрибутира и обслужва PC компоненти, системи и офис оборудване."
     },
     source: "https://www.techsolvency.com/passwords/hashes-org/leaks.txt",
     images: ["images/estore.sbs.bg.png"],
 },
 {
     id: 117,
     organization: "freelance.bg",
     type: "private",
     description: {
       en: "Bulgarian platform for remote work job postings for freelance specialists, project assignments and execution, and work from home opportunities.",
       bg: "Българска платформа за обяви за дистанционна работа за специалисти на свободна практика, възлагане и изпълнение на freelance проекти и отдалечена работа от вкъщи."
     },
     source: "https://www.techsolvency.com/passwords/hashes-org/leaks.txt",
     images: ["images/freelance.bg.png"],
 },
 {
     id: 118,
     organization: "dell-bg.net",
     type: "private",
     description: {
       en: "Bulgarian retailer selling Dell computers, laptops, hardware, software, monitors, processors, memory, accessories and other technology products.",
       bg: "Български търговец, продаващ Dell компютри, лаптопи, хардуер, софтуер, монитори, процесори, памети, аксесоари и други технологични продукти."
     },
     source: "https://www.techsolvency.com/passwords/hashes-org/leaks.txt",
     images: ["images/dell-bg.net.png"],
 },
 {
     id: 119,
     organization: "forcom-bg.com",
     type: "private",
     description: {
       en: "ForCom Publishing House, founded in 1989, specializing in graphic design of high-density information forms prepared for matrix and laser printer completion and optical reading.",
       bg: "Издателство ФорКом, създадено през 1989 г., специализирано в графично проектиране на формуляри с висока информационна плътност, подготвени за попълване с матрични и лазерни принтери и за оптическо четене на информацията."
     },
     source: "https://www.techsolvency.com/passwords/hashes-org/leaks.txt",
     images: ["images/forcom-bg.com.png"],
 }
];
