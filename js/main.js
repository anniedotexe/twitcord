function changeTab(tabID, tabName) {
    var i, tabContent, tabButton;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all tab buttons and remove "active"
    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove("active");
    }

    // Show current tab, add "active" to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabID).classList.add("active");
}

function clickReaction(reactID) {
    document.getElementById(reactID).classList.toggle("clicked");
}

function clickFollow(buttonID) {
    document.getElementById(buttonID).innerHTML = "Unfollow";
    if (document.getElementById(buttonID).classList.contains("clicked")) {
        document.getElementById(buttonID).innerHTML = "Follow";
    }
    else {
        document.getElementById(buttonID).innerHTML = "Unfollow";
    }
    document.getElementById(buttonID).classList.toggle("clicked")
}