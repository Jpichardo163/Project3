import React, {Component} from 'react';
import Dropdownfilter from 'react';
import 
{Tabs,
  Tab} from 'react-bootstrap';
 
class Mixedtab extends Component{
  render(){
    return(
      <div className="Mixedtab">
               <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Store Info"> Store Info Content</Tab>
                <Tab eventKey={2} title="Borough Review"> Borough Reviews</Tab>
              </Tabs>
          < Dropdownfilter/>
      </div>
    );
  }
}
export default Mixedtab;