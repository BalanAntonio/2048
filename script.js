function passo(direzione) {
    let griglia = document.querySelectorAll("td");
    let uno,due,tre,quattro;
    console.log(direzione);
    switch(direzione){
        case 1:
            uno = 12;
            due = 8;
            tre = 4;
            quattro = 0;
            break;
        case 2:
            uno = 0;
            due = 1;
            tre = 2;
            quattro = 3;
            break;
            
        case 3:
            uno = 0;
            due = 4;
            tre = 8;
            quattro = 12;
            break;
        case 4:
            uno = 3;
            due = 2;
            tre = 1;
            quattro = 0;
            break;
        
            
    }
    if(direzione==1 || direzione==3){
        for(let i = 0; i<4; i++){
            let arr = [parseInt(griglia[uno+i].innerHTML),parseInt(griglia[due+i].innerHTML),parseInt(griglia[tre+i].innerHTML),parseInt(griglia[quattro+i].innerHTML),];
            //console.log(arr);
            let dif = di_fila(arr,0,4);
            while(dif!=-1){
                arr[dif[1]] *= 2;
                arr[dif[0]] = 0;
                dif = di_fila(arr,0,4);
            }
            for(let i = 0;i<4;i++){
                arr = no_zero(arr,1);
            }
            console.log(arr);
            griglia[uno+i].innerHTML = arr[0];
            griglia[due+i].innerHTML = arr[1];
            griglia[tre+i].innerHTML = arr[2];
            griglia[quattro+i].innerHTML = arr[3];
            
        }
    }else{
        for(let i = 0; i<4; i++){
            let arr = [parseInt(griglia[uno+i*4].innerHTML),parseInt(griglia[due+i*4].innerHTML),parseInt(griglia[tre+i*4].innerHTML),parseInt(griglia[quattro+i*4].innerHTML),];
            //console.log(arr);
            let dif = di_fila(arr,0,4);
            while(dif!=-1){
                arr[dif[1]] *= 2;
                arr[dif[0]] = 0;
                dif = di_fila(arr,0,4);
            }
            //arr = no_zero(arr,1);
            for(let i = 0;i<4;i++){
                arr = no_zero(arr,1);
            }
            console.log(arr);
            griglia[uno+i*4].innerHTML = arr[0];
            griglia[due+i*4].innerHTML = arr[1];
            griglia[tre+i*4].innerHTML = arr[2];
            griglia[quattro+i*4].innerHTML = arr[3];
        }
    }
}

//funzione di fila ritorna se ci sono due elementi uguali di fila negli array esclusi 0
function di_fila(arr, inizio, fine) { //nota: fine deve avere +1 perchè sì
    for(let i = inizio;i<fine;i++){
        if(arr[i]!=0){
            let temp = arr[i];
            for(let j = i+1;j<fine;j++){
                if(arr[j]!=0){
                    if(temp==arr[j]){
                        return [i,j];
                    }else{
                        break;
                    }
                }
            }
        }
    }
    return -1;
}

function no_zero(arr,direzione){
    let newArr = arr;
    if(direzione==1){//destra
        for(let i = 3;i>0;i--){
            if(newArr[i]==0){
                newArr[i] = newArr[i-1];
                newArr[i-1] = 0
            }
        }
        return newArr;
    }else{//sinistra
        for(let i = 0;i<3;i++){
            if(newArr[i]==0){
                newArr[i] = newArr[i+1];
                newArr[i+1] = 0;
            }
        }
        return newArr;
    }
}