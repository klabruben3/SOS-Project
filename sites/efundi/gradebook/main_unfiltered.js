const is_gradebook_unfilterred =
  url == sttn125 || url == sttn115 || url == nphy111;

if (is_gradebook_unfilterred) {
  const sum = createSums();
  courseGrade.textContent = `${sum[0].toFixed(2)}%`;
} else {
  console.log("Not unfiltered gradebook");
}
