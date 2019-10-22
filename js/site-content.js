var langContents = {
    dayButtonLabels: {
        pl: ["Dzień 1", "Dzień 2", "Dzień 3", "Dni 4-5", "Dzień 6", "Dzień 7", "Dni 8-10", "Dzień 11", "Dzień 12"],
        en: ["Day 1", "Day 2", "Day 3", "Days 4-5", "Day 6", "Day 7", "Days 8-10", "Day 11", "Day 12"],
        de: ["Tag 1", "Tag 2", "Tag 3", "Tage 4-5", "Tag 6", "Tag 7", "Tage 8-10", "Tag 11", "Tag 12"]
    }
}

var pageContents = {
    denver1: {      /* CITY 1: DENVER (1) */
        headlineData: ["Denver", "14.06.2019"],
        cityItems: [
            {
                cityItemMenuOption:
                    {
                        pl: "Lot",
                        en: "Flight",
                        de: "Flug",
                    },
                cityItemCodename: "lot",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 3,
                caption: "Zdjęcia z lotu",
                showVideos: false,
            },
            {
                cityItemMenuOption:
                    {
                        pl: "Pierwsze wrażenia",
                        en: "First impressions",
                        de: "Erste Eindrücke",
                    },
                cityItemCodename: "denver1_first_impressions",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
            },
        ]
    }, 
    idaho_springs: {        /* CITY 2: IDAHO SPRINGS */
        headlineData: ["Idaho Springs", "15.06.2019"],
        cityItems: [
            {   
                cityItemMenuOption: "Rocky Mountains National Park",
                cityItemCodename: "rocky_mountains",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 28,
                caption: "Rocky Mountains National Park",
                showVideos: false,
            },
            {
                cityItemMenuOption: "Grand Lake",
                cityItemCodename: "grand_lake",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Grand Lake",
                    img2: "Grand Lake",
                    img3: "Grand Lake",
                    img4: "Grand Lake",
                    img5: "Grand Lake",
                    img6: "Grand Lake",
                }
            },
            {
                cityItemMenuOption: "dyn_ idaho option3",
                cityItemCodename: "",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
            }
        ]
    },
    wellington: {       /* CITY 3: WELLINGTON */
        headlineData: ["Wellington", "16.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "Georgetown",
                cityItemCodename: "georgetown",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 34,
                caption: "Georgetown",
                showVideos: false,              
            },
            {
                cityItemMenuOption: "Interstate 70 & Loveland Pass",
                cityItemCodename: "interstate_70",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 16,
                caption: "Interstate 70 & Loveland Pass",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/9w6fi_abVs4",
                    vid2: "https://youtu.be/hYkps22-R4g",
                    vid3: "https://youtu.be/Lj3pR2MusVI",
                    vid4: "https://youtu.be/_Jpuw1yH6A8",
                    vid5: "https://youtu.be/b8x6Lus51us",
                    vid6: "https://youtu.be/qLkArWiELRM",
                    vid7: "https://youtu.be/0N4JClP7uIU",
                    vid8: "https://youtu.be/gz17E-foVQc"
                }
            },
            {
                cityItemMenuOption: "Great Junction",
                cityItemCodename: "great_junction",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 0,
                caption: "none",
                showVideos: false,
            },
            {
                cityItemMenuOption: "Colorado National Monument",
                cityItemCodename: "colorado_national_monument",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 22,
                caption: "Colorado National Monument",
                showVideos: false,
            },
            
        ]
    },
    kanab: {        /* CITY 4: KANAB */
        headlineData: ["Kanab", "17-18.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "Red Canyon",
                cityItemCodename: "red_canyon",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 7,
                caption: "Red Canyon",
                showVideos: false,
            },
            {
                cityItemMenuOption: "Bryce National Park",
                cityItemCodename: "bryce_national_park",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 21,
                caption: "Bryce National Park",
                showVideos: false,
            },
            {
                cityItemMenuOption: "Kanab",
                cityItemCodename: "kanab",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: `<p>Miasteczko w mocno westernowym stylu, nakręcono w nim zresztą wiele westernów. Na początku kariery grywał w nich również Jack Nicholson.</p><p>Nocowaliśmy w Bunkhouse Hostel, ale raczej tego miejsca nie polecamy: <ul><li>zero prywatności</li><li>restrykcyjne zasady (pracują z młodzieżą, więc jakikolwiek alkohol czy cokolwiek "niestosownego" jest zabronione)</li><li>wszędzie pełno rozwydrzonych i rozwrzeszczanych dzieciaków, w tym rodziny właścicieli tego przybytku. Cóż, uroki zwiedzania konserwatywnej części Ameryki</li><li>beznadziejne śniadania, nawet jak na amerykańskie standardy</li></ul></p><p>Obiad jedliśmy w Rocking V Cafe, i o ile jedzenie było smaczne, to ponieważ lokal należał do kategorii "fine dining" (restauracje, a nie bary), to bardzo się cenili. Ogólnie raczej nie warto, tym bardziej, że na drugi dzień odkryliśmy Wild Thyme Cafe, które było już ZNACZNIE lepsze - smaczniejsze i przynajmniej o połowę tańsze, a jednocześnie bezpretensjonalne.</p>`
            },
            {
                cityItemMenuOption: "Grand Canyon – North Rim",
                cityItemCodename: "grand_canyon_north_rim",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 38,
                caption: "Grand Canyon - North Rim",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/qoR1TJ6__AQ",
                    vid2: "https://youtu.be/pDRQOptBZ8s",
                    vid3: "https://youtu.be/Kdu-Wb80pr4",
                    vid4: "https://youtu.be/l-xLXtPHxV0",
                    vid5: "https://youtu.be/q5rKUUrkv1k",
                    vid6: "https://youtu.be/ZmyFXhH6f7g",
                }
            },
            {
                cityItemMenuOption: "Pink Coral Sand Dunes State Park",
                cityItemCodename: "pink_coral_sand_dunes_state_park",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 7,
                caption: "Pink Coral Sand Dunes State Park",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/zkCT5k2prvY",
                    vid2: "https://youtu.be/AYBXNrcxtpU"
                }
            },
        ]
    },
    provo: {        /* CITY 5: PROVO */
        headlineData: ["Provo", "19.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "Provo",
                cityItemCodename: "provo",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: `<p>Powrót do cywilizacji i dużych aglomeracji miejskich był bardzo bolesny. Pierwotnie planowaliśmy zobaczyć też Salt Lake City, ale sam Provo tak nas wymęczyło, że daliśmy sobie spokój. Ruch na wiaduktach oraz sam ogrom aglomeracji skutecznie nas zniechęciły.</p><p>Obiad zjedliśmy w podrzędnym meksykańskim fastfoodzie. Jakościowo było tak sobie, ale przynajmniej tanio. Właściciel na pewno się zdziwił, że do jego lokalu zawitali turyści.</p><p>Hotel był świetny (Baymont by Wyndham), zwłaszcza w porównaniu z niektórymi noclegami do tej pory. Co ciekawe, wcale nie było też najdrożej, do tego było blisko do drogi wylotowej na dalszą trasę.</p>`
            },
            {
                cityItemMenuOption: "Utah Lake State Park",
                cityItemCodename: "utah_lake_state_park",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 4,
                caption: "Utah Lake State Park",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/oAeZHJX7Oj4",
                    vid2: "https://youtu.be/YfCyitY1RF4"
                }
            },
            {
                cityItemMenuOption: "Bridal Veil Falls",
                cityItemCodename: "bridal_veil_falls",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 3,
                caption: "Bridal Veil Falls",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/nbRwALHL_FI",
                    vid2: "https://youtu.be/FzQplX0Tlww"
                }
            }
        ]
    },
    pinedale: {        /* CITY 6: PINEDALE */
        headlineData: ["Pinedale", "20.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "Pinedale",
                cityItemCodename: "pinedale",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: `<p>Koszmarny dojazd z Provo, te 300 mil ciągnęło się w nieskończoność. Setki kilometrów absolutnych pustkowi, na których nie było NIC. Do tego wariowały nam mapy google, bo zapomniałem pobrać trasę do trybu offline, więc nadłożyliśmy drogi. Po drodze zwiedziliśmy historyczne centrum niewielkiego miasteczka, niestety nie pamiętam jakiego.</p>`
            },
            {
                cityItemMenuOption: "Fremont Lake",
                cityItemCodename: "fremont_lake",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 12,
                caption: "Fremont Lake",
                showVideos: false,
            },
        ]
    },
    cody: {        /* CITY 7: CODY */
        headlineData: ["Cody", "21-23.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: 
                {
                    pl: "Jackson i&nbspokolice",
                    en: "Jackson and its surroundings",
                    de: "Jackson und Umgebung",
                },
                cityItemCodename: "jackson",
                slideText: `<p>Przejeżdżając czuliśmy się trochę jak w Zakopanym, choć na pierwszy (i krótki) rzut oka Jackson jest zdecydowanie ładniejsze</p><p>Jackson to baza noclegowa/imprezowa dla turystów zwiedzających Grand Teton i Yellowstone</p><p>Udało mi się tam kupić softshell w sklepie z używaną odzieżą sportową, bo było strasznie zimno</p>`,
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: true,
                imagesNo: 5,
                caption: "Jackson (Wyoming) i okolice.",
                videos: {
                    vid1: "https://youtu.be/YTC4YKSZSiU",
                    vid2: "https://youtu.be/aIPLBmb5HgE",
                    vid3: "https://youtu.be/rYdviFlnzbo",
                    vid4: "https://youtu.be/lF9Ujk_ZpmA",
                    vid5: "https://youtu.be/QzIvcpLWZ-A",
                    vid6: "https://youtu.be/yhyShg5sf-I",
                }
            },
            {
                cityItemMenuOption: "Grand Teton National Park",
                cityItemCodename: "grand_teton_national_park",
                slideText: `<p>Piękne góry, naprawdę świetne widoki</p><p>Złodziejska cena wstępu (35$), a trzeba przez niego przechechać jadąc do Yellowstone od południa, a wracając nie pobierają opłat. Na pewno zrobili to z premedytacją, bo kiedyś mieli też bilet łączony na oba parki.`,
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 15,
                caption: "Grand Teton National Park",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/jh91KVSvstM",
                    vid2: "https://youtu.be/ZtmS_8_z6Sc",
                    vid3: "https://youtu.be/-R0Jo0ax-4s",
                }
            },
            {
                cityItemMenuOption: 
                {
                    pl: "Yellowstone National Park, dzień 1",
                    en: "Yellowstone National Park, day 1",
                    de: "Yellowstone National Park, Tag 1",
                },
                cityItemCodename: "yellowstone_1",
                slideText: `<p>Trasa: South Entrance > Grant Village > West Thumb > Bridge Bay > Lake Village > Fishing Bridge > East Entrance</p><p>Po drodze zobaczyliśmy Lewis Falls, Lewis Lake, gejzery w West Thumb i jezioro Yellowstone (ogromne!)</p><p>Widzieliśmy też nasze pierwsze bizony</p><p>Pierwsze wrażenia z Yellowstone były raczej kiepskie, biorąc pod uwagę jak niesamowite rzeczy widzieliśmy do tej pory</p>`,
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 34,
                caption: "Pierwszy dzień w Yellowstone",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/7vyxalvZtjY",
                    vid2: "https://youtu.be/CQ5kzTQsAs8",
                    vid3: "https://youtu.be/iJfRayQBXew",
                    vid4: "https://youtu.be/RzCasAsvh1g",
                    vid5: "https://youtu.be/_LeSNMAJiwY",
                    vid6: "https://youtu.be/GpnMjWbO3Mo",
                    vid7: "https://youtu.be/abQ62wPB3Tg",
                }
            },
            {
                cityItemMenuOption: 
                {
                    pl: "Yellowstone National Park, dzień 2",
                    en: "Yellowstone National Park, day 2",
                    de: "Yellowstone National Park, Tag 2",
                },
                cityItemCodename: "yellowstone_2",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 29,
                caption: "Drugi dzień w Yellowstone",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/0dAH0aC2luI",
                    vid2: "https://youtu.be/BBdU-2_VoRk",
                    vid3: "https://youtu.be/_MiE-9S99kE",
                    vid4: "https://youtu.be/GaJzU8m5TJU",
                    vid5: "https://youtu.be/Mk53jcl2LCM",
                    vid6: "https://youtu.be/lSFAA65RTZQ",
                    vid7: "https://youtu.be/ff2PutKVGtw",
                    vid8: "https://youtu.be/ozcn3adr3Jk",
                    vif9: "https://youtu.be/DuecLmWQEnw",
                    vid10: "https://youtu.be/QqHvzCU79MY",
                }
            },
            {
                cityItemMenuOption: 
                {
                    pl: "Yellowstone National Park, dzień 3",
                    en: "Yellowstone National Park, day 3",
                    de: "Yellowstone National Park, Tag 3",
                },
                cityItemCodename: "yellowstone_3",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                imagesNo: 14,
                caption: "Trzeci (i ostatni) dzień w Yellowstone",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/Nb4njcH_mzE",
                    vid2: "https://youtu.be/HWi8hDJyKEI",
                    vid3: "https://youtu.be/wMx4367gaio",
                    vid4: "https://youtu.be/xngGzGYs1es",
                    vid5: "https://youtu.be/twUo4CrIqp4",
                    vid6: "https://youtu.be/UI3pp69rB98",
                    vid7: "https://youtu.be/qlGasF6i5fA",
                    vid8: "https://youtu.be/4YBGsbVeIb8",
                    vid9: "https://youtu.be/21H7z6xDHXQ"
                }
            },
            {
                cityItemMenuOption: "Cody",
                cityItemCodename: "cody_1",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                imagesNo: 0,
                caption: "Cody",
                showVideos: true,
                videos: {
                    vid1: "https://youtu.be/i5TrzS6mLE8",
                    vid2: "https://youtu.be/rGH6jn3DHcE",
                    vid3: "https://youtu.be/98evFsL1yzw",
                    vid4: "https://youtu.be/GTSQY8OUkIY",
                }
            }
        ]
    },
    rock_springs: {        /* CITY 8: ROCK SPRINGS */
        headlineData: ["Rock Springs", "24.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "dyn_ rs option1",
                cityItemCodename: "",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "item1_Caption 1",
                    img2: "item1_Caption 2",
                    img3: "item1_Caption 3",
                    img4: "item1_Caption 4",
                    img5: "item1_Caption 5",
                    img6: "item1_Caption 6",
                }
            },
            {
                cityItemMenuOption: "dyn_ rs option2",
                cityItemCodename: "",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "item2_Caption 1",
                    img2: "item2_Caption 2",
                    img3: "item2_Caption 3",
                    img4: "item2_Caption 4",
                    img5: "item2_Caption 5",
                    img6: "item2_Caption 6",
                }
            },
            {
                cityItemMenuOption: "dyn_ rs option3",
                cityItemCodename: "",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
            }
        ]
    },
    denver2: {        /* CITY 9: DENVER */
        headlineData: ["Denver", "25.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "dyn_ den2 option1",
                cityItemCodename: "",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "item1_Caption 1",
                    img2: "item1_Caption 2",
                    img3: "item1_Caption 3",
                    img4: "item1_Caption 4",
                    img5: "item1_Caption 5",
                    img6: "item1_Caption 6",
                }
            },
            {
                cityItemMenuOption: "dyn_ den2 option2",
                cityItemCodename: "",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "item2_Caption 1",
                    img2: "item2_Caption 2",
                    img3: "item2_Caption 3",
                    img4: "item2_Caption 4",
                    img5: "item2_Caption 5",
                    img6: "item2_Caption 6",
                }
            },
            {
                cityItemMenuOption: "dyn_ den2 option3",
                cityItemCodename: "",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
            }
        ]
    },

}
