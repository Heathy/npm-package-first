
  console.time();
  const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1];
  function bubbleSort(arr) {
    const len = arr.length
    // 外层循环i控制比较的轮数
    for (let i = 0; i < len; i++) {
      // 里层循环控制每一轮比较的次数j，arr[i] 只用跟其余的len - i个元素比较
      for (let j = 1; j < len - i; j++) {
        // 若前一个元素"大于"后一个元素，则两者交换位置
        if (arr[j - 1] > arr[j]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        }
      }
    }
    return arr
  };
  console.log(bubbleSort(arr));
  console.timeEnd();

