import 'materialize-css';
import { Chip, Icon } from 'react-materialize';
import './style.css';

function Filter (){
    return(
        <div id="filters-area">
            <h1 id="filters-title">Filtros:</h1>
            <Chip
                close={false}
                closeIcon={<Icon className="close">close</Icon>}
                options={{
                    data: [
                    {
                        tag: 'Apple'
                    },
                    {
                        tag: 'Microsoft'
                    },
                    {
                        tag: 'Google'
                    }
                    ]
                }}
            />
        </div>
    );
}

export default Filter;