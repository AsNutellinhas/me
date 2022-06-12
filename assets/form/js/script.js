$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_email');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '+5511996813911',
    walink2 = 'Olá!',
    text_yes = 'Você foi redirecionado para o WhatsApp. Obrigado!',
    text_no = 'Preencha o formulário, por favor!';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_name2 = $("#wa_surname").val(),
    input_email1 = $("#wa_email").val(),
    input_number1 = $("#wa_number").val(),
    input_url1 = $("#wa_url").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Nome*: ' + input_name1 + '%0A' +
    /*'*Sobrenome*: ' + input_name2 + '%0A' +
    '*Idade*: ' + input_number1 + '%0A' +*/
    '*E-mail*: ' + input_email1 + '%0A' +
    '*Soube por*: ' + input_select1 + '%0A' +
    '*URL/Link*: ' + input_url1 + '%0A' +
    '*Mensagem*: ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class=" myAlert-bottom alert alert-success">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class=" myAlert-bottom alert alert-danger">'+text_no+'</span>';
}
});