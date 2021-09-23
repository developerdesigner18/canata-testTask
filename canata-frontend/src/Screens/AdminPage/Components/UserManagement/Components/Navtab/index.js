
import React, { useState, Fragment } from 'react'
import { Tabs } from 'react-simple-tabs-component'
import 'react-simple-tabs-component/dist/index.css' 
import ActiveUser from "./Components/ActiveUser";
import DeactiveUser from "./Components/DeactiveUser";
import UserDetails from './Components/UserDetails';


const TabOne = () => {
    return (
        <Fragment>
            <UserDetails/>
        </Fragment>
        
    )
}

const TabTwo = () => {
    return (
        <Fragment>
          
                <DeactiveUser/>
            
        </Fragment>
        
    )
}

const TabThree = () => {
    return (
        <Fragment>
            <ActiveUser/>
        </Fragment>
        
    )
}


const tabs = [
    {
        label: 'User Management', 
        index: 1,         
        Component: TabOne 
    },
    {
        label: 'Deactive Users',
        index: 2,
        Component: TabTwo
    },
    {
        label: 'Active Users',
        index: 3,
        Component: TabThree
    }
]

function NavTab() {
    const txt = {
        width: "80%"
    }


    const [selectedTab, setSelectedTab] = useState(tabs[0].index)
    return (
        <div className='App' style={txt}>

            <Tabs tabs={tabs} onClick={setSelectedTab} selectedTab={selectedTab} />
        </div>
    )
}
export default NavTab;