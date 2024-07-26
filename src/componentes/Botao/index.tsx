import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children: string | ReactElement
}

const Botao = (props: BotaoProps) => {
    return (<button type='submit' className='botao'>
        {props.children}
    </button>) 
}

export default Botao