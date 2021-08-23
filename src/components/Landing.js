import React from "react"
import Charity from "./Charity/Charity";
import Fundraiser from "./Fundraiser/Fundraiser";
import Fundraising from "./Fundraising/Fundraising";
import Layout from "./Layout";
import Starttoday from "./Starttoday/Starttoday";
import Stories from "./Stories/Stories";
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
         <Stories />
         </Layout> 
          
       </div>
    )
}

export default Landing;


