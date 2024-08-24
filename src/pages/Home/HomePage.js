import React from 'react'
import { Hero } from './components/Hero'
import { FeatureProducts } from '../../components/FeatureProducts'
import { Testimonial } from './components/Testimonial'
import { Faq } from './components/Faq'
import { useTitle } from '../../hooks/useTitle'

export const HomePage = () => {
  useTitle('Home')
  return (
    <main>
      <Hero />
      <FeatureProducts />
      <Testimonial />
      <Faq />
    </main>
  )
}
