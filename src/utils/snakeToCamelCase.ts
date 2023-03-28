export const snakeToCamelCase = (str: string): string =>
  str.replace(/([-_][a-z0-9])/gi, ($1) =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );

export const convertObjectFromSnakeToCamelCase = <T>(
  obj: Record<string, any>
) => {
  return Object.keys(obj).reduce((prev, cur) => {
    return { ...prev, [snakeToCamelCase(cur)]: obj[cur] };
  }, {}) as T;
};
