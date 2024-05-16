/**
 *
 * @param {*} hidelocation
 */

function hide(hidelocation) {
  let hideLocation = hidelocation;
  function seek() {
    return hideLocation;
  }
  return seek;
}

let startGame = hide("Paris");
console.log(startGame());
//When trying to logging hideLocation directly from outside of the hide and seek functions,its undefined so handling it through exception
try {
  console.log(hideLocation);
  console.log("Start of try runs");
} catch (err) {
  console.err(`Error has occurred!`);
}
