var pageContents = {
    denver1: {      /* CITY 1: DENVER (1) */
        headlineData: ["Denver", "14.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "Lot",
                cityItemCodename: "denver1_arrival",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
            },
            {
                cityItemMenuOption: "Pierwsze wrażenia",
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
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Rocky Mountains National Park",
                    img2: "Rocky Mountains National Park",
                    img3: "Rocky Mountains National Park",
                    img4: "Rocky Mountains National Park",
                    img5: "Rocky Mountains National Park",
                    img6: "Rocky Mountains National Park",
                }
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
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "item1_ Caption Headline 1",
                    img2: "item1_ Caption Headline 2",
                    img3: "item1_ Caption Headline 3",
                    img4: "item1_ Caption Headline 4",
                    img5: "item1_ Caption Headline 5",
                    img6: "item1_ Caption Headline 6",
                    img7: "item1_ Caption Headline 7",
                    img8: "item1_ Caption Headline 8",
                    img9: "item1_ Caption Headline 9",
                    img10: "item1_ Caption Headline 10",
                    img11: "item1_ Caption Headline 11",
                }                
            },
            {
                cityItemMenuOption: "Interstate 70 & Loveland Pass",
                cityItemCodename: "interstate_70",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: true,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Interstate 70 & Loveland Pass",
                    img2: "Interstate 70 & Loveland Pass",
                    img3: "Interstate 70 & Loveland Pass",
                    img4: "Interstate 70 & Loveland Pass",
                    img5: "Interstate 70 & Loveland Pass",
                    img6: "Interstate 70 & Loveland Pass",
                    img7: "Interstate 70 & Loveland Pass",
                    img8: "Interstate 70 & Loveland Pass",
                    img9: "Interstate 70 & Loveland Pass",
                    img10: "Interstate 70 & Loveland Pass",
                    img11: "Interstate 70 & Loveland Pass",
                    img12: "Interstate 70 & Loveland Pass",
                },
                videos: {
                    vid1: "https://youtu.be/9w6fi_abVs4",
                    vid2: "https://youtu.be/hYkps22-R4g",
                    vid3: "https://youtu.be/Lj3pR2MusVI",
                }
            },
            {
                cityItemMenuOption: "Great Junction",
                cityItemCodename: "great_junction",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Great Junction",
                    img2: "Great Junction",
                    img3: "Great Junction",
                    img4: "Great Junction",
                    img5: "Great Junction",
                    img6: "Great Junction",
                }
            },
            {
                cityItemMenuOption: "Colorado National Monument",
                cityItemCodename: "colorado_national_monument",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "item2_Caption 1",
                    img2: "item2_Caption 2",
                    img3: "item2_Caption 3",
                    img4: "item2_Caption 4",
                    img5: "item2_Caption 5",
                    img6: "item2_Caption 6",
                }
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
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Red Canyon",
                    img2: "Red Canyon",
                    img3: "Red Canyon",
                    img4: "Red Canyon",
                    img5: "Red Canyon",
                    img6: "Red Canyon",
                    img7: "Red Canyon",
                }
            },
            {
                cityItemMenuOption: "Bryce National Park",
                cityItemCodename: "bryce_national_park",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: false,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Bryce National Park",
                    img2: "Bryce National Park",
                    img3: "Bryce National Park",
                    img4: "Bryce National Park",
                    img5: "Bryce National Park",
                    img6: "Bryce National Park",
                    img7: "Bryce National Park",
                    img8: "Bryce National Park",
                    img9: "Bryce National Park",
                    img10: "Bryce National Park",
                    img11: "Bryce National Park",
                    img12: "Bryce National Park",
                    img13: "Bryce National Park",
                    img14: "Bryce National Park",
                    img15: "Bryce National Park",
                    img16: "Bryce National Park",
                    img17: "Bryce National Park",
                    img18: "Bryce National Park",
                    img19: "Bryce National Park",
                    img20: "Bryce National Park",
                    img21: "Bryce National Park",
                }
            },
            {
                cityItemMenuOption: "Kanab",
                cityItemCodename: "kanab",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: `<p>Miasteczko w mocno westernowym stylu, nakręcono w nim zresztą wiele westernów. Na początku kariery grywał w nich również Jack Nicholson.</p><p>Nocowaliśmy w Bunkhouse Hostel, ale raczej tego miejsca nie polecamy: <ul><li>zero prywatności</li><li>restrykcyjne zasady (pracują z młodzieżą, więc jakikolwiek alkohol czy cokolwiek "niestosownego" jest zabronione</li><li>wszędzie pełno rozwydrzonych i rozwrzeszczanych dzieciaków, w tym rodziny właścicieli tego przybytku</li><li>beznadziejne śniadania, nawet jak na amerykańskie standardy</li></ul></p><p>Obiad jedliśmy w Rocking V Cafe, i o ile jedzenie było smaczne, to ponieważ lokal należał do kategorii "fine dining" (restauracje, a nie bary), to bardzo się cenili. Ogólnie raczej nie warto, tym bardziej, że na drugi dzień odkryliśmy Wild Thyme Cafe, które było już ZNACZNIE lepsze - smaczniejsze i przynajmniej o połowę droższe, a jednocześnie bezpretensjonalne.</p>`
            },
            {
                cityItemMenuOption: "Grand Canyon – North Rim",
                cityItemCodename: "grand_canyon_north_rim",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                showVideos: true,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Grand Canyon – North Rim",
                    img2: "Grand Canyon – North Rim",
                    img3: "Grand Canyon – North Rim",
                    img4: "Grand Canyon – North Rim",
                    img5: "Grand Canyon – North Rim",
                    img6: "Grand Canyon – North Rim",
                    img7: "Grand Canyon – North Rim",
                    img8: "Grand Canyon – North Rim",
                    img9: "Grand Canyon – North Rim",
                    img10: "Grand Canyon – North Rim",
                    img11: "Grand Canyon – North Rim",
                    img12: "Grand Canyon – North Rim",
                    img13: "Grand Canyon – North Rim",
                    img14: "Grand Canyon – North Rim",
                    img15: "Grand Canyon – North Rim",
                    img16: "Grand Canyon – North Rim",
                    img17: "Grand Canyon – North Rim",
                    img18: "Grand Canyon – North Rim",
                    img19: "Grand Canyon – North Rim",
                    img20: "Grand Canyon – North Rim",
                    img21: "Grand Canyon – North Rim",
                    img22: "Grand Canyon – North Rim",
                    img23: "Grand Canyon – North Rim",
                    img24: "Grand Canyon – North Rim",
                    img25: "Grand Canyon – North Rim",
                    img26: "Grand Canyon – North Rim",
                    img27: "Grand Canyon – North Rim",
                    img28: "Grand Canyon – North Rim",
                    img29: "Grand Canyon – North Rim",
                    img30: "Grand Canyon – North Rim",
                    img31: "Grand Canyon – North Rim",
                    img32: "Grand Canyon – North Rim",
                    img33: "Grand Canyon – North Rim",
                    img34: "Grand Canyon – North Rim",
                    img35: "Grand Canyon – North Rim",
                    img36: "Grand Canyon – North Rim",
                    img37: "Grand Canyon – North Rim",
                    img38: "Grand Canyon – North Rim",
                },
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
                showVideos: true,
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Pink Coral Sand Dunes State Park",
                    img2: "Pink Coral Sand Dunes State Park",
                    img3: "Pink Coral Sand Dunes State Park",
                    img4: "Pink Coral Sand Dunes State Park",
                    img5: "Pink Coral Sand Dunes State Park",
                    img6: "Pink Coral Sand Dunes State Park",
                    img7: "Pink Coral Sand Dunes State Park",
                },
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
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Utah Lake State Park (Komarowo)",
                    img2: "Utah Lake State Park (Komarowo)",
                    img3: "Utah Lake State Park (Komarowo)",
                    img4: "Utah Lake State Park (Komarowo)",
                    img5: "Utah Lake State Park (Komarowo)",
                    img6: "Utah Lake State Park (Komarowo)",
                }
            },
            {
                cityItemMenuOption: "Bridal Veil Falls",
                cityItemCodename: "bridal_veil_falls",
                showGallery: true,  /* decides whether to display the gallery for the city item */
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Bridal Veil Falls",
                    img2: "Bridal Veil Falls",
                    img3: "Bridal Veil Falls",
                    img4: "Bridal Veil Falls",
                    img5: "Bridal Veil Falls",
                    img6: "Bridal Veil Falls",
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
                images: {   /* controls the number of images passed to the gallery and determines their captions */
                    img1: "Fremont Lake",
                    img2: "Fremont Lake",
                    img3: "Fremont Lake",
                    img4: "Fremont Lake",
                    img5: "Fremont Lake",
                    img6: "Fremont Lake",
                }
            },
            {
                cityItemMenuOption: "dyn_ pin option3",
                cityItemCodename: "",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
            }
        ]
    },
    cody: {        /* CITY 7: CODY */
        headlineData: ["Cody", "21-23.06.2019"],
        cityItems: [
            {
                cityItemMenuOption: "Cody",
                cityItemCodename: "cody",
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
                cityItemMenuOption: "dyn_ cody option2",
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
                cityItemMenuOption: "dyn_ cody option3",
                cityItemCodename: "",
                showGallery: false,  /* decides whether to display the gallery for the city item */
                contentText: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
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
