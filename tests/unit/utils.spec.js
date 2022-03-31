import { penjumlahan } from '@/utils'

describe('Test fungsionalitas dari utils', () => {
  it('Lakukan penjumlahan bilangan positif', () => {
    expect(penjumlahan(2, 4).text()).toBe(6)
  })
  it('Lakukan penjumlahan bilangan positif dan negatif', () => {
    expect(penjumlahan(2, -4).text()).toBe(-2)
  })
})
