enum LoadingState {
  isLoading = "IS_LOADING",
  isLoadingDone = "IS_LOADING_DONE",
  isLoadingFailed = "IS_LOADING_FAILED",
}

const isLoading = (state: LoadingState) => state === LoadingState.isLoading;

console.log(isLoading(LoadingState.isLoadingDone));

function getRandomNumber(limit: 5 | 6 | 7): number {
  return Math.floor(Math.random() * limit) + 1;
}

console.log(getRandomNumber(6));
