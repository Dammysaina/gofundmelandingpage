import React from "react"
import Fundraiser from "./Fundraiser/Fundraiser";
import Fundraising from "./Fundraising/Fundraising";
import Layout from "./Layout";

const Landing = () => {
    return (
       <div>
         <Layout>
         <Fundraising />
         <Fundraiser />
         </Layout> 
          
       </div>
    )
}

export default Landing;


