const findPeaks = function(timeSeries) {
  let peaks = [[0, -1]];

  timeSeries.forEach((data) => {
    if (data.value > peaks[0][1]) {
      peaks.push([data.time, data.value]);
    }
  });

  return peaks;
};