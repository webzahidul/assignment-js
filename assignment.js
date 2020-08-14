//feetToMile start//

function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}

var dhakaToKhulna = feetToMile(500);
console.log(dhakaToKhulna);

var dhakaToCtg = feetToMile(800);
console.log(dhakaToCtg);

var dhakaToSylhet = feetToMile(600);
console.log(dhakaToSylhet);

//feetToMile end//



//woodCalculator start//


function woodCalculator(chair, table, bed) {

    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBed = bed * 5;
    var totalwood = totalChair + totalTable + totalBed;
    
    return totalwood; 
}
console.log(woodCalculator(6, 3, 4));


//woodCalculator end//

//brickCalculator start//


    function brickCalculator(num){

        for(num = 1; num <= 10; num++){
        var floorBrick = num * 15000; 
        console.log(floorBrick);
        } 
        for(num = 11; num <= 20; num++){
            var floorBrick = num * 12000; 
            console.log(floorBrick);
            } 
            for(num = 21; num <= 100; num++){
                var floorBrick = num * 10000; 
                console.log(floorBrick);
                } 
    }
console.log(brickCalculator());

//brickCalculator end//


    //tinyFriend start//


    function tinyFriend(str_ara) {
        var min = str_ara[0].length;
        str_ara.map(v => min = Math.min(min, v.length));
        result = str_ara.filter(v => v.length == min);
        return result;
    }
    console.log(tinyFriend(['zahidul', 'dipu', 'kanti', 'salim','jamal']))

    //tinyFriend end//