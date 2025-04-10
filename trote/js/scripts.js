function calcular() {
    //declaração variavel sem tipo
    let soma = 0;
    //Recupera o valor do kit avulso digitado
    let kit = Number(document.getElementById("kit").value);
    //Recupera o valor de lata de suplemento avulso
    let suplemento = Number(document.getElementById("suplemento").value);
    //Recupera o valor de arroz 5kg
    let arroz5KG = Number(document.getElementById("arroz5KG").value);
    //Recupera o valor de arroz 1KG
    let arroz1KG = Number(document.getElementById("arroz1KG").value);
    //Recupera o valor de feijao 2KG
    let feijao2KG = Number(document.getElementById("feijao2KG").value);
    //Recupera o valor de feijao 1KG
    let feijao1KG = Number(document.getElementById("feijao1KG").value);
    //Recupera o valor de macarrao
    let macarrao = Number(document.getElementById("macarrao").value);
    //Recupera o valor do oleo
    let oleo = Number(document.getElementById("oleo").value);
    //Recupera o valor da ação social digitado
    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    //Recupera o valor da homenagem digitado
    let homenagem = Number(document.getElementById("homenagem").value);
    //Recupera o valor do mascote
    let mascote = Number(document.getElementById("mascote").value);
    //Recupera o valor do audiovisual
    let registroAudioVisual = Number(document.getElementById("registroAudioVisual").value);
    //Recupera o valor do atividades recreativas
    let atividadesRecreativas = Number(document.getElementById("atividadesRecreativas").value);
    //Recupera o valor de doação de sangue
    let doacoesDeSangue = Number(document.getElementById("doacoesDeSangue").value);
    //Recupera o valor do litro de leite
    let leite = Number(document.getElementById("leite").value);
        //Recupera a cor da equipe
    let equipe = document.getElementById("equipe").value;
    let pontosKitSupl = 0; // Guarda a pontuação do kit e supl
    if (equipe == "Laranja"){
        // equipe é laranja
        if (kit >= 97 && suplemento >= 49){
            pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);            
        } else if (kit >= 78 && suplemento >= 39){
            pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 && suplemento >= 25){
            pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        }
    }
    else if (equipe == "Preta"){
        // equipe é preta
        if (kit >= 103 && suplemento >= 52){
            pontosKitSupl = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);            
        } else if (kit >= 82 && suplemento >= 42){
            pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if (kit >= 52 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 21 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15);
        }
    }
    else if (equipe == "Roxa"){
        // equipe é roxa
        if (kit >= 102 && suplemento >= 51){
            pontosKitSupl = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);            
        } else if (kit >=82 && suplemento >= 41){
            pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento -41) * 15);
        } else if (kit >= 51 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 20 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15);
        }
    }
    else if (equipe == "Verde"){
        // equipe é verde
        if (kit >= 88 && suplemento >= 44){
            pontosKitSupl = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);            
        } else if (kit >= 70 && suplemento >= 35){
            pontosKitSupl = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if (kit >= 51 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 18 && suplemento >= 9){
            pontosKitSupl = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15);
        }
    } else {
        // equipe é vermelho
        if (kit >= 93 && suplemento >= 47){
            pontosKitSupl = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);            
        } else if (kit >= 74 && suplemento >= 38){
            pontosKitSupl = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if (kit >= 47 && suplemento >= 24){
            pontosKitSupl = 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if (kit >= 19 && suplemento >= 9){
            pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15);
        }
    }

    let pontosDoacaodeSangue = 0;
    if(equipe == "Laranja"){
        if(doacoesDeSangue >= 49){
            pontosDoacaodeSangue = 2500 + ((doacoesDeSangue - 49) * 20);
        } else if(doacoesDeSangue < 49){
                pontosDoacaodeSangue += (doacoesDeSangue * 20);
        }
        
    }

    else if(equipe == "Preta"){
        if(doacoesDeSangue >= 52){
            pontosDoacaodeSangue = 2500 + ((doacoesDeSangue - 52) * 20);
        } else if(doacoesDeSangue < 52){
                pontosDoacaodeSangue += (doacoesDeSangue * 20);
        }
        
    }

    else if(equipe == "Roxa"){
        if(doacoesDeSangue >= 51){
            pontosDoacaodeSangue = 2500 + ((doacoesDeSangue - 51) * 20);
        } else if(doacoesDeSangue < 51){
                pontosDoacaodeSangue += (doacoesDeSangue * 20);
        }
        
    }

    else if(equipe == "Verde"){
        if(doacoesDeSangue >= 44){
            pontosDoacaodeSangue = 2500 + ((doacoesDeSangue - 44) * 20);
        } else if(doacoesDeSangue < 44){
                pontosDoacaodeSangue += (doacoesDeSangue * 20);
        }
        
    } else {
        if(doacoesDeSangue >= 47){
            pontosDoacaodeSangue = 2500 + ((doacoesDeSangue - 47) * 20);
        } else if(doacoesDeSangue < 47){
                pontosDoacaodeSangue += (doacoesDeSangue * 20);
        }
        
    }
    soma = soma + pontosKitSupl + pontosDoacaodeSangue + (arroz5KG * 5) + arroz1KG + (feijao2KG * 2) + feijao1KG+ (macarrao / 2) + oleo + acaoSocial + homenagem + (leite * 2) + mascote + atividadesRecreativas + registroAudioVisual;
    //Devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2);
}