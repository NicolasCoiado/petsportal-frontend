import 'materialize-css';
import { TextInput, Button, Icon } from 'react-materialize';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './style.css';

function FormPessoa (){
    return(
    <div id="pessoa-areas">
        <form id="pessoa-form-area">
            <TextInput
                id="TextInput-44"
                label="Nome *"
            />
            <TextInput
                email
                id="TextInput-47"
                label="Email *"
                validate
            />
            <TextInput
                id="TextInput-44"
                label="CPF *"
            />
            <TextInput
                id="TextInput-44"
                label="Data de Nascimento *"
            />
            <TextInput
                id="TextInput-50"
                label="Senha *"
                password
            />
            <TextInput
                id="TextInput-50"
                label="Confirme sua senha *"
                password
            />
            <TextInput
                id="TextInput-53"
                label="Endereço *"
            />
            <TextInput
                id="TextInput-53"
                label="Telefone 1 *"
            />
            <TextInput
                id="TextInput-53"
                label="Telefone 2"
            />
            <Button
                node="button"
                type="submit"
                waves="light"
            >
                Enviar
                <Icon left>
                    send
                </Icon>
            </Button>
        </form>
    </div>
    );
}

export default FormPessoa;