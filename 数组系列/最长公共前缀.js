/**
 * leetcode 14 题
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 示例1
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 示例2
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 */

// 方法1. 横向遍历

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 如果传入了空数组，直接返回 ""
    if (strs.length == 0) return "";
    // 如果数组只传入了一个元素，直接返回这个元素
    if (strs.length == 1) return strs[0];
    // 数组的长度
    var len = strs.length,
        str = '',
        result = '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < len; j++) {
            if (strs[j][i] == undefined || strs[j][i] != strs[0][i]) {
                str = '';
                break;
            } else {
                str = strs[0][i];
            }
        }
        if (str == '') {
            break;
        }
        result += str;
    }

    return result;
};