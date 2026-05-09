function collide(playerX, enemyX) {
  return enemyX < playerX + 40 &&
         enemyX + 40 > playerX
}

test("collision works correctly", () => {
  expect(collide(100, 110)).toBe(true)
})

test("no collision works correctly", () => {
  expect(collide(100, 300)).toBe(false)
})
