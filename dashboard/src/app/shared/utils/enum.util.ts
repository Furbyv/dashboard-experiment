export function enumToSelectItemArray<TEnum>(
  enumObj: TEnum,
  descriptions: Record<keyof TEnum, string>
) {
  return (Object.keys(enumObj) as Array<keyof TEnum>).map((p) => ({
    label: descriptions[p],
    value: enumObj[p],
  }));
}
