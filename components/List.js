import React from 'react'

function List({people}) {
  return (
    <div>
      {people.map((person)=>{
        const {id,name,age,image}=person
        return (
          <article key={id} className='person flex items-center p-2 space-x-3'>
            <img className='h-16 w-14 rounded-full' src={image} alt="" />
            <div>
              <h4 className='font-bold'>{name}</h4>
              <p className='text-gray-400'>{age} years</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List