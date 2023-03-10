import { useRouter } from 'next/router'

const menu = {
    tacos: {
      name: "Tacos",
      image: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
      description: "Shell + fillings",
      price: 5.95
    },
    pizza: {
      name: "Pizza",
      image: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
      description: "Crust, sauce, cheese",
      price: 19.95
    },
    sushi: {
      name: "Sushi",
      image: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif",
      description: "Raw fish + rice",
      price: 10.95
    }
  };

export default function MenuItem() {
    const router = useRouter()
    console.log("== router.query:", router.query)
    const item = menu[router.query.item]
    return (
        <h1>Selected menu item: {item && item.name}</h1>
    )
}
