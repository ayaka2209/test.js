const userAge = 26;
const hasStudentCard = false;
const minAge = 3;
const maxAge = 25;


// 定数を定義した　定数にtrueを代入
// === aとbが等しい場合にtrueを返す
if (hasStudentCard === true) {
  console.log("学割適用");
} else if (userAge >= minAge && userAge <= maxAge) {
  console.log("学割適用");
} else {
  console.log("条件に合わないため割引できません");
}
//　もし学生証を持っていれば”学割適用"がコンソールに出力される
