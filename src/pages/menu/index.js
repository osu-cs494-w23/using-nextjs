import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'

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

export default function Menu() {
  const router = useRouter()
  return (
    <Layout>
      <h1>Menu</h1>
      <ul>
        {Object.keys(menu).map(key => (
          <li key={key}>
            <Link href={`${router.asPath}/${key}`}>
              {menu[key].name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
