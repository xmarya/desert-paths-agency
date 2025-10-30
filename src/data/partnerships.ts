import ElafGroup from "../UI/PartnersLogo/ElafGroup";
import AlahlamMarine from "../UI/PartnersLogo/AlahlamMarine";
import Almuhaidb from "../UI/PartnersLogo/Almuhaidb";
import Alothman from "../UI/PartnersLogo/Alothman";
import Barira from "../UI/PartnersLogo/Barira";
import CarawanAlfahad from "../UI/PartnersLogo/CarawanAlfahad";
import DammamSheraton from "../UI/PartnersLogo/DammamSheraton";
import FourPoints from "../UI/PartnersLogo/FourPoints";
import Marriott from "../UI/PartnersLogo/Marriott";
import RadissonBlu from "../UI/PartnersLogo/RadissonBlu";
import RoshRayhaan from "../UI/PartnersLogo/RoshRayhaan";
import VittoriPalace from "../UI/PartnersLogo/VittoriPalace";
import Tilal from "../UI/PartnersLogo/Tilal";
type HotelInfo = {
  Logo: React.FC;
  name: { ar: string; en: string };
  website: { ar: string; en: string };
  socialMedia?: {
    instagram?: string;
    twitter?: string;
  };
  location: string;
};
const partnerships = [
  {
    Logo: ElafGroup,
    name: {
      ar: "شركة ايلاف للفنادق المحدودة",
      en: "Elaf's hotel",
    },
    website: {
      ar: "https://www.elafhotels.com/ar",
      en: "https://www.elafhotels.com/",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/elafhotels/",
      twitter: "https://x.com/elafhotels",
    },
    location: "https://maps.app.goo.gl/bjxUfx2fJwMjvwng6",
  },
    {
    Logo: FourPoints,
    name: {
      ar: "فندق فور بوينتس باي شيراتون",
      en: "FOUR POINTS SHERATON HOTEL",
    },
    website: {
      ar: "https://www.marriott.com/ar/hotels/jedfp-four-points-makkah-al-naseem/overview/",
      en: "https://www.marriott.com/en-us/hotels/jedfp-four-points-makkah-al-naseem/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/fourpoints_makkah/",
    },
    location:
      "https://www.google.com/maps?sca_esv=2c59846a60ae5a25&output=search&q=%D9%81%D9%86%D8%AF%D9%82+%D9%81%D9%88%D8%B1+%D8%A8%D9%88%D9%8A%D9%86%D8%AA%D8%B3+%D8%B4%D9%8A%D8%B1%D8%A7%D8%AA%D9%88%D9%86&source=lnms&fbs=AIIjpHy9qrD0z-BhtuLY65pv75jAgwWL4Hxgd9Lz8X9wOEhXAlTtyE0YS3S1gtuCFHFAAuLpH21aMU7euhSa1DEJj-ieDUUaYzG0b6X9ens9RIpPoumVV6IE2zfo4m20qy6Dvc3IUUJIl0cZFm3isk4KV405Wlawusou8BirPOump_xpKyVUlJlTls3u8bh3VQibdhJmw4qBvsIvR0yUtXPuPu2g24EMX-mGPRfyJO6EH-hH5qVjxOS74jwo_gfyspux_gROjMosfNI7YwRfIMYSJOCkOjOIog&entry=mc&ved=1t:200715&ictx=111",
  },
  {
    Logo: AlahlamMarine,
    name: {
      ar: "الأحلام للسياحة البحرية",
      en: "Al-Ahlam Marine",
    },
    website: {
      ar: "https://alahlam.sa/ar/",
      en: "https://alahlam.sa/",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/alahlamtg/",
      twitter: "https://x.com/alahlamtg",
    },
    location: "https://maps.app.goo.gl/jgtmmCNXrLQcLsZQA",
  },
    {
    Logo: Alothman,
    name: {
      ar: "فندق كمبينسكي العثمان",
      en: "Kempinski Al Othman Hotel",
    },
    website: { ar: "https://www.al-othman.com/ar/kempinski-al-othman-hotel", en: "https://www.al-othman.com/en/kempinski-al-othman-hotel" },

    socialMedia: {
      instagram: "https://www.instagram.com/alothman.holding/",
      twitter: "https://x.com/alothmanholding",
    },
    location: "https://maps.app.goo.gl/M3uQx485E66jHjqu5",
  },
  {
    Logo: CarawanAlfahad,
    name: {
      ar: "فندق كروان الفهد",
      en: "Carawan Alfahad",
    },
    website: {
      ar: "https://www.carawan-alfahad.com/",
      en: "https://www.carawan-alfahad.com/",
    },

    socialMedia: {
      twitter: "https://x.com/carawanalfahad",
    },
    location: "https://maps.app.goo.gl/skv32kbM1gx4Yoa3A",
  },
  {
    Logo: Barira,
    name: {
      ar: "مجموعة فنادق بريرا",
      en: "Braira Hotels & Resorts",
    },
    website: {
      ar: "https://www.boudl.com/brand/braira",
      en: "https://www.boudl.com/en/brand/braira",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/braira_hotels/",
      twitter: "https://x.com/brairahotels",
    },
    location: "https://maps.app.goo.gl/h7gzuCvDbAT46uKD6",
  },
    {
    Logo: VittoriPalace,
    name: {
      ar: "فيتوري بالاس",
      en: "VITTORI PALACE HOTEL",
    },
    website: {
      ar: "https://www.vittoripalace.com/ar/",
      en: "https://www.vittoripalace.com/en/",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/vittoripalacesa/#",
      twitter: "",
    },
    location: "https://maps.app.goo.gl/XcaMs2GL7w4gK5gb7",
  },
  {
    Logo: RadissonBlu,
    name: {
      ar: "فندق ومركز مؤتمرات راديسون بلو",
      en: "Radisson Blu Hotel & Convention Center",
    },
    website: {
      ar: "https://www.radissonhotels.com/ar-ae/hotels/radisson-blu-riyadh-minhal",
      en: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-riyadh-minhal",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/RadissonHotels/",
      twitter: "https://x.com/radissonhotels",
    },
    location: "https://maps.app.goo.gl/aH5BZkp7sktTaD67A",
  },
  {
    Logo: Marriott,
    name: {
      ar: "فندق ماريوت الرياض",
      en: "Riyadh Marriott Hotel",
    },
    website: {
      ar: "https://www.marriott.com/ar/hotels/ruhsa-riyadh-marriott-hotel/overview/",
      en: "https://www.marriott.com/en-us/hotels/ruhsa-riyadh-marriott-hotel/overview/",
    },
  location: "https://maps.app.goo.gl/w5HMPfsbd1vGhmT86",
  },
  {
    Logo: DammamSheraton,
    name: {
      ar: "فندق ومركز المؤتمرات شيراتون الدمام",
      en: "sheraton Dammam Hotel & Convention Centre",
    },
    website: {
      ar: "https://www.marriott.com/ar/hotels/dmmsi-sheraton-dammam-hotel-and-convention-centre/overview/",
      en: "https://www.marriott.com/en-us/hotels/dmmsi-sheraton-dammam-hotel-and-convention-centre/overview/",
    },
    socialMedia: {
      instagram: "https://www.instagram.com/SheratonDammam/",
      twitter: "https://x.com/SheratonDammam",
    },
    location: "https://maps.app.goo.gl/sTzE1Y79EptBJSAY9",
  },
  {
    Logo: RoshRayhaan,
    name: {
      ar: "روش ريحان من روتانا",
      en: "ROSH RAYHAAN BY ROTANA",
    },
    website: {
      ar: "https://ar.rotana.com/rayhaanhotelandresorts/kingdomofsaudiarabia/riyadh/roshrayhaanbyrotana",
      en: "https://www.rotana.com/rayhaanhotelandresorts/kingdomofsaudiarabia/riyadh/roshrayhaanbyrotana?gad_source=1&gad_campaignid=22806141986&gbraid=0AAAAADm3o_gzubXC8D6aRxVB6jWz6GNHZ&gclid=EAIaIQobChMI9IOUn6rEkAMVZqn9BR0IcTazEAAYASAAEgJD9_D_BwE&gclsrc=aw.ds",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/Rotana_Hotels/",
      twitter: "https://x.com/Rotana_Hotels",
    },
    location: "https://maps.app.goo.gl/hEDif1xnzJVLmENHA",
  },
  {
    Logo: Almuhaidb,
    name: {
      ar: "المهيدب ريزيدنس",
      en: "AlMuhaidb Residence",
    },
    website: {
      ar: "https://almuhaidb.ewaahotels.com/",
      en: "https://almuhaidb.ewaahotels.com/",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/almuhaidebhotel/?igsh=Z3J1MXlwZ2FmN3V4#",
      twitter: "https://x.com/almuhaidebhotel?s=11",
    },
    location: "https://maps.app.goo.gl/uTKTxAbFVKmE454G9",
  },
  {
    Logo:Tilal,
    name: {
      ar: "فنادق التلال",
      en: "Tilal hotels",
    },
    website: {
      ar: "https://tilalhotels.com/ar/",
      en: "https://tilalhotels.com/",
    },

    socialMedia: {
      instagram: "https://www.instagram.com/tilalriyadh/",
    },
    location: "https://maps.app.goo.gl/ew7mj5mcB8geLnSWA",
  },
] satisfies Array<HotelInfo>;

export default partnerships;
