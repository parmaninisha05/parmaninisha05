function RotatingCube(cube_name,color,rotation_speed){
    this.cube_name = cube_name;
    this.color = color;
    this.rotation_speed = rotation_speed;
}
let cubes = [];
let cube1 = new RotatingCube("Nisha", "Pink", 50);
cubes.push(cube1);
let cube2 = new RotatingCube("Nirmit", "Red", 30);
cubes.push(cube2);
let cube3 = new RotatingCube("Avinash", "Blue", 60);
cubes.push(cube3);
viewCubes (cubes)
console.table(cubes);
function findCube(cubes, property, value){
return cubes.find(c => c[property] == value)
}
console.log(findCube(cubes, "cube_name", "Nisha"));

function getSlowestCube(cubes){
    cubes.sort((a,b)=> a.rotation_speed - b.rotation_speed);
    return cubes[0];
}
console.table(getSlowestCube(cubes));
function editProperty(obj,prob,new_val){
    obj[prop] = new_val;
    viewCubes(cubes)
    }

    function sortByRotationSpeed(){
        cubes.sort((a,b)=> a.rotation_speed - b.rotation_speed);
        ViewCubes(cubes);    
    }
