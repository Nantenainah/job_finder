import React from 'react'
import Navbar from '../../Fragments/NavigationBarre'
import '../../styles/home.scss'
import { PostesRecruited } from '../../Fragments/Home/PostesRecruits'
import { HomeHeader } from '../../Fragments/Home/Header'

const Home: React.FC = () => {
    return <>
        <Navbar />
        <HomeHeader />
        <PostesRecruited />
    </>
}

export default Home