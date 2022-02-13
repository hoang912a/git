import React from 'react'
import PropTypes from 'prop-types'
import NavbarPublic from "../navbar/NavbarPublic"
import Banner from './Banner'
import CityIndex from '../city/CityIndex'
import Delivery from "../delivery/Delivery"
import Security from "../security/Security"
import Footer from "../footer/Footer"

const Home = props => {
    return (
        <div>
           

            <NavbarPublic />
            <Banner />
            <CityIndex />

            <Delivery />
            <Footer />
            <Security />
        </div>
    )
}

Home.propTypes = {

}

export default Home