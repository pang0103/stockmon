var a = "12/11/2014";

const change = (date) => {
  let result = date.split("/");
  for (i = 0; i < result.length; i++) {
    if (result[i].length == 1) {
      result[i] = "0".concat(result[i]);
    }
  }
  return result[2] + result[0] + result[1];
};

console.log(change(a));

const checkEmail = (email) => {
  let re = new RegExp("\\w+@[a-zA-Z0-9_]+?\\.+[a-zA-Z]");
  return re.test(email);
};

// console.log(checkEmail("foxfirejack@gmail."));

const checkDate = (date) => {
  let re = new RegExp("^\\d{4}\\-\\d{2}\\-\\d{2}$");

  if (!re.test(date)) {
    return false;
  }
  if (!Date.parse(date)) {
    return false;
  }

  return true;
};
console.log(checkDate("2021-22-12"));
