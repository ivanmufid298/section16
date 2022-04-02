import { penjumlahan } from '@/utils/penjumlahan.js'
import { pengurangan } from '@/utils/pengurangan.js'
import { pembagian } from '@/utils/pembagian.js'
import { perkalian } from '@/utils/perkalian.js'
import { ratarata } from '@/utils/ratarata.js'

describe('Melakukan Perhitungan Operasi Bilangan', () => {
  test('Penjumlahan dua bilangan positif', () => {
    expect(penjumlahan(2, 4)).toBe(6)
  })
  test('Pengurangan dua bilangan positif', () => {
    expect(pengurangan(9, 4)).toBe(5)
  })
  test('Pembagian dua bilangan positif', () => {
    expect(pembagian(16, 4)).toBe(4)
  })
  test('Perkalian dua bilangan positif', () => {
    expect(perkalian(2, 4)).toBe(8)
  })
  test('Rata-rata lima bilangan positif', () => {
    expect(ratarata(1, 1, 1, 1, 1)).toBe(5)
  })
})
