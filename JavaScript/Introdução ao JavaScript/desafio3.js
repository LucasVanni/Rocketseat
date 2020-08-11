function temHabilidade(skills) {
  if(skills.indexOf('Javascript') == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

var skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade(skills); // true ou false