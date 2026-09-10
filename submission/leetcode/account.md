# LeetCode Account & Submission Info

- **LeetCode Profile**: [https://leetcode.com/u/ahmedseyam01/](https://leetcode.com/u/ahmedseyam01/)
- **Submission Link**: [https://leetcode.com/submissions/detail/2137611818/](https://leetcode.com/submissions/detail/2137611818/)
- **Submission Status**: Accepted ✅

---

## Problem: 344. Reverse String (C#)

### Problem Description
Write a function that reverses a string. The input string is given as an array of characters `char[] s`.
You must do this by modifying the input array **in-place** with `O(1)` extra memory.

### Solution Approach: Two Pointers
1. Initialize two pointers: `left = 0` at the beginning of the character array, and `right = s.Length - 1` at the end.
2. Loop while `left < right`:
   - Swap character at `s[left]` with character at `s[right]`.
   - Increment `left` (`left++`).
   - Decrement `right` (`right--`).
3. Return (the array is modified in-place).

### C# Source Code
```csharp
public class Solution {
    public void ReverseString(char[] s) {
        int left = 0;
        int right = s.Length - 1;
        
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            
            left++;
            right--;
        }
    }
}
```

### Complexity Analysis
- **Time Complexity**: `O(N)` where `N` is the length of the string array. Each character is visited at most once, performing `N / 2` swap operations.
- **Space Complexity**: `O(1)` constant extra space since the reversal is done strictly in-place using two integer pointers and a temporary char variable.
