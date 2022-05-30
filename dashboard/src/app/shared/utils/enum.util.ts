export function enumToSelectItemArray<TEnum>(
  enumObj: TEnum,
  descriptions: Record<keyof TEnum, string>
) {
  return (Object.keys(enumObj) as Array<keyof TEnum>)
    .filter((key) => Number.isNaN(Number(key)))
    .map((p) => ({
      label: descriptions[p],
      value: enumObj[p],
    }));
}
