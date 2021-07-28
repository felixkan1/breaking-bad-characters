const BREAKING_BAD_CHARACTERS_URL =
  'https://www.breakingbadapi.com/api/characters';

export async function getAllCharacters() {
  const charactersInfo = await await (
    await fetch(BREAKING_BAD_CHARACTERS_URL)
  ).json();

  return charactersInfo;
}
