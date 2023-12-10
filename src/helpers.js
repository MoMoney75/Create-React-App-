const randChoice = function(items){
let choice = Math.floor(Math.random()* items.length)
return items[choice]
}

const remove = function(items,item){
let found = false
 for(let i = 0; i < items.length; i++){
    if(item === items[i]){
        found = true
        return [...items.slice(0,i), ...items.slice(i+1)]
        
    }
 }
 if(!found) {
    return undefined
}
    
}

export {remove, randChoice}
