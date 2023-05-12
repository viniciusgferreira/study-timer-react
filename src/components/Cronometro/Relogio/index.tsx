import React from "react";
import style from './Relogio.module.scss'
import { segundosParaTempo } from "../../../common/utils/time";

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    const [, minutes, seconds] = segundosParaTempo(tempo)

    const [minutosDezena, minutosUnidade] = minutes.toString().padStart(2, '0')
    const [segundosDezena, segundosUnidade] = seconds.toString().padStart(2, '0')
    return (
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezena}</span>
            <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}