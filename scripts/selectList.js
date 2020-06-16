liItems = document.querySelectorAll('.marcador')

for(item of liItems){
    item.addEventListener('click', ativarMarcador)
}
console.log(event.target)

function ativarMarcador(){
    for(item of liItems){
        $(item).removeClass('marcador-ativo')
    }
    let x = 0
    while (x<=parseInt(event.target.id)) {
        $(liItems[x]).addClass('marcador-ativo')
        x++
    }
    console.log(event.target.id);
    if(event.target.id == 0){$('iframe').attr('src', 'https://www.youtube.com/embed/w2jeYJB4zqA'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 1){$('iframe').attr('src', 'https://www.youtube.com/embed/OI2trlIS7Lc'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 2){$('iframe').attr('src', 'https://www.youtube.com/embed/hn-SEp-1kQ8'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 3){$('iframe').attr('src', 'https://www.youtube.com/embed/M9C3mdIbDLw'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 4){$('iframe').attr('src', 'https://www.youtube.com/embed/zvaYDPPKh-Q'); $('.download').attr('href', 'origem do download')}
}