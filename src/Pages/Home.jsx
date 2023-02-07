import React from 'react'
import AboutComp from '../Components/AboutComp/AboutComp'
import Header from '../Components/Header/Header'
import InterestComp from '../Components/InterestComp/InterestComp';
import SkillComp from '../Components/SkiillComp/SkillComp';
import Card from './../Components/Card/Card';

function Home() {
  return (
    <>
    <Header />
    <AboutComp />
    <Card />
    <SkillComp />
    <InterestComp />
    </>
  )
}

export default Home