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

const Home = () => {
  return (
    <section className='home'>
        <div className='banner'></div>

        <Row title={"Popular On Netflix"}/>
        <Row title={"Recently Viewed"}/>
        <Row title={"New Releases"}/>
        <Row title={"My List"}/>
        <Row title={"TV Shows Based On Real Life"}/>
    </section>
    )
}

export default Home
