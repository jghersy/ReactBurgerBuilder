import React from 'react';
import Assist from '../../hoc/Assist';
import Classes from './Layout.css';



const layout = (props) => (
    <Assist>
     <div>Toolbar, Sidedrawer, Backdrop</div>
     <main className={Classes.Content}>
         {props.children}
     </main>
     </Assist>
);

export default layout;  
