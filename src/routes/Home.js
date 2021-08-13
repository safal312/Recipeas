import React from 'react'
import { Navbar } from '../components/Navbar'
import { Search } from '../components/Search'

export const Home = () => {
    return (
        <div>
            <Navbar homePage={true} />
            <Search />
        </div>
    )
}
