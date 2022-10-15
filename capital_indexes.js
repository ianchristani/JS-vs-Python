console.log('working...');

function capital_indexes(param){
    index_list = [];
    letters_list = param.split('');
    letters_list.forEach(letter=>{
        if(letter == letter.toUpperCase()){
            index_list.push(letters_list.indexOf(letter));
        };
    });
    console.log(index_list);
};

let str = "HeLlO";
capital_indexes(str);

// solucao em python
// nao foi usado o metodo: lista_dada.index(elemento_procurado)
// pq esse metodo nao eh eficiente com strings que possuem letras repetidas
// uma vez que tal metodo retorna sempre a primeira ocorrencia do elemento procurado

/* 

def capital_indexes(param):
    index_list=[]
    count = 0
    for letter in param:
        if letter == letter.upper():
            index_list.append(count)
        count += 1
    return index_list
            
teste = 'HeLlO'
capital_indexes(teste)

*/