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
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }

    // Show current tab, add "active" to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabID).className = "tab-button active";
}

