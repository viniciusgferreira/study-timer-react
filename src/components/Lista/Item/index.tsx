import { Tarefa } from '../../../types/Tarefa'
import style from './Item.module.scss'

interface Props extends Tarefa {
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} onClick={() => selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            }
        )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li >

    )
}
