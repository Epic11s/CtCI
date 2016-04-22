/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//              Bryan

function scheduleMasseuse(requests, i, schedule, best) {
  i = i || 0;
  schedule = schedule || [];
  best = best || { sum:0, schedule: [] };

  if (i >= requests.length) {
    const newSum = schedule.reduce((sum, val) => sum+val, 0);
    if (newSum > best.sum) {
      best.sum = newSum;
      best.schedule = schedule.slice();
    }
  } else {
    for (i; i < requests.length; i++) {
      schedule.push(requests[i]);
      scheduleMasseuse(requests, i+2, schedule, best);
      schedule.pop();
    }
  }
  return best.schedule;
}
