import React from 'react'
import Rating from './Rating'

const ratings = [
  {
    id: 1,
    category: 'Reviews',
    stars: ['🌟', '🌟', '🌟', '🌟', '🌟']
  },
  {
    id: 2,
    category: 'Report Guru',
    stars: ['🌟', '🌟', '🌟', '🌟', '🌟']
  },
  {
    id: 3,
    category: 'BestTech',
    stars: ['🌟', '🌟', '🌟', '🌟', '🌟']
  }
]

export default function Ratings() {
  return (
    <div>
      {ratings.map((rating) => (
        <div key={rating.id} className={`mt-4 mleft-${rating.id}`}>
          <Rating category={rating.category} stars={rating.stars} />
        </div>
      ))}
    </div>
  )
}
