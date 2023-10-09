import css from './register.module.css'

export default function Register() {
    return(
        <div className={css.container}>
            <form>
                <h1>Cadastro View</h1>
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Senha' />
                <input type="text" placeholder='Confirmar senha' />
                <div className={css.button_group}>
                    <button>Cadastrar</button>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    )
}