//about this project:
// developer : maedeh khosravi
// teacher: MR. khatri
// start date:1402/10/05
// end of the project:1402/10/07
// email:khosraviniamaedeh@gmail.com

// یک فانکشن تعیف کردیم .اگر مقداری ک وارد کردیم با اون مقدارمون یکی بود  خروجی این رو نشون بده و ریترنش کنه
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