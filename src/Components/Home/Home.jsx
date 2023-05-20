import React from 'react'
import "./Home.scss"
import inception from '../images/inception.jpg'
import blackPanther from '../images/blackPanther.jpeg'
import wood from '../images/wood.webp'
import cover from '../images/cover.jpg'
import after from '../images/after.jpg'
import potter from '../images/potter.jpeg'
import avatar from '../images/avatar.jpg'
import avengers from '../images/avengers.webp'
import thor from '../images/thor.webp'
import blackwidow from '../images/blackwidow.jpeg'
import smile from '../images/smile.jpeg'
import family from '../images/family.webp'
import jumanji from '../images/jumanji.jpeg'
import beautyandbeast from '../images/beautyandbeast.jpeg'
import master from '../images/master.jpg'
import rrr from '../images/rrr.jpg'
import bhai from '../images/bhai.jpeg'
import tujhoothi from '../images/tujhoothi.jpeg'
import loveagain from '../images/loveagain.jpeg'
import brahmastra from '../images/brahmastra.jpg'
import chupa from '../images/chupa.jpeg'
import jungle from '../images/jungle.jpeg'
import Gehraiyaan from '../images/Gehraiyaan.webp'
import salar from '../images/salar.jpg'
import pathaan from '../images/pathaan.jpeg'
import jabwemet from '../images/jabwemet.jpg'
import connection from '../images/connection.jpg'
import kites from '../images/kites.jpg'
import ashiqui from '../images/ashiqui.jpeg'
import crook from '../images/crook.jpg'
import kick from '../images/kick.jpg'
import aftereverhappy from '../images/aftereverhappy.jpg'
import spartacus from '../images/spartacus.jpeg'
import spy from '../images/spy.jpg'
import see from '../images/see.jpeg'
import friends from '../images/friends.jpeg'
import vampire from '../images/vampire.jpg'
import originals from '../images/originals.jpg'
import sheldon from '../images/sheldon.jpg'
import bigbangtheory from '../images/bigbangtheory.jpeg'





const Card = ({img}) => (
    <img className = 'card' src={img} alt="cover" />
)

const Row = ({title}) =>(
    <div className ='row'>
        <h2>{title}</h2>
        <div>
            <Card img = {blackPanther}/>
            <Card img = {avatar}/>
            <Card img = {blackPanther}/>
            <Card img = {inception}/>
            <Card img = {wood}/>
            <Card img = {cover}/>
            <Card img = {after}/>
            <Card img = {potter}/>
            <Card img = {avengers}/>
            
        </div>

    </div>
)

const Car = ({img}) => (
    <img className = 'car' src={img} alt="cover" />)

    const Rowe = ({}) => (
       
        <div className='rowe'>
            <h2>
                Recently Viewed
            </h2>
            <div>
            <Car img={thor}/>
            <Car img={blackwidow}/>
            <Car img={smile}/>
            <Car img={family}/>
            <Car img={jumanji}/>
            <Car img={beautyandbeast}/>
            <Car img={master}/>
            </div>
            
        </div>
)


const Ca = ({img}) => (
    <img className = 'ca' src={img} alt="cover" />)

    const Rowee = ({}) => (
       
        <div className='rowee'>
            <h2>
                New Releases
            </h2>
            <div>
            <Ca img={rrr}/>
            <Ca img={bhai}/>
            <Ca img={tujhoothi}/>
            <Ca img={rrr}/>
            <Ca img={loveagain}/>
            <Ca img={salar}/>
            <Ca img={chupa}/>
            <Ca img={jungle}/>
            <Ca img={Gehraiyaan}/>
         
            </div>
            
        </div>
)

const Ba = ({img}) => (
    <img className = 'ba' src={img} alt="cover" />)

    const Roweee = ({}) => (
       
        <div className='roweee'>
            <h2>
                My List 
            </h2>
            <div>
            <Ba img={pathaan}/>
            <Ba img={aftereverhappy}/>
            <Ba img={kick}/>
            <Ba img={pathaan}/>
            <Ba img={jabwemet}/>
            <Ba img={connection}/>
            <Ba img={kites}/>
            <Ba img={ashiqui}/>
            <Ba img={crook}/>
         
            </div>
            
        </div>
)

const Bar = ({img}) => (
    <img className = 'bar' src={img} alt="cover" />)

    const Roweeee = ({}) => (
       
        <div className='roweeee'>
            <h2>
                TV Shows Based On Real Life
            </h2>
            <div>
            <Bar img={pathaan}/>
            <Bar img={spartacus}/>
            <Bar img={spy}/>
            <Bar img={see}/>
            <Bar img={friends}/>
            <Bar img={vampire}/>
            <Bar img={originals}/>
            <Bar img={sheldon}/>
            <Bar img={bigbangtheory}/>
         
            </div>
            
        </div>
)

const Home = () => {
  return (
    <section className='home'>
        <div className='banner'></div>

        <Row title={"Popular On Netflix"}/>
        <Rowe title={"Recently Viewed"}/>
        <Rowee title={"New Releases"}/>
        <Roweee title={"My List"}/>
        <Roweeee title={"TV Shows Based On Real Life"}/>
    </section>
    )
}

export default Home
