function doJob(name, person) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (person.stamina > 50) {
        res({
          result: `${name} success`,
          loss: 30,
        });
      } else {
        rej(new Error(`${name} failed`));
      }
    }, 1000);
  });
}

const harin = { stamina: 100 };

doJob("work", harin)
  .then((v) => {
    console.log(v.result);
    harin.stamina -= v.loss;
    return doJob("study", harin);
  })
  .then((v) => {
    console.log(v.result);
    harin.stamina -= v.loss;
    return doJob("work", harin);
  })
  .then((v) => {
    console.log(v.result);
    harin.stamina -= v.loss;
    return doJob("study", harin);
  });
