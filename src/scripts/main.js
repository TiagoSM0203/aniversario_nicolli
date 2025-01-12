AOS.init()

const dataDoNiver = new Date('Feb 07, 2025 00:00:00')
const timeStapmDoNiver = dataDoNiver.getTime()

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteONiver = timeStapmDoNiver - timeStampAtual

    const diasEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMS = 1000 * 60
    
    const diasAteONiver = Math.floor(distanciaAteONiver / diasEmMs)
    const horasAteONiver = Math.floor((distanciaAteONiver % diasAteONiver) / horaEmMs)
    const minutosAteONiver = Math.floor((distanciaAteONiver % horaEmMs) / minutoEmMS)
    const segundosAteONiver = Math.floor((distanciaAteONiver % minutoEmMS) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteONiver}d ${horasAteONiver}h ${minutosAteONiver}m ${segundosAteONiver}s`

    if (distanciaAteONiver < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Chegou a hora!'
    }
})