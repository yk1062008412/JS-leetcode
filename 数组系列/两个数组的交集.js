/**
 * leetcode 350 题
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例1
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 * 示例2
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 */


// 方法1. Map哈希
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 定义map，用来存储数据集
    var map = new Map();
    // 定义结果集
    var result = [];
    // 循环遍历nums1，并把元素全部存入map
    for (let i = 0; i < nums1.length; i++) {
        // 如果当前map里有这个元素
        if (map.has(nums1[i])) {
            // 取当前元素的数量
            let curCount = map.get(nums1[i]);
            // 当前数量+1，并存入map
            map.set(nums1[i], ++curCount);
        } else {
            // 当前map没有这个元素，存入map，并设置数量为1
            map.set(nums1[i], 1);
        }
    }
    // 循环遍历nums2
    for (let i = 0; i < nums2.length; i++) {
        // 如果当前元素在map里存在
        if (map.has(nums2[i])) {
            // 取当前元素的数量
            let curCount = map.get(nums2[i]);
            // 如果当前元素数量为1
            if (curCount <= 1) {
                // 删除这个元素
                map.delete(nums2[i])
            } else {
                // 当前元素数量减1
                map.set(nums2[i], --curCount)
            }
            // 有这个值，放入结果集
            result.push(nums2[i])
        }
    }

    // 返回结果集
    return result;
};






// 方法2. 排序+双指针
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection2 = function (nums1, nums2) {
    // 辅助函数
    // 快速排序(从小到大)
    const quickSort = (arr) => {
        let left = [];
        let right = [];
        if (arr.length === 0) return [];
        let baseNum = arr.shift();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= baseNum) {
                right.push(arr[i])
            } else {
                left.push(arr[i])
            }
        }
        return quickSort(left).concat([baseNum], quickSort(right));
    }
    // 排序后的nums1
    var sortedNums1 = quickSort(nums1);
    // console.log(sortedNums1);
    // 排序后的nums2
    var sortedNums2 = quickSort(nums2);
    // console.log(sortedNums2);
    // 排序完成，正式开始对比
    // 定义结果集
    var result = []
    // num1的length
    const len1 = sortedNums1.length;
    // num2 的length
    const len2 = sortedNums2.length;
    // 定义num1的指针
    let index1 = 0;
    // 定义num2的指针
    let index2 = 0;
    // 两个指针都大于
    while (index1 < len1 && index2 < len2) {
        // 如果两个相同,即交集
        if (sortedNums1[index1] === sortedNums2[index2]) {
            // 交集元素放入结果集
            result.push(sortedNums1[index1])
            // 两个指针都前移
            index1++;
            index2++;
        } else if (sortedNums1[index1] > sortedNums2[index2]) { // 如果数组1的元素 大于 数组2的元素
            // 数组2的指针前移
            index2++;
        } else if (sortedNums1[index1] < sortedNums2[index2]) { // 如果数组2的元素 大于 数组1的元素
            // 数组1的指针前移
            index1++;
        }
    }
    console.log(result)
    // 返回最终结果集
    return result;
};

// 测试case
intersection2([1,2,2,1], [2,2]);
intersection2([4,9,5], [9,4,9,8,4]);
