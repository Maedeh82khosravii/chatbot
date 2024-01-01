//about this project:
// developer : maedeh khosravi
// teacher: MR. khatri
// start date:1402/10/08
// end of the project:1402/10/11
// email:khosraviniamaedeh@gmail.com


// function tarif kardim . k agar meghdar k vard kardim ba ok bod khoroji ro neshon bede 
function chatrobat(say){
    if (say =="سلام" ||
    say =="hello" ||
     say =="hi"
     ){
    document.write(" سلام عزیزم  . خوبی؟!" );
    return;
}

    else if (say =="مرسی" ||
    say =="mrc" ||
    say =="ای میگذره"
    ){
    document.write("  خداروشکر . خوبه" );
    return;
}
    else if (say =="چندسالته؟"  
    ){
    document.write("نمیدونم خیلی وقته دنیا اومدم" );
    return;
}

    else if (say =="" 
     ){
        document.write(" جانم؟ " );
        return;
}

}
// prompt tarif kardim k btoinm meghdar bedim
chatrobat(prompt("ربات خوش امدگویی "))