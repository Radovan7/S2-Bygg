import pro1 from "../assets/IMG_3521.jpg"
import pro2 from "../assets/IMG_0428.jpg"
import pro3 from "../assets/IMG_5058.JPG"

import bath1 from "../assets/IMG_3521.jpg"
import bath2 from "../assets/IMG_5070.JPG"
import bath3 from "../assets/IMG_5069.JPG"
import bath4 from "../assets/IMG_5073.JPG"
import bath5 from "../assets/IMG_5074.JPG"
import bath6 from "../assets/IMG_2574.jpg"
import kitchen1 from "../assets/IMG_0428.jpg"
import kitchen2 from "../assets/IMG_2573.jpg"
import kitchen3 from "../assets/IMG_5055.JPG"
import kitchen4 from "../assets/IMG_5079.JPG"
import kitchen5 from "../assets/IMG_2574.jpg"
import kitchen6 from "../assets/IMG_2574.jpg"
import reno1 from "../assets/IMG_2460.jpg"
import reno2 from "../assets/IMG_5052.JPG"
import reno3 from "../assets/IMG_5054.JPG"
import reno4 from "../assets/IMG_5053.JPG"
import reno5 from "../assets/IMG_5077.JPG"
import reno6 from "../assets/IMG_2574.jpg"
import reno7 from "../assets/IMG_770.jpg"
import reno8 from "../assets/IMG_771.jpg"
import reno9 from "../assets/IMG_772.jpg"
import reno10 from "../assets/IMG_773.jpg"
import reno11 from "../assets/IMG_774.jpg"
import reno12 from "../assets/IMG_775.jpg"
import reno13 from "../assets/IMG_776.jpg"
import reno14 from "../assets/IMG_777.jpg" 
import reno15 from "../assets/IMG_778.jpg"
import reno16 from "../assets/IMG_779.jpg"
import reno17 from "../assets/IMG_880.jpg"
import reno18 from "../assets/IMG_881.jpg"
import reno19 from "../assets/IMG_882.jpg"


const WorkCardData = [
  {
    imgsrc: pro1,
    title: "BADRUMSRENOVERING",
    text: "Vi hjälper dig med allt från idé och planering till VVS-installationer",
    width: "600",
    height: "480",
    alt: "Badrumsrenovering av S2 Bygg AB",
    loading: "lazy",
    id: "badrum", 
    detailImages: [pro1, bath1, bath2, bath3, bath4, bath5, bath6], 
  },
  {
    imgsrc: pro2,
    title: "KÖKSRENOVERING",
    text: "Med oss får du en pålitlig partner som bygger ditt kök från grund till klart",
    width: "600",
    height: "480",
    alt: "Köksrenovering av S2 Bygg AB",
    loading: "lazy",
    id: "kok",
    detailImages: [pro2, kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6],
  },
  {
    imgsrc: pro3,
    title: "TOTALRENOVERING",
    text: "S2-Bygg sköter om hela din renovering, från start till slutförande",
    width: "600",
    height: "480",
    alt: "Totalrenovering av S2 Bygg AB",
    loading: "lazy",
    id: "renovering",
    detailImages: [pro3, reno1, reno2, reno3, reno4, reno5, reno6, 
      reno7, reno8, reno9, reno10, reno11, reno12, reno13, reno14,
      reno15, reno16, reno17, reno18, reno19],
  }
];

export default WorkCardData;


