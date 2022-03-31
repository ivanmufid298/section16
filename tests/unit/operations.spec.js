import { penjumlahan } from '@/utils/penjumlahan.js'

describe('Melakukan Penjumlahan', () => {
  test('Penjumlahan dua bilangan positif', () => {
    expect(penjumlahan(2, 4)).toBe(6)
  })
})
