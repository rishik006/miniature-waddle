function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KCyh-f4Hc/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML = "I can Hear - "+results[0].label
        document.getElementById("result_accuracy").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(3)+"%"
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")"
        document.getElementById("result_accuracy").style.color = "rgb("+r+","+g+","+b+")"

        img=document.getElementById('alien1')
        img1=document.getElementById('alien2')
        img2=document.getElementById('alien3')
        if(results[0].label == "cat"){
            img.src='download.png'
            img1.src='https://purepng.com/public/uploads/large/lion-dop.png'
            img2.src='cat-mute.gif'
        }else if (results[0].label == "lion") {
            img.src='download.png'
            img2.src='https://www.aspca.org/sites/default/files/cat-care_meowing-and-yowling_main-image.jpg'
            img1.src='aslan-roar.gif'
        } else if (results[0].label =="dogs"){
            img.src='barking-dogs-barking.gif'
            img2.src='https://www.aspca.org/sites/default/files/cat-care_meowing-and-yowling_main-image.jpg'
            img1.src='https://purepng.com/public/uploads/large/lion-dop.png'
        }
        

    }

}
