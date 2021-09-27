import 'materialize-css';
import { Chip, Icon } from 'react-materialize';
import './style.css';

function Filter (){
    return(
        <div id="filters-area">
            <h1 id="filters-title">Filtros:</h1>
            <Chip
                close
                closeIcon={<Icon className="close">close</Icon>}
                options={null}
                className="chip"
            >
                Cãos
            </Chip>
            <Chip
                close
                closeIcon={<Icon className="close">close</Icon>}
                options={null}
                className="chip"
            >
                Gatos
            </Chip>
            <Chip
                close
                closeIcon={<Icon className="close">close</Icon>}
                options={null}
                className="chip"
            >
                Pequenos
            </Chip>
            <Chip
                close
                closeIcon={<Icon className="close">close</Icon>}
                options={null}
                className="chip"
            >
                Grandes
            </Chip>
            <Chip
                close
                closeIcon={<Icon className="close">close</Icon>}
                options={null}
                className="chip"
            >
                Preto
            </Chip>
            <Chip
                close
                closeIcon={<Icon className="close">close</Icon>}
                options={null}
                className="chip"
            >
                Símio
            </Chip>
        </div>
    );
}

export default Filter;