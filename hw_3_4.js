


function Park (park_name, total_trees, park_age, park_area){
    this.park_name = park_name;
    this.total_trees = total_trees;
    this.park_age = park_age;
    this.park_area = park_area;

    this.treeDensity = this.total_trees/this.park_area;

    this.treeCount = function(){
        if (this.total_trees >10000){
            console.log(`${this.park_name} has more than 10000 trees`)
        }

    }

    
}


function Street (street_name, street_length){
    this.street_name = street_name;
    this.street_length = street_length;

    this.streetClassification = function(){
        if (this.street_length<=3){
            console.log(`${this.street_name} is tiny`)
        }
        else if (this.street_length>3 && this.street_length<=5){
            console.log(`${this.street_name} is small`)
        }
        else if (this.street_length>7 && this.street_length<=10){
            console.log(`${this.street_name} is big`)
        }
        else if (this.street_length>10){
            console.log(`${this.street_name} is huge`)
        }
        else {
            console.log(`${this.street_name} is normal`)
        }
    }

}



const street1 = new Street( "Davidson_Road", 6)
const street2 = new Street( "Milawakke_Road", 3)
const street3 = new Street( "Busch_Road", 10)
const street4 = new Street( "levinson_Road", 12)






const park1 = new Park('johnson_park',12000,50,2.9);
const park2 = new Park('sandusky',10000,40,1.9);
const park3 = new Park('hillwater',8000,30,1);

console.log(`park1 has a tree density of ${park1.treeDensity},\npark2 has a tree density of ${park2.treeDensity} & \npark3 has a tree density of ${park3.treeDensity}`)

console.log(`Average age of parks ${(park1.park_age+park2.park_age+park3.park_age)/3}`)

park1.treeCount()
park2.treeCount()
park3.treeCount()

console.log(`Total length of streets ${street1.street_length+street2.street_length+street3.street_length+street4.street_length} and average length of streets ${(street1.street_length+street2.street_length+street3.street_length+street4.street_length)/4} `)
street1.streetClassification()
street2.streetClassification()
street3.streetClassification()
street4.streetClassification()