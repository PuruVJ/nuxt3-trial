export default async function () {
  const req = await fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=5');
  const data = await req.json();

  return data;
}
