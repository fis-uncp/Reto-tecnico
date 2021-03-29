// import { Action } from "@ngrx/store";
import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    id: uuidv4(),
    name: "Shalom Salazar",
    image: "/assets/images/imagen1.jpg",
    mail: "shalom_98@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Johson Armando",
    image: "/assets/images/imagen2.jpg",
    mail: "johson.sistemas@outlook.com"
  },
  {
    id: uuidv4(),
    name: "Royer Victor Ibarra",
    image: "/assets/images/imagen3.jpg",
    mail: "royer_28@hotmail.com"
  },
  {
    id: uuidv4(),
    name: "Joel Fernando Machuca",
    image: "/assets/images/imagen4.jpg",
    mail: "jr_fernando@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Luz Mirian Peralta",
    image: "/assets/images/imagen5.jpg",
    mail: "lucesita_15@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Jhani Lu Rodriguez",
    image: "/assets/images/imagen6.jpg",
    mail: "jhani.lu@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Emerson Fernandez Joñoroco",
    image: "/assets/images/imagen7.jpg",
    mail: "emerson_815@hotmail.com"
  },
  {
    id: uuidv4(),
    name: "Jose Antonio Rosales",
    image: "/assets/images/imagen8.jpg",
    mail: "antonio22@hotmail.com"
  },
  {
    id: uuidv4(),
    name: "Eduardo Rosadio",
    image: "/assets/images/imagen9.jpg",
    mail: "eduardo-98@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Saul Fernandez",
    image: "/assets/images/imagen10.jpg",
    mail: "saul963@outlook.com"
  },
  {
    id: uuidv4(),
    name: "Katy Huaricallo Mulato",
    image: "/assets/images/imagen11.jpg",
    mail: "katy98.rk@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Gustavo Gonzales Vasquez",
    image: "/assets/images/imagen12.jpg",
    mail: "gustavito_18@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Fortunata Diaz Huaman",
    image: "/assets/images/imagen13.jpg",
    mail: "fortu.life@outlook.com"
  },
  {
    id: uuidv4(),
    name: "Kevin Arauco Canchumani",
    image: "/assets/images/imagen14.jpg",
    mail: "kevi.life@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Ester Carhuamanca Chancasanampa",
    image: "/assets/images/imagen15.jpg",
    mail: "estrellita_10@gmail.com"
  },
  {
    id: uuidv4(),
    name: "Miguel Ramos Felices",
    image: "/assets/images/imagen16.jpg",
    mail: "miguelon_900@hotmail.com"
  }
]

export function userReducer(state = users, action) {
  const { type } = action;

  switch (type) {

    case 'USERS':
      return {
        ...state,
      }

    default:
      return state;

  }
}
