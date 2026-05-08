let x = 180

function move(keyCode){
  x += keyCode == 37 ? -10 : keyCode == 39 ? 10 : 0
  return x
}

test("player moves left", () => {
  expect(move(37)).toBe(170)
})

test("player moves right", () => {
  expect(move(39)).toBe(180)
})
