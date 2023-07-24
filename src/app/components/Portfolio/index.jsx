import React from 'react'
import './styles.css'

const Portfolio = () => {
  return (
    <section className='px-5'>
    <article className='grid grid-cols-2 gap-20 p-14 border-4 border-solid rounded-4xl article-height sticky top-48 z-0 bg-primary'>
      <div>

      <h3>Name of the project</h3>
      <p>Description of the project: "Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Sed tincidunt, ex non suscipit efficitur, 
      lacus elit consectetur massa, quis tincidunt lorem est a turpis. Quisque 
      ut metus nec nisi elementum varius in nec mi. Fusce tristique posuere varius.
      In iaculis metus nec tortor tincidunt, quis rhoncus metus efficitur. Vivamus 
      varius turpis eget quam scelerisque, nec efficitur enim auctor. Nulla facilisi. 
      In hac habitasse platea dictumst. Proin eu vestibulum nisi, at fermentum risus. 
      Vestibulum ac ultrices libero. Cras interdum laoreet massa, et dapibus nunc mollis 
      nec. Suspendisse potenti.</p>
      </div>
      <figure>
        <img src='https://picsum.photos/200/300' alt='project'/>
      </figure>
    </article>
    <article className='grid grid-cols-2 gap-20 p-14 border-4 border-solid rounded-4xl article-height sticky top-48 z-10 bg-primary'>
      <div>

      <h3>Name of the project</h3>
      <p>Description of the project: "Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Sed tincidunt, ex non suscipit efficitur, 
      lacus elit consectetur massa, quis tincidunt lorem est a turpis. Quisque 
      ut metus nec nisi elementum varius in nec mi. Fusce tristique posuere varius.
      In iaculis metus nec tortor tincidunt, quis rhoncus metus efficitur. Vivamus 
      varius turpis eget quam scelerisque, nec efficitur enim auctor. Nulla facilisi. 
      In hac habitasse platea dictumst. Proin eu vestibulum nisi, at fermentum risus. 
      Vestibulum ac ultrices libero. Cras interdum laoreet massa, et dapibus nunc mollis 
      nec. Suspendisse potenti.</p>
      </div>
      <figure>
        <img src='https://picsum.photos/200/300' alt='project'/>
      </figure>
    </article>
    <article className='grid grid-cols-2 gap-20 p-14 border-4 border-solid rounded-4xl article-height mb-10 sticky top-48 z-20 bg-primary'>
      <div>

      <h3>Name of the project</h3>
      <p>Description of the project: "Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Sed tincidunt, ex non suscipit efficitur, 
      lacus elit consectetur massa, quis tincidunt lorem est a turpis. Quisque 
      ut metus nec nisi elementum varius in nec mi. Fusce tristique posuere varius.
      In iaculis metus nec tortor tincidunt, quis rhoncus metus efficitur. Vivamus 
      varius turpis eget quam scelerisque, nec efficitur enim auctor. Nulla facilisi. 
      In hac habitasse platea dictumst. Proin eu vestibulum nisi, at fermentum risus. 
      Vestibulum ac ultrices libero. Cras interdum laoreet massa, et dapibus nunc mollis 
      nec. Suspendisse potenti.</p>
      </div>
      <figure>
        <img src='https://picsum.photos/200/300' alt='project'/>
      </figure>
    </article>
    </section>
  )
}

export default Portfolio