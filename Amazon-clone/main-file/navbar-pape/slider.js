var count=0;  //1111
main(count);
function left(){
   count =count - 1;
    main(count);
}

function right(){
    count =count + 1;
    main(count);
}

function main(totalNo){
    let total = document.getElementsByClassName('total-images');
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




// <-----------------------small-images slider------------------->

var count1=0;  //1111
main1(count1);
function leftone(){
   count1 =count1 - 1;
    main1(count1);
}

function rightone(){
    count1 =count1 + 1;
    main1(count1);
}

function main1(noos){
    let total1 = document.getElementsByClassName('small-images');
    // console.log(total.length)
    // console.log(totalNo);

    if (noos >= total1.length)    {
            noos = 0;
            count = 0;
    }
    if (noos < 0) {
            noos = total1.length - 1;
            count = total1.length - 1;
    }
        for (let i = 0; i < total1.length; i++) {
            total1[i].style.display = "none";
        }
        total1[noos].style.display = "block";     
}




// var count=0;  //1111
// main(count);
// function leftone(){
//    count =count - 1;
//     main(count);
// }

// function rightone(){
//     count =count + 1;
//     main(count);
// }

// function main(totalNo){
//     let total = document.getElementsByClassName('big-images');
//     // console.log(total.length)
//     // console.log(totalNo);

//     if (totalNo >= total.length)    {
//             totalNo = 0;
//             count = 0;
//     }
//     if (totalNo < 0) {
//             totalNo = total.length - 1;
//             count = total.length - 1;
//     }
//         for (let i = 0; i < total.length; i++) {
//             total[i].style.display = "none";
//         }
//         total[totalNo].style.display = "block";     
// }