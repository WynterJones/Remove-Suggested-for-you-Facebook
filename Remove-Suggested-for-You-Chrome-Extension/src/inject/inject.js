chrome.extension.sendMessage({}, function (response) {
  setInterval(hideSuggestedPosts, 2000);

  function hideSuggestedPosts() {
    console.log("looking for suggested posts...");
    const suggestedPosts = document.querySelectorAll(".b6ax4al1");
    suggestedPosts.forEach((suggestedPost) => {
      const searchValue = "Suggested for you";
      const innerElements = suggestedPost.querySelectorAll("*");

      for (let i = 0; i < innerElements.length; i++) {
        if (innerElements[i].innerHTML.indexOf(searchValue) > -1) {
          console.log("found a suggested post");
          suggestedPost.remove();
        }
      }
    });
  }
});
