/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let y = 0; nums.length > y; y++) {
    for (let i = y+1; nums.length > i; i++) {
      if ((nums[y] + nums[i]) === target) {
        return [y, i]
      }
    }
  }  
};

let testCases = [
  {
    nums:   [2, 7, 11, 15],
    target: 9
  },
  {
    nums:   [3, 2, 4],
    target: 6
  },
  {
    nums:   [3, 3],
    target: 6
  },
  {
    nums:   [2, 7, 11, 15],
    target: 9
  },
  {
    nums:   [3, 2, 3],
    target: 6
  }
]

let roi = ''
for (let elem of testCases) {
  roi = twoSum(elem.nums, elem.target)
  console.log(roi)
}