import fireboll from "../images/fireboll.png"
import flash from "../images/flash.jpg"
import heal from "../images/hial.jpg"
import shadow from "../images/shadow.jpg"
import invisible from "../images/invisible.png"
import Reactimg from "../images/reactlogo.png"

const magic = [
    {heading: "Magic", 
    title: "Огненый шар", 
    description: "пррочитав заклинание выпускает из своей руки сгусток пламени сжигающий объект в который он попал.",
    image: fireboll
},
    {heading: "Magic",
    title: "Разряд молний",
    description: "выпускает разряд молнии мгновенно поражающий цель и нейтрализуя её.",
    image: flash
},
    {heading: "Magic",
    title: "Исцеление", 
    description: "Постепенно исцеляет цель от болезней и ран.",
    image: heal
},
    {heading: "Magic", 
    title: "Теневой шаг", 
    description: "После прочтения заклинания шаги персонажа не издают шума и не оставляют зримых следов.",
    image: shadow
},
    {heading: "Magic", 
    title: "Сокрытие Объектов",
    description: "Накладывает заклинание на объект после чего он становится не видимым для чужих глаз.",
    image: invisible
},
    {heading: "Magic", 
    title: "ReactDeсomposition", 
    description: "Щелчком пальцев создаёт веб-приложение заказчика со овсеми его фичами.",
    image: Reactimg
}
];

export default magic;