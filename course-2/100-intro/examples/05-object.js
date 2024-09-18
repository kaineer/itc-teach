//
const lt = function(v, message = ">") {
  console.log(message, typeof v);
}

lt({});
lt([]);
lt(new Date());
lt(null);
