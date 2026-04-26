const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    exampleInput: "nums = [2,7,11,15], target = 9",
    exampleOutput: "[0,1]"
  },
  {
    id: 2,
    title: "Palindrome Number",
    difficulty: "Medium",
    description:
      "Given an integer x, return true if x is palindrome integer.",
    exampleInput: "x = 121",
    exampleOutput: "true"
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    exampleInput: 's = "abcabcbb"',
    exampleOutput: "3"
  },
  {
    id: 4,
    title: "Reverse String",
    difficulty: "Easy",
    description:
      "Write a function that reverses a string.",
    exampleInput: '"hello"',
    exampleOutput: '"olleh"'
  },
  {
    id: 5,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description:
      "Given a string containing just brackets, determine if the input string is valid.",
    exampleInput: '"()[]{}"',
    exampleOutput: "true"
  },
  {
    id: 6,
    title: "Merge Sorted Array",
    difficulty: "Medium",
    description:
      "Merge two sorted arrays into one sorted array.",
    exampleInput: "[1,2,3] and [2,5,6]",
    exampleOutput: "[1,2,2,3,5,6]"
  },
  {
    id: 7,
    title: "Climbing Stairs",
    difficulty: "Medium",
    description:
      "You are climbing stairs. Each time you can climb 1 or 2 steps. Find total distinct ways.",
    exampleInput: "n = 3",
    exampleOutput: "3"
  },
  {
    id: 8,
    title: "Binary Search",
    difficulty: "Easy",
    description:
      "Implement binary search on sorted array.",
    exampleInput: "[1,2,3,4,5], target = 4",
    exampleOutput: "3"
  },
  {
    id: 9,
    title: "Search Insert Position",
    difficulty: "Easy",
    description:
      "Return the index if target is found or where it would be inserted.",
    exampleInput: "[1,3,5,6], target = 2",
    exampleOutput: "1"
  },
  {
    id: 10,
    title: "Maximum Subarray",
    difficulty: "Medium",
    description:
      "Find the contiguous subarray with the largest sum.",
    exampleInput: "[-2,1,-3,4,-1,2,1,-5,4]",
    exampleOutput: "6"
  },
  {
    id: 11,
    title: "Product of Array Except Self",
    difficulty: "Hard",
    description:
      "Return an array output where output[i] is equal to product of all elements except nums[i].",
    exampleInput: "[1,2,3,4]",
    exampleOutput: "[24,12,8,6]"
  },
  {
    id: 12,
    title: "Rotate Array",
    difficulty: "Medium",
    description:
      "Rotate the array to the right by k steps.",
    exampleInput: "[1,2,3,4,5,6,7], k=3",
    exampleOutput: "[5,6,7,1,2,3,4]"
  }
];

export default problems;