import React from 'react'

const Header = () => {
  return (
    <header className='w-4/5 p-6 my-10 border-3 bg-primary rounded-4xl sticky top-10	mx-auto max-w-screen-lg	'>
    <nav className='flex justify-between'>
      <div><p>AndresGuerra</p></div>
      <ul className='flex items-center justify-around w-6/12	'>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Faqs</li>
        <li className='bg-secondary py-2 px-10 rounded-full'>Contact</li>
      </ul>
    </nav>
    </header>
  )
}

export default Header