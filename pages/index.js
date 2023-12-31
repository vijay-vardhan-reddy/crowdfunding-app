import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
//import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes';

class CampaignIndex extends Component{

    static async getInitialProps(){
      const campaigns= await factory.methods.getDeployedCampaigns().call();
      return {campaigns};

    }

   renderCampaign(){
      const items= this.props.campaigns.map(address =>{
         return{
         header: address,
         description: (<Link route={`campaign/${address}`}>
         <a> View Campaign</a>
         </Link>
         ),
         fluid: true
      };
   });
       
      return <Card.Group items={items}/>; 

      }
      

   
   render(){
      return (
         <Layout>
            
            <div> 
         <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        ></link>
        <h3>Open Campaign</h3>
         
        <Link route='/campaign/createcomtract'>
        <a>
         <Button floated="right"
         content ="Crete Campaign"
         icon="add circle"
         primary
         />
         </a>
         </Link>
          {this.renderCampaign()}
         </div>
         </Layout>
      )
   }
}

export default CampaignIndex;