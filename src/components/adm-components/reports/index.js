import React from "react";
import { Collection, CollectionItem, Modal, Button } from 'react-materialize';

function Reports (){
    return(
        <div className="reqs-component">
            <Collection className="cltn-reqs">
                <CollectionItem className="cltni-reqs">
                    Alvin 
                    <Button
                        node="button"
                        style={{
                        marginRight: '5px'
                        }}
                        waves="light"
                    >
                        button
                    </Button>
                </CollectionItem>
            </Collection>
        </div>
    );
}

export default Reports;