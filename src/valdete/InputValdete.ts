/**
 * @function InputValdete
 * @param v : 入力値
 * @returns : 値が空でなければtrue
 */

export const isValdete = (v: string | string[]): boolean => {
  let result = false;
  if (v instanceof Array) {
    result = v.length === 0;
  } else {
    result = v === '';
  }

  return result;
};
