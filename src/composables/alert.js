import { reactive } from 'vue';

const alerts = reactive([]);

export function useAlert() {
  const turnOnAlert = (message = '', type = 'error') => {
    alerts.push({ message, type });
    setTimeout(() => {
      alerts.shift(); // 맨 첫번째 요소 제거
    }, 2000);
  };

  const turnOnSuccess = message => turnOnAlert(message, 'success');

  return {
    alerts,
    turnOnAlert,
    turnOnSuccess,
  };
}
