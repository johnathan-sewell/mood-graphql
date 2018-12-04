module.exports = func =>
  new Promise((resolve, reject) => {
    func((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
