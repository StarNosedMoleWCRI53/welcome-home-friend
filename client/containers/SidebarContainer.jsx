import React, {useState} from "react";
//import child components/ containers
import CreatePost from "../components/CreatePost.jsx"
import FeaturedPets from "../components/FeaturedPets.jsx"

const SidebarContainer = (props) => {

    return (
        <div className="sidebar-container">
            <CreatePost />
            <FeaturedPets />
        </div>
    )
}

export default SidebarContainer;