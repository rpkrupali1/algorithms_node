import { romanToInt } from './roman_to_integer';

describe('romanToInt', () => {
  it('should convert single symbols', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('X')).toBe(10);
    expect(romanToInt('L')).toBe(50);
    expect(romanToInt('C')).toBe(100);
    expect(romanToInt('D')).toBe(500);
    expect(romanToInt('M')).toBe(1000);
  });

  it('should handle additive cases', () => {
    expect(romanToInt('II')).toBe(2);
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('XII')).toBe(12);
    expect(romanToInt('XXVII')).toBe(27);
  });

  it('should handle subtractive cases', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('XL')).toBe(40);
    expect(romanToInt('XC')).toBe(90);
    expect(romanToInt('CD')).toBe(400);
    expect(romanToInt('CM')).toBe(900);
  });

  it('should handle complex numbers', () => {
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });

  it('should handle empty string', () => {
    expect(romanToInt('')).toBe(0);
  });
});
