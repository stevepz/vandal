import React from 'react';
import { Link } from 'react-router-dom';
import NightForm from './NightForm';
import Footer from './Footer';



export default function Nightclub() {
  return (
    <div>
      <h2>Nightclub Page</h2>
      <NightForm />
      <Footer />
    </div>
  )

}