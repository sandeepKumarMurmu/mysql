let str = "acAC";

console.log(checkbalance(str));

function checkbalance(str) {
  if (str.length % 2 == 1) return "not balanced";
  let stack = [];
  for (var i = 0; i < str.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] != str[i].toLowerCase())
      stack.push(str[i]);
    else if (stack[stack.length - 1] == str[i].toLowerCase()) stack.pop();
  }

  return stack.length === 0 ? 1 : 0;
}
