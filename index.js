function formatCep(value){
    if(String(value).length < 8){
        return "Erro, cpf inválido!";
    }
    return String(value)
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, "$1-$2");
    
}   


console.log(formatCep(5712000));
 