
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

function calculateBMI(firstPersonName,firstPersonWeight,firstPersonHeight,secondPersonName,secondPersonWeight,secondPersonHeight){
    
    const person1Weight = firstPersonWeight;
    const person1Height = firstPersonHeight;
    const person2Weight = secondPersonWeight;
    const person2Height = secondPersonHeight;

    const person1BMI = person1Weight/(person1Height ** 2);
    console.log(`The BMI of ${firstPersonName} is ${person1BMI}`);

    const person2BMI = person2Weight/(person2Height * person2Height);
    console.log(`The BMI of ${secondPersonName} is ${person2BMI}`);

    if(person1BMI>person2BMI){
        console.log(`${firstPersonName} has higher BMI`);
    }else{
        console.log(`${secondPersonName} has higher BMI`);
    }

}



//Que1 solution
calculateBMI('Mark',78,1.69,'John',92,1.95);

//Que2 solution
calculateBMI('Mark',95,1.88,'John',85,1.76);

