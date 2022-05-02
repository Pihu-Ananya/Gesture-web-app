//https://teachablemachine.withgoogle.com/models/72dqAUnBk/  
function speak (){
    var synth=window.speechSynthesis;
speak_data1="The first prediction is "+Prediction1;
speak_data2="The second pridiction is"+Prediction2;

var Utter =new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(Utter);

}
 
speak()