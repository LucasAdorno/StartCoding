liItems = document.querySelectorAll('.marcador')

window.onload = () => {$('iframe').attr('src', 'https://www.youtube.com/embed/w2jeYJB4zqA'); $('.download').attr('href', 'documents/StartCod_ng Lista - 01.pdf') }


// for(item of liItems){
//     item.addEventListener('click', ativarMarcador)
// }

function ativarMarcador(liId){
    for(item of liItems){
        $(item).removeClass('marcador-ativo')
    }
    let x = 0
    while (x<=parseInt(liId)) {
        $(liItems[x]).addClass('marcador-ativo')
        x++
    }
    if(liId == 0){$('iframe').attr('src', 'https://www.youtube.com/embed/w2jeYJB4zqA'); $('.download').attr('href', 'documents/StartCod_ng Lista - 01.pdf')}
    if(liId == 1){$('iframe').attr('src', 'https://www.youtube.com/embed/OI2trlIS7Lc'); $('.download').attr('href', 'documents/StartCod_ng Lista - 02.pdf')}
    if(liId == 2){$('iframe').attr('src', 'https://www.youtube.com/embed/hn-SEp-1kQ8'); $('.download').attr('href', 'documents/StartCod_ng Lista - 03.pdf')}
    if(liId == 3){$('iframe').attr('src', 'https://www.youtube.com/embed/M9C3mdIbDLw'); $('.download').attr('href', 'documents/StartCod_ng Lista - 04.pdf')}
    if(liId == 4){$('iframe').attr('src', 'https://www.youtube.com/embed/zvaYDPPKh-Q'); $('.download').attr('href', 'documents/StartCod_ng Lista - 05.pdf')}
}