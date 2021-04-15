import React from 'react'
import Description from './components/descrption'
import Services from './components/services'
import Promote from './components/promote'
import Reviews from './components/reviews'

const Trainer: React.FC = () => {

    return (
        <>
        <Description name="" location="" online={true} description="" profileImgUrl="" videoUrl=""></Description>
        <Services services={["Styrke", "Vægttab", "Kostvejledning", "større booty"]} online={false}></Services>
        <Promote></Promote>
        <Reviews></Reviews>
        </>
    )
}

export default Trainer