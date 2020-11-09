const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`;

capitals.split("\n").forEach((s) => {
  const [capital, country] = s.split(",");
  console.log(`${capital} is in ${country}`);
});
