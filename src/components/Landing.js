import React from "react"
import Fundraiser from "./Fundraiser/Fundraiser";
import Fundraising from "./Fundraising/Fundraising";
import Layout from "./Layout";
import Starttoday from "./Starttoday/Starttoday";
import Trending from "./Trending/Trending";

const Landing = () => {
    return (
       <div>
         <Layout>
         <Fundraising />
         <Fundraiser />
         <Starttoday />
         <Trending />
         </Layout> 
          
       </div>
    )
}

export default Landing;


