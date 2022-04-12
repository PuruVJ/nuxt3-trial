export default async function () {
  const data = await $fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=5');

  return data;
}
