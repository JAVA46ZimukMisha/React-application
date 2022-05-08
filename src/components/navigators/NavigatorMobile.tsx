import React from 'react';
import { RouteType } from '../../models/RouteType';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link as RouterLink } from 'react-router-dom';
import { Tab } from '@mui/material';
import { color } from '@mui/system';
const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    type Anchor = 'left' ;
        const [state, setState] = React.useState({
          left: false,
        });
        const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    function getTabs(): React.ReactNode {
      return items.map(item => <Tab style={{color: 'white', background: 'blue'}} key={item.path} component={RouterLink} to={item.path} label={item.label} />)
  };
    //TODO
    //write implementation of a Navigator for mobile devices
    //Navigator should be based on Drawer
    
    return <div style={{background: 'blue'}}>
        {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color:'white'}} onClick={toggleDrawer(anchor, true)}>Menu</Button>
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {getTabs()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
}
export default NavigatorMobile;