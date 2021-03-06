import React from "react"
import Charity from "./Charity/Charity";
import Fundraiser from "./Fundraiser/Fundraiser";
import Fundraising from "./Fundraising/Fundraising";
import Layout from "./Layout";
import Leader from "./Leader/Leader";
import People from "./People/People";
import Starttoday from "./Starttoday/Starttoday";
import Stories from "./Stories/Stories";
import { Storiesimage } from "./Stories/Storiesimage";
import Trending from "./Trending/Trending";

const Landing = () => {
    return (
       <div>
         <Layout>
         <Fundraising />
         <Fundraiser />
         <Starttoday />
         <Trending />
         <Charity />
         <Stories slides={Storiesimage}/>
         <People />
         <Leader />
         </Layout> 
          
       </div>
    )
}

export default Landing;


