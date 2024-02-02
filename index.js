
let xpVida = 10000
let heroi = ("Diogo")

if(xpVida <=2000){
	console.log("O heroi de nome " + heroi +" é Nivel bronze")
    }

else if (xpVida>=2001 && xpVida <= 5000){
   console.log("O heroi de nome " + heroi +" é Nivel Prata")
}

else if (xpVida >=5001 && xpVida <= 7000){
   console.log("O heroi de nome  é Nivel Ouro")
}

else if (xpVida>=7001 && xpVida<= 9000 ){
   console.log("O heroi de nome " + heroi +" é Nivel Platina")
}

else if (xpVida>=9001 && xpVida <=10000 ){
   console.log("O heroi de nome " + heroi +" é Nivel Imortal")
}

else{

   console.log("Pontuação invalida")
}