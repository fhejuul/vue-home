import { ref, onBeforeUnmount } from "vue";

export const useCurrentTime = () => {
  const currentTime = ref(new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'medium',
    timeZone: 'Europe/Copenhagen',
  }).format(new Date()),);

  
  const updateCurrentTime = () => {
    currentTime.value = new Intl.DateTimeFormat('en-GB', {
        timeStyle: 'medium',
        timeZone: 'Europe/Copenhagen',
      }).format(new Date());
    
  };
  const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });
  return {
    currentTime,
  };
};