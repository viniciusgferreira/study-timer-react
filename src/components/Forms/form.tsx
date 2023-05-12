import React, { useState } from "react";
import Botao from "../Button";
import style from './Form.module.scss'
import { Tarefa } from "../../types/Tarefa";
import { v4 as uuid } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00')

    function addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas((tarefasAntigas) => [
            ...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuid()
            }
        ]
        );
        setTarefa(tarefa)
        setTempo(tempo)
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicionar um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={(evento) => setTarefa(evento.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={(evento) => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="10:30:00"
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}
