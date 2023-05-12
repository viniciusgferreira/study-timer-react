export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}

export function segundosParaTempo(tempo: number) {
    const hours = tempo / 3600
    const minutes = (tempo % 3600) / 60
    const seconds = ((tempo % 3600) % 60)

    return [Math.floor(hours), Math.floor(minutes), seconds]
}
