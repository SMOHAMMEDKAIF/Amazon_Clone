var count=0;  //1111
main(count);
function leftone(){
   count =count - 1;
    main(count);
}

function rightone(){
    count =count + 1;
    main(count);
}

function main(totalNo){
    let total = document.getElementsByClassName('small-images');
    // console.log(total.length)
    // console.log(totalNo);

    if (totalNo >= total.length)    {
            totalNo = 0;
            count = 0;
    }
    if (totalNo < 0) {
            totalNo = total.length - 1;
            count = total.length - 1;
    }
        for (let i = 0; i < total.length; i++) {
            total[i].style.display = "none";
        }
        total[totalNo].style.display = "block";     
}