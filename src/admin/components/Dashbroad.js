import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './sidebar/sidebar'
import Topbar from './topbar/topbar'
// import Home from '../../pages/home/home'
import BodySibar from './bodySibar/bodySibar';
import './sidebar/sidebar.css';
import "./Dashbroad.css"
import {useSelector} from 'react-redux'

function Dashbroad() {
    const isLogin= useSelector(state=>state.auth.isLogin)
    const role =useSelector(state=>state.auth.role)

    return (
        <>
       {
           isLogin && role==='admin'?(
            <>
            <div>
                <Topbar />
                <div className='containerDashbroad'>
                    <Sidebar />
                    <BodySibar />
                </div>
             
            </div>
            </>
           
           ):'vui lòng dang nhap'
       }
       </>
     )
}
export default Dashbroad;