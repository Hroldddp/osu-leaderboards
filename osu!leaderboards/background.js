chrome.commands.onCommand.addListener(function(command) {
  if (command === "open-osu-game") {
    chrome.tabs.create({ url: "https://osu.ppy.sh/rankings/osu/performance" });
  }
});