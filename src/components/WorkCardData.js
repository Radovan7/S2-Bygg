import Images from "../assets/ImageMap";

const WorkCardData = [
  {
    imgsrc: Images.pro1,
    title: "BADRUMSRENOVERING",
    text: "Vi hjälper dig med allt från idé och planering till VVS-installationer",
    width: "600",
    height: "480",
    alt: "Badrumsrenovering av S2 Bygg AB",
    loading: "lazy",
    id: "badrum",
    detailImages: Images.bath,
  },
  {
    imgsrc: Images.pro2,
    title: "KÖKSRENOVERING",
    text: "Med oss får du en pålitlig partner som bygger ditt kök från grund till klart",
    width: "600",
    height: "480",
    alt: "Köksrenovering av S2 Bygg AB",
    loading: "lazy",
    id: "kok",
    detailImages: Images.kitchen,
  },
  {
    imgsrc: Images.pro3,
    title: "TOTALRENOVERING",
    text: "S2-Bygg sköter om hela din renovering, från start till slutförande",
    width: "600",
    height: "480",
    alt: "Totalrenovering av S2 Bygg AB",
    loading: "lazy",
    id: "renovering",
    detailImages: Images.renovation,
  },
];

export default WorkCardData;