//Objective is to find the first insert position in an array

let nums = [1,3,5,6], target = 5


//O(logn) solution using binary search

let low = 0
let high = nums.length - 1

while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    
    if (nums[mid] == target) {
        return mid
    } else if (nums[mid] > target) {
        high = mid - 1
    } else {
        low = mid + 1
    }
}

return low