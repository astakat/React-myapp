import React from "react";
import ListItem from './ListItem'

class List extends React.Component {
    render(){
        return(
            <div>
                <ListItem name="Thee"/>
                <ListItem name="Soep"/>
                <ListItem name="Brood"/>
            </div>
        )
        
    }
}

export default List;