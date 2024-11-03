import React from 'react'
import star from '../../img/star.png'
import './CustomersSay.css'

import person1 from '../../img/person1.png'
import person2 from '../../img/person2.png'
import person3 from '../../img/person3.png'
import person4 from '../../img/person4.png'


const Testimonials = ({user}) => {
  return (
    <div className='testimonial-card flex flex-col p-4'>
      <div className='flex stars'>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>

      <div className='testimonial-user flex items-center my-3'>
        <img src={user.image} alt={user.name} className='mr-5' />
        <h2 className='font-bold text-xl'>{user.name}</h2>
      </div>

      <div>
        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </div>
    </div>
  )
}


const CustomersSay = () => {
  const users = [
    {
      name : 'John',
      image: person1
    },
    {
      name : 'Mary',
      image: person2
    },
    {
      name : 'Joanne',
      image: person3
    },
    {
      name : 'Kim',
      image: person4
    },
  ]


  return (
    <section className='testimonials py-4 px-3'>
      <h1 className='font-bold text-4xl text-center'>Testimonials</h1>

      <div className='w-full p-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-center'>
        {users.map((user, index) => {
          return <Testimonials key={index} user={user} />
        })}
      </div>
    </section>
  )
}


export default CustomersSay