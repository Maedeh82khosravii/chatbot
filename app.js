//about this project:
// developer : maedeh khosravi
// teacher: MR. khatri
// start date:1402/10/08
// end of the project:1402/10/11
// email:khosraviniamaedeh@gmail.com



// 1- function ra barai daruaft vorodi az karbar tarif maikonim
function getMessage(){
    // vorodi ra az karbar grefte va an ra retern kon
            return input= prompt("درخدمتم خخخ")
    }
    // 2- function ra az vorodi grefte va an ra pardazesh konad
    function processMessage(input){
    
    // 3- agar vorodi k az karbar grefte in kalame ra dashte bashad in khoroji ra neshon bede
        if (input.includes ("سلام")){
    
            document.write ("سلام عزیزم ")
        }
    
        else if (input.includes("خوبی")){
    
            document.write ("نه تو خوبی فقط")
        }
    
    
        if (input.includes ("اسمت چیه؟"))
        {
            document.write (" نمیدونم ولی خیلیا صدام میزنن ربات نمیدونم چرا  ")
        }
    
        if (input.includes ("چندسالته"))
        {
    
            document.write ("خیلی وقته دنیا اومدم   ")
        }
    
    }
    getMessage()
    processMessage(input)