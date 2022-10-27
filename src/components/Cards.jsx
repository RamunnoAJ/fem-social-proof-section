import React from 'react'
import Card from './Card'

import image1 from '../assets/image-colton.jpg'
import image2 from '../assets/image-irene.jpg'
import image3 from '../assets/image-anne.jpg'

const cards = [
  {
    id: 1,
    image: image1,
    title: 'Colton Smith',
    subtitle: 'Verified Buyer',
    text: '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "'
  },
  {
    id: 2,
    image: image2,
    title: 'Irene Roberts',
    subtitle: 'Verified Buyer',
    text: '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "'
  },
  {
    id: 3,
    image: image3,
    title: 'Anne Wallace',
    subtitle: 'Verified Buyer',
    text: '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone "'
  }
]

export default function Cards() {
  return (
    <div className='min-h-screen w-11/12 mx-auto'>
      <div>
        {cards.map((card) => (
          <div key={card.id} className={`mt-4 mtop-${card.id} `}>
            <Card
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
